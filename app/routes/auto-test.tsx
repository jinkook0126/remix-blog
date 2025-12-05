import { type ActionFunctionArgs } from "@remix-run/node";
import relationshipPsychologyPrompt from "~/prompt/relationship/relationship-psychology.md?raw";

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  console.log("=== relationship-psychology.md 내용 ===");
  console.log(relationshipPsychologyPrompt);
  console.log("=== 파일 길이 ===");
  console.log(relationshipPsychologyPrompt.length);

  return Response.json({ success: true }, { status: 200 });
};
