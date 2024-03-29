import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { fundingId } }: { params: { fundingId: number } }
) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        isMine: false,
        coin: 500000.0, //로그인한 사용자의 코인
        member: {
          memberId: 1,
          nickname: "밍주", //크리에이터  정보
        },
        funding: {
          fundingId: 1,
          type: "GIFT",
          title: "제목",
          image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
          university: "삼육보건대학교",
          shortDescription: "짧은 설명",
          startTime: "2024-01-03T09:36:00",
          endTime: "2024-10-13T22:36:00",
          estimateStartTime: "2024-10-12T22:36:00",
          rate: 10,
          curMoney: 0.0,
          goalMoney: 10000.0,
        },
        options: [
          {
            optionId: 1,
            name: "옵션1",
            price: 10000.0,
            quantity: -1,
            items: [
              {
                itemId: 1,
                name: "계란과자2개",
              },
              {
                itemId: 2,
                name: "계란과자2개",
              },
              {
                itemId: 3,
                name: "계란과자2개",
              },
            ],
          },
          {
            optionId: 2,
            name: "옵션2",
            price: 10000.0,
            quantity: 4,
            items: [
              {
                itemId: 4,
                name: "솨자니마러ㅣㅑㅊ개",
              },
              {
                itemId: 5,
                name: "옵션이에요..",
              },
              {
                itemId: 6,
                name: "히히",
              },
            ],
          },
          {
            optionId: 3,
            name: "옵션3",
            price: 10000.0,
            quantity: 5,
            items: [
              {
                itemId: 7,
                name: "ㅁㄴㅇ",
              },
              {
                itemId: 8,
                name: "계란과ㅇㄴㄹㅎ자2개",
              },
              {
                itemId: 9,
                name: "계란과ㄴㄴㅎㅇㄹㅎㄴㅇ자2개",
              },
            ],
          },
        ],
      },
      error: null,
    })
  );
}
