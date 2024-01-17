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
  const params = {
    funding: {
      title: "펀딩 제목1",
      image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
      shortDescription:
        "짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!",
      university: 1, //각 대학의 id
      longDescription:
        "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg", //대표 이미지로 대체
      startTime: "2024-01-17T17:20:00",
      endTime: "2024-02-17T00:00:00",
      estimatedStartTime: "2024-02-17T00:00:00", //예상 실행일- 상세정보에서 보여줘야하기때문에 필요함
      goalMoney: 90000,
    },
    options: [
      {
        price: 10000,
        name: "옵션1",
        isPickup: true,
        items: [
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
        ],
        quantity: 3,
      },
      {
        price: 10000,
        name: "옵션1",
        isPickup: false,
        items: [
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
        ],
        quantity: 3,
      },
      {
        price: 10000,
        name: "옵션1",
        isPickup: true,
        items: [
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
          {
            name: "계란과자2개",
          },
        ],
        quantity: 3,
      },
    ],
  };

  const donateParams = {
    funding: {
      title:
        "펀딩 제목1펀딩 제목1펀딩 제목1펀딩 제목1펀딩 제목1펀딩 제목1펀딩 제목1",
      image: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/Image.jpg",
      shortDescription:
        "짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!짧은 설명!",
      university: 1,
      longDescription:
        "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg",
      startTime: "2024-01-17T17:24:00",
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
