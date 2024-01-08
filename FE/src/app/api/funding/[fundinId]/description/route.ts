export async function GET(_: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        longDescription:
          "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg",
      },
      error: null,
    })
  );
}
