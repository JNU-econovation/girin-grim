export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        favUniversity: [
          //회원가입했을때 설정했던 관심대학
          {
            favUniversityId: 142,
            name: "세종사이버대학교",
          },
          {
            favUniversityId: 176,
            name: "세종대학교",
          },
          {
            favUniversityId: 237,
            name: "고려대학교 세종캠퍼스",
          },
          {
            favUniversityId: 239,
            name: "홍익대학교 세종캠퍼스",
          },
        ],
        funding: [
          {
            fundingId: 1,
            title: "환경을 생각하는 비즈 만들기 KIT",
            image: "/assets/FeedImage.svg",
            university: "전남대",
            rate: 99,
            shortDescription:
              "우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! 우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
          {
            fundingId: 2,
            title: "환경을 생각할랑말랑한 비즈",
            image: "/assets/FeedImage.svg",
            university: "촌남대",
            rate: 81,
            shortDescription:
              "우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! 우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
          {
            fundingId: 3,
            title: "환경을 생각하는 비즈 만들기 KIT",
            image: "/assets/FeedImage.svg",
            university: "전남대",
            rate: 68,
            shortDescription:
              "엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄엄청긴 설명 ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
          {
            fundingId: 4,
            title: "환경을 생각하려다 만 비즈",
            image: "/assets/FeedImage.svg",
            university: "전남대",
            rate: 46,
            shortDescription:
              "우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! 우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
          {
            fundingId: 5,
            title: "환경을 생각하는 비즈 만들기 KIT",
            image: "/assets/FeedImage.svg",
            university: "전남대",
            rate: 11,
            shortDescription:
              "우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! 우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
          {
            fundingId: 6,
            title: "환경을 생각하는 비즈 만들기 KIT",
            image: "/assets/FeedImage.svg",
            university: "전남대",
            rate: 2,
            shortDescription:
              "우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! 우리 동네의 풍경에 대한 영수증을 지갑에 가져! 정말로! 가져보세요. 블록체인이란 그런 것이니까요! ",
            dueDate: 3,
            member: {
              memberId: 1,
              nickname: "블록체인 동아리 블록체체",
            },
          },
        ],
      },
      error: null,
    })
  );
}
