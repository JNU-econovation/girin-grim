export async function GET(request: Request) {
  const isMine = {
    success: true,
    response: {
      isMine: true,
      member: {
        memberId: 1,
        nickname: "박건규",
        email: "qkrrjsrb0@gmail.com",
        image:
          "https://girin-grim.s3.ap-northeast-2.amazonaws.com/_30ecc42f-caeb-40aa-8194-3c6883cbab4c.jpeg",
        aboutMe: "안녕하세요오.. 건규에요오.. 이건 뭐에요오..?",
        address: "광주광역시 북구 용봉로 77 정보화본부 1층 101호",
        coin: 500000.0,
        university: [
          {
            universityId: 1,
            name: "전남대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
          {
            universityId: 2,
            name: "조선대학교",
          },
        ],
      },
    },
    error: null,
  };
  const notMine = {
    success: true,
    response: {
      isMine: false,
      member: {
        memberId: 2,
        nickname: "민주",
        email: null,
        image:
          "https://girin-grim.s3.ap-northeast-2.amazonaws.com/_30ecc42f-caeb-40aa-8194-3c6883cbab4c.jpeg",
        aboutMe:
          "조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)",
        address: null,
        coin: null,
        university: null, //이거 빈 배열로 해줄 수 있는지?
      },
    },
    error: null,
  };

  return new Response(JSON.stringify(isMine));
}
