import { type ActionFunctionArgs } from "@remix-run/node";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
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
        max_tokens: 2500,
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
