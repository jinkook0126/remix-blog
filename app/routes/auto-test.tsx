import { type ActionFunctionArgs } from "@remix-run/node";

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  console.log("=== request ===");
  console.log(request);
  console.log("=== request.json ===");
  const body = await request.json();
  console.log(body);
  const htmlDecoded = Buffer.from(body.html, "base64").toString("utf8");
  console.log(htmlDecoded);
  return Response.json({ success: true }, { status: 200 });
};
