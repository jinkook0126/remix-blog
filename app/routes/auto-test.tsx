import { type ActionFunctionArgs } from "@remix-run/node";

export const action = async ({
  request,
}: ActionFunctionArgs): Promise<Response> => {
  console.log("test");
  const response = await fetch("http://psytimes.co.kr/news/view.php?idx=11630")
    .then((res) => {
      return res.text();
    })
    .catch((err) => {
      console.error(err);
      return "";
    });

  console.log(response);

  return Response.json({ success: true });
};
