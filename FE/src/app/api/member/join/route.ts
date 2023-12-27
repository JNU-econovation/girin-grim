export async function GET(_: Request, { params }: any) {
  // return new Response(
  //   JSON.stringify({
  //     success: false,
  //     response: null,
  //     error: {
  //       code: 423,
  //       message: "중복된 이메일입니다.",
  //     },
  //   }),
  //   {
  //     headers: { "content-type": "application/json" },
  //   }
  // );
  return new Response(
    JSON.stringify({
      success: true,
      response: null,
      error: null,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
export async function POST(request: Request) {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      success: true,
      response: null,
      error: null,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
