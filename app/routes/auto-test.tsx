import { randomUUID } from "node:crypto";
import { type ActionFunctionArgs } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";

// Supabase 클라이언트 생성 (Storage 업로드용)
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);
const url = "";
export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  try {
    const buffer = Buffer.from(url, "base64");
    const uuid = randomUUID();
    const filePath = `thumbnail/${uuid}.png`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("image") // 버킷 이름 (실제 버킷 이름으로 변경 필요)
      .upload(filePath, buffer, {
        contentType: "image/png",
        upsert: false,
      });
    if (uploadError) {
      console.error("=== Supabase Storage 업로드 오류 ===");
      console.error("오 류 내용:", uploadError);
      return Response.json({ success: false }, { status: 500 });
    }
    console.log(uploadData);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("=== Supabase Storage 업로드 오류 ===");
    console.error("오 류 내용:", error);
    return Response.json({ success: false }, { status: 500 });
  }
};
