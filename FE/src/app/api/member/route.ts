export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        memberId: 5,
        image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/avatar.jpeg",
      },
      error: null,
    })
  );
}
