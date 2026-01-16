import { type ActionFunctionArgs } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";
import * as cheerio from "cheerio";
import relationshipPsychologyPrompt from "~/prompt/relationship/relationship-psychology.md?raw";
import relationshipPsychologyImagePrompt from "~/prompt/relationship/relationship-psychology-image.md?raw";
import relationshipPsychologySummationPrompt from "~/prompt/relationship/relationship-psychology-summation.md?raw";
import { createSummationPrompt } from "~/prompt/relationship/relationship-psychology-summation-user-prompt";
import threadSystemPrompt from "~/prompt/relationship/threadSystem.md?raw";

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
  } = supabase.storage.from("image").getPublicUrl(filePath);

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

    const summationPrompt = createSummationPrompt(mainText);
    const summationCompletion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: relationshipPsychologySummationPrompt,
        },
        {
          role: "user",
          content: summationPrompt,
        },
      ],
      max_tokens: 800,
      temperature: 0.2,
    });

    const userContent = `
    당신은 위 system 지침과 JSON 템플릿을 따라서만 응답해야 합니다.
    **최종 html 필드는 오직 system 지침에 정의된 태그와 클래스만 사용해서 새로 구성하여 json 형식으로 출력하세요.**
    
    [요약본]
    ${summationCompletion.choices[0]?.message?.content}
  `.trim();
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: relationshipPsychologyPrompt,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
      max_tokens: 4500,
      temperature: 0.7,
    });

    const chatResponse = completion.choices[0]?.message?.content;
    const finishReason = completion.choices[0]?.finish_reason;

    if (!chatResponse) {
      throw new Error(`GPT 응답에 실패했습니다. : ${finishReason}`);
    }

    const parsedResponse: GptResponse = parseJsonResponse(chatResponse);

    const threadCompletion = await openai.chat.completions.create({
      model: "gpt-4.1-mini", // 비용 우선
      max_tokens: 280,
      temperature: 0.9,
      top_p: 0.9,
      frequency_penalty: 0.6,
      presence_penalty: 0.7,
      messages: [
        {
          role: "system",
          content: threadSystemPrompt,
        },
        {
          role: "user",
          content: `[원문 내용]\n${mainText}`,
        },
      ],
    });

    const threadResponse = threadCompletion.choices[0]?.message?.content;
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

    await prisma.blogPost.create({
      data: {
        title: parsedResponse.title,
        slug: parsedResponse.slug,
        content: parsedResponse.html,
        excerpt: parsedResponse.metaDescription,
        published: true,
        tags: parsedResponse.tags,
        featuredImage: publicUrl,
        readingTime: parsedResponse.readTimeMinutes,
        thread: threadResponse,
        publishedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    const postUrl = `${process.env.SITE_URL}/blog/${parsedResponse.slug}`;
    return Response.json(
      {
        success: true,
        thread: `${threadResponse}\n${postUrl}`,
        postingUrl: postUrl,
        error: "",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ success: false, error: error.message });
    }
    return Response.json({ success: false, error });
  }
};
