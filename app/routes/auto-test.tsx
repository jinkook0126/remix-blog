import { type ActionFunctionArgs } from "@remix-run/node";
import OpenAI from "openai";
import * as cheerio from "cheerio";
import relationshipPsychologyPrompt from "~/prompt/relationship/relationship-psychology.md?raw";
import relationshipPsychologySummationPrompt from "~/prompt/relationship/relationship-psychology-summation.md?raw";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  const url = "http://psytimes.co.kr/news/view.php?idx=11613&mcode=m1327vaj";
  const mock = await fetch(url);
  const mockHtml = await mock.text();
  const $mock = cheerio.load(mockHtml);
  const mockMainText = $mock("body").text().trim();

  const summationPrompt = `
  다음은 블로그 원문 HTML이다.
이 글을 "재작성용 요약본"으로 압축해줘.

출력 목적:
- 이 요약본을 기반으로 새로운 SEO 블로그 글을 작성할 예정이다.
- 따라서 정보는 충분히 남기되, 불필요한 문장과 중복은 제거한다.

출력 형식 (반드시 이 구조를 유지):

[주제]
- 한 문장으로 정리

[핵심 요지]
- 글 전체를 관통하는 핵심 주장 5~8개 (불릿)

[세부 포인트]
- 사용법 / 원리 / 이유 / 단계 / 조건 등 (있다면)

[주의사항 및 한계]
- 위험, 오해 소지, 제한점, 주의할 점

[결론 요약]
- 글의 최종 메시지 2~3문장

[원문에서 강조된 표현]
- 반복되거나 강조된 키워드/문장 (있을 경우만)

제약 조건:
- 마크다운 사용 금지
- HTML 태그 사용 금지
- 최대한 짧고 명확하게
- 불필요한 수식어 제거

원문 HTML:
<<<
${mockMainText}
>>>
    `;
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

  console.log("=== chatResponse ===");
  console.log(chatResponse);
  return Response.json({ success: true }, { status: 200 });
};
