import { type ActionFunctionArgs } from "@remix-run/node";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

interface AutoPostRequestBody {
  title: string;
  url: string;
  html: string;
}

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    console.log("검색 키워드 (title):", body.title);

    try {
      // relationship-psychology.md 파일 읽기
      const promptPath = join(
        process.cwd(),
        "app",
        "prompt",
        "relationship-psychology.md"
      );
      const systemPrompt = await readFile(promptPath, "utf-8");

      console.log("System Prompt 로드 완료");

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: `${body.title}에 대해 간단히 설명해주세요.`,
          },
        ],
        max_tokens: 500,
      });

      const chatResponse =
        completion.choices[0]?.message?.content || "응답 없음";

      console.log("=== ChatGPT 응답 ===");
      console.log("응답 내용:", chatResponse);
      console.log("응답 토큰 수:", completion.usage?.total_tokens);
      console.log("=== ChatGPT 연동 테스트 완료 ===");
    } catch (openaiError) {
      console.error("=== ChatGPT 연동 오류 ===");
      console.error("오류 내용:", openaiError);
      throw openaiError;
    }

    // TODO: Supabase에 저장하는 로직

    // 임시로 성공 응답 반환
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in auto-post action:", error);
    return Response.json({ success: false }, { status: 500 });
  }
};
