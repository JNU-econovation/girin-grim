export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        member: { memberId: 1, nickname: "이름" },
        funding: {
          fundingId: 1,
          type: "DONATE",
          title: "펀딩 이름",
          image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
          university: "대학교",
          dueDate: 3,
        },
        supporter: {
          coin: 500000,
          address: "광주 용봉동", //없다면 null
        },
      },
      error: null,
    })
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      success: true,
      response: null,
      error: null,
    })
  );
}
