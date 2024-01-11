export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      success: true,
      response: {
        totalPrice: 25000.0, //결제한 총 금액
        member: {
          memberId: 1,
          nickname: "밍주", //크리에이터 정보
        },
        address: "광주 북구 용봉로77", //서포터 정보
        funding: {
          fundingId: 1, //이것도 있으면 좋을 것 같아!!!
          type: "GIFT",
          title: "펀딩",
          image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
          university: "세경대학교",
          dueDate: 3, //이 부분 추가해야 할 듯!
        },
        options: [
          {
            optionId: 1,
            name: "옵션1",
            price: 10000.0, //각 옵션의 가격
            quantity: 2, //구매한 수량
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
            price: 20000.0,
            quantity: 3,
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
        ],
      },
      error: null,
    })
  );
}
