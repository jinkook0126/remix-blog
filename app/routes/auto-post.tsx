import { type ActionFunctionArgs } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";
import * as cheerio from "cheerio";
import { templateAsText } from "~/prompt/relationship/relationship-psychology-template";

interface AutoPostRequestBody {
  title: string;
  url: string;
  html: string;
}

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supabase 클라이언트 생성 (Storage 업로드용)
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  // POST 요청만 허용
  if (request.method !== "POST") {
    return Response.json({ success: false }, { status: 405 });
  }

  try {
    // Request body 파싱
    const body: AutoPostRequestBody = await request.json();
    console.log(body);
    // 필수 필드 검증
    if (!body.title || !body.url || !body.html) {
      return Response.json({ success: false }, { status: 400 });
    }

    // OpenAI ChatGPT를 통한 검색 테스트
    console.log("=== ChatGPT 연동 테스트 시작 ===");

    try {
      // relationship-psychology.md 파일 읽기
      const promptPath = join(
        process.cwd(),
        "app",
        "prompt",
        "relationship",
        "relationship-psychology.md"
      );
      const systemPrompt = await readFile(promptPath, "utf-8");

      console.log("System Prompt 로드 완료");
      const response = await fetch(
        "http://psytimes.co.kr/news/view.php?idx=11630"
      )
        .then((res) => {
          return res.text();
        })
        .catch((err) => {
          console.error(err);
          return "";
        });

      const $ = cheerio.load(response);
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
            content: systemPrompt,
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

      const chatResponse =
        completion.choices[0]?.message?.content || "응답 없음";
      const finishReason = completion.choices[0]?.finish_reason;

      console.log("=== ChatGPT 응답 ===");
      console.log("응답 내용:", chatResponse);
      console.log("응답 토큰 수:", completion.usage?.total_tokens);
      console.log("응답 완료 이유:", finishReason);
      console.log("=== ChatGPT 연동 테스트 완료 ===");

      // chatResponse를 JSON으로 파싱
      let parsedResponse: { html?: string; [key: string]: any };
      try {
        // JSON 코드 블록이 있을 수 있으므로 제거
        const cleanedResponse = chatResponse
          .replace(/```json\n?/g, "")
          .replace(/```\n?/g, "")
          .trim();
        parsedResponse = JSON.parse(cleanedResponse);
        console.log("=== JSON 파싱 성공 ===");
        console.log("파싱된 데이터:", parsedResponse);
      } catch (parseError) {
        console.error("=== JSON 파싱 오류 ===");
        console.error("파싱 오류:", parseError);
        throw new Error("chatResponse를 JSON으로 파싱할 수 없습니다.");
      }

      // html 키 추출
      const htmlContent = parsedResponse.html;
      if (!htmlContent) {
        throw new Error("파싱된 JSON에 'html' 키가 없습니다.");
      }
      console.log("=== HTML 추출 완료 ===");
      console.log("HTML 길이:", htmlContent.length);

      // 이미지 생성을 위한 프롬프트 생성
      const imagePromptPath = join(
        process.cwd(),
        "app",
        "prompt",
        "relationship",
        "relationship-psychology-image.md"
      );
      const imageSystemPrompt = await readFile(imagePromptPath, "utf-8");

      console.log("=== 이미지 생성 시작 ===");
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: `${imageSystemPrompt}\n\n제목 : ${
          parsedResponse.title
        }\n\n태그 : ${parsedResponse.tags?.join(", ")}\n\n메타설명 : ${
          parsedResponse.metaDescription
        }`,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      // b64_json 형식일 때는 b64_json 필드에서 base64 문자열을 가져옴
      const base64Image = imageResponse.data?.[0]?.b64_json;
      if (!base64Image) {
        throw new Error("이미지 생성에 실패했습니다.");
      }

      console.log("=== 이미지 생성 완료 ===");

      // base64 문자열을 Buffer로 변환
      const buffer = Buffer.from(base64Image, "base64");
      const uuid = randomUUID();
      const filePath = `image/thumbnail/${uuid}.png`;

      // Supabase Storage에 이미지 업로드
      console.log("=== Supabase Storage 업로드 시작 ===");
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("image") // 버킷 이름 (실제 버킷 이름으로 변경 필요)
        .upload(filePath, buffer, {
          contentType: "image/png",
          upsert: false,
        });

      if (uploadError) {
        console.error("=== Supabase Storage 업로드 오류 ===");
        console.error("오류 내용:", uploadError);
        throw uploadError;
      }

      // 업로드된 이미지의 공개 URL 가져오기
      const {
        data: { publicUrl },
      } = supabase.storage.from("image").getPublicUrl(filePath);

      console.log("=== Supabase Storage 업로드 완료 ===");
      console.log("이미지 공개 URL:", publicUrl);
    } catch (openaiError) {
      console.error("=== ChatGPT 연동 오류 ===");
      console.error("오류 내용:", openaiError);
      throw openaiError;
    }

    // 임시로 성공 응답 반환
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in auto-post action:", error);
    return Response.json({ success: false }, { status: 500 });
  }
};
