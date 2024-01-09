export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        coin: 800000, //현재 내가 보유한 코인
      },
      error: null,
    })
  );
}
export async function POST(request: Request) {}
