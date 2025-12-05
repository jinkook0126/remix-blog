import { type ActionFunctionArgs } from "@remix-run/node";
import relationshipPsychologyPrompt from "~/prompt/relationship/relationship-psychology.md?raw";

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  console.log("=== request ===");
  console.log(request);
  console.log("=== request.json ===");
  const body = await request.json();
  console.log(body);
  return Response.json({ success: true }, { status: 200 });
};
