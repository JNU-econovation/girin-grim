export async function GET(request: Request) {
  const isMine = {
    success: true,
    response: {
      isMine: true,
      member: {
        memberId: 1,
        nickname: "민주",
        email: "daswss@naver.com",
        image: "사진",
        aboutMe: "본인소개",
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
        image: "사진",
        aboutMe:
          "조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)조금 길게 쓰면 이렇습니다 :)",
        address: null,
        coin: null,
        university: null, //이거 빈 배열로 해줄 수 있는지?
      },
    },
    error: null,
  };

  return new Response(JSON.stringify(notMine));
}
