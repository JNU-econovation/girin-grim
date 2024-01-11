export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        funding: [
          {
            fundingId: 1,
            title: "펀딩 제목1",
            image: "/assets/FeedImage.svg",
            university: "전남대학교", //피그마에 추가됨
            rate: 70,
            shortDescription: "짧은 설명",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "홍길동", //닉네임으로 통일!
            },
            state: {
              isFinished: false,
              isSuccess: true,
            },
          },
          {
            fundingId: 2,
            title: "펀딩 제목1",
            image: "/assets/FeedImage.svg",
            university: "전남대학교", //피그마에 추가됨
            rate: 70,
            shortDescription: "짧은 설명",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "홍길동", //닉네임으로 통일!
            },
            state: {
              isFinished: false,
              isSuccess: true,
            },
          },
        ],
      },
      error: null,
    })
  );
}
