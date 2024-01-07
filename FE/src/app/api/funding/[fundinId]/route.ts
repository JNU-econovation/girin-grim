import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { fundingId } }: { params: { fundingId: number } }
) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        isMine: true,
        coin: 500000.0, //로그인한 사용자의 코인
        member: {
          memberId: 1,
          nickname: "밍주", //크리에이터  정보
        },
        funding: {
          fundingId: 1,
          type: "DONATE",
          title: "제목",
          image: "/assets/FeedImage.svg",
          university: "삼육보건대학교",
          shortDescription: "짧은 설명",
          startTime: "2024-01-03T09:36:00",
          endTime: "2024-10-13T22:36:00",
          estimateStartTime: "2024-10-12T22:36:00",
          rate: 0,
          curMoney: 0.0,
          goalMoney: 10000.0,
        },
        options: [
          {
            optionId: 1,
            name: "옵션1",
            price: 10000.0,
            quantity: 3,
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
                name: "계란과자2개",
              },
              {
                itemId: 5,
                name: "계란과자2개",
              },
              {
                itemId: 6,
                name: "계란과자2개",
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
                name: "계란과자2개",
              },
              {
                itemId: 8,
                name: "계란과자2개",
              },
              {
                itemId: 9,
                name: "계란과자2개",
              },
            ],
          },
        ],
      },
      error: null,
    })
  );
}
