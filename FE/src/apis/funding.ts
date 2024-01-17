import { FundingDetail, FundingOptions, Pledge } from "@/Model/Funding";
import { TPostResponse, TResponse } from "@/Model/Response";
import { Server } from "./axios";
import { fundingDetailURL } from "@/constants/urls";
import { getToken } from "@/utils/authenticate";
import { formatPledgeData } from "@/utils/dataFomat";

export const getFundingDetail = async (
  fundingId: number
): Promise<TResponse<FundingDetail>> => {
  //TODO: 반환 타입 지정하기
  const data = Server.get(fundingDetailURL + fundingId).then((res) => res.data);
  return data;
};

export const getFundingLongDescription = async (
  fundingId: number
): Promise<TResponse<{ longDescription: string }>> => {
  const data = Server.get(fundingDetailURL + fundingId + "/description").then(
    (res) => res.data
  );
  return data;
};

export const getPledge = async (
  fundingId: number
): Promise<TResponse<Pledge>> => {
  const pledgeUrl = `/funding/${fundingId}/payment`;
  const data = Server.get(pledgeUrl, {
    headers: {
      Authorization: getToken(),
    },
  }).then((res) => res.data);
  return data;
};

export const postPayment = async (
  fundingId: number,
  paymentData: {
    memberId: number;
    type: "DONATE" | "GIFT";
    options: FundingOptions[];
    price: number;
    address: string;
  }
): Promise<TPostResponse> => {
  const { memberId, type, options, price, address } =
    formatPledgeData(paymentData);
  const pledgeUrl = `/funding/${fundingId}/payment`;
  const body = {
    memberId,
    type,
    options,
    price,
    address,
  };
  const data = await Server.post(pledgeUrl, body, {
    headers: {
      Authorization: getToken(),
    },
  }).then((res) => res.data);
  return data;
};

export const postFunding = async () => {
  let currentDate = new Date();
  let futureDate = new Date(currentDate.getTime() + 3000 + 9 * 60 * 60000);
  let futureTimeString = futureDate.toISOString();
  const params = {
    funding: {
      title: "다이어리에 붙일 수 있는 귀여운 스티커",
      image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
      shortDescription:
        "일상에서 감정이입하기 좋은 귀여운 디자인으로 구성되어 있습니다. 노트북, 핸드폰, 수첩 등 어디에든 붙일 수 있는 다양한 크기의 스티커가 포함되어 있어 일상에 즐거움을 더해줄 거에요!",
      university: 1, //각 대학의 id
      longDescription:
        "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg", //대표 이미지로 대체
      startTime: futureTimeString,
      endTime: "2024-02-17T00:00:00",
      estimatedStartTime: "2024-02-17T00:00:00", //예상 실행일- 상세정보에서 보여줘야하기때문에 필요함
      goalMoney: 90000,
    },
    options: [
      {
        price: 10000,
        name: "킹받는 오리의 일상 (10,000) 무한대",
        isPickup: true,
        items: [
          {
            name: "현장수령형 정보: 1월 25일 스토리움 *23#부스 ",
          },
          {
            name: "스티커 1pc",
          },
          {
            name: "포장지",
          },
          {
            name: "포장지",
          },
          {
            name: "포카포카포카",
          },
        ],
        quantity: -1,
      },
      {
        price: 10000,
        name: "비오는 날 쌍둥이 (10,000) 무한대",
        isPickup: false,
        items: [
          {
            name: "현장수령형 정보: 1월 25일 스토리움 *23#부스 ",
          },
          {
            name: "스티커 1pc",
          },
        ],
        quantity: -1,
      },
      {
        price: 10000,
        name: "뒝구르르 냥냥이 (10,000) 무한대",
        isPickup: true,
        items: [
          {
            name: "스티커 1pc",
          },
        ],
        quantity: -1,
      },
    ],
  };

  const donateParams = {
    funding: {
      title: "우리의 ‘기리니’에게 사료를 선물해주세요!",
      image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
      shortDescription:
        "우리의 친구 ‘기리니’ 는 매일 많은 양의 신선한 식료품을 필요로 합니다. 그러나 식량 구입 비용이 점점 더 부담스러워져 어려움을 겪고있습니다. 기린에게 필요한 사료를 구입하는데 도움을 주세요!",
      university: 1,
      longDescription:
        "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg",
      startTime: futureTimeString,
      endTime: "2024-02-15T22:36:00",
      estimatedStartTime: "2024-02-15T22:36:00",
      goalMoney: 100000,
    },
    option: [],
  };
  const data = await Server.post("/funding", donateParams, {
    headers: {
      Authorization: getToken(),
    },
  }).then((res) => res.data);
  return data;
};
