import { type ActionFunctionArgs } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";
import * as cheerio from "cheerio";
import { templateAsText } from "~/prompt/relationship/relationship-psychology-template";
import relationshipPsychologyPrompt from "~/prompt/relationship/relationship-psychology.md?raw";
import relationshipPsychologyImagePrompt from "~/prompt/relationship/relationship-psychology-image.md?raw";
import dayjs from "dayjs";

interface AutoPostRequestBody {
  title: string;
  url: string;
  html: string;
}

interface GptResponse {
  title: string;
  slug: string;
  metaDescription: string;
  html: string;
  tags: string[];
  readTimeMinutes: number;
  threadSummary: string;
}

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

const parseJsonResponse = (response: string) => {
  const cleaned = response
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();
  return JSON.parse(cleaned);
};

const uploadImageToStorage = async (base64Image: string) => {
  const buffer = Buffer.from(base64Image, "base64");
  const filePath = `thumbnail/${randomUUID()}.png`;

  const { error: uploadError } = await supabase.storage
    .from("image")
    .upload(filePath, buffer, {
      contentType: "image/png",
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(filePath);

  return publicUrl;
};

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  if (request.method !== "POST") {
    return Response.json({ success: false }, { status: 405 });
  }

  try {
    const body: AutoPostRequestBody = await request.json();

    if (!body.title || !body.url || !body.html) {
      throw new Error("요청 본문에 필수 필드가 없습니다.");
    }
    const htmlDecoded = Buffer.from(body.html, "base64").toString("utf8");
    const $ = cheerio.load(htmlDecoded);
    const mainText = $("body").text().trim();

    const userContent = `
      당신은 위 system 지침과 JSON 템플릿을 따라서만 응답해야 합니다.
      아래 [원문 HTML]은 텍스트 내용만 참고하고, HTML 태그/클래스/이미지는 절대 재사용하지 마세요.
      **최종 html 필드는 오직 system 지침에 정의된 태그와 클래스만 사용해서 새로 구성하여 json 형식으로 출력하세요.**
      
      [원문 URL]
      ${body.url ?? ""}
      
      [원문 HTML]
      ${mainText}
    `.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: relationshipPsychologyPrompt,
        },
        {
          role: "assistant",
          content: templateAsText,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
      max_tokens: 3500,
    });

    const chatResponse = completion.choices[0]?.message?.content;
    const finishReason = completion.choices[0]?.finish_reason;

    if (!chatResponse || finishReason === "stop") {
      throw new Error(`GPT 응답에 실패했습니다. : ${finishReason}`);
    }

    console.log("=== chatResponse ===");
    console.log(chatResponse);

    const parsedResponse: GptResponse = parseJsonResponse(chatResponse);

    console.log("=== parsedResponse ===");
    console.log(parsedResponse.title);

    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${relationshipPsychologyImagePrompt}\n\n제목 : ${
        parsedResponse.title
      }\n\n태그 : ${parsedResponse.tags?.join(", ")}\n\n메타설명 : ${
        parsedResponse.metaDescription
      }`,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const base64Image = imageResponse.data?.[0]?.b64_json;

    if (!base64Image) {
      throw new Error("이미지 생성에 실패했습니다.");
    }

    const publicUrl = await uploadImageToStorage(base64Image);

    console.log("=== publicUrl ===");
    console.log(publicUrl);

    await prisma.blogPost.create({
      data: {
        title: parsedResponse.title,
        slug: parsedResponse.slug,
        content: parsedResponse.html,
        excerpt: parsedResponse.metaDescription,
        published: false,
        tags: parsedResponse.tags,
        featuredImage: publicUrl,
        readingTime: parsedResponse.readTimeMinutes,
        thread: parsedResponse.threadSummary,
        publishedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
    });

    return Response.json(
      {
        success: true,
        thread: parsedResponse.threadSummary,
        postingUrl: `${process.env.SITE_URL}/blog/${parsedResponse.slug}`,
        error: "",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error: error });
  }
};
