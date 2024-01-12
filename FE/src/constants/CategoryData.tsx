import {
  All,
  BankTransfer,
  Credit,
  Donate,
  Gift,
  Kakao,
} from "@/components/common/icon";

export const categoryData = [
  {
    icon: <All />,
    title: "전체",
  },
  {
    icon: <Donate />,
    title: "기부형",
  },
  {
    icon: <Gift />,
    title: "수령형",
  },
];

export const chargeNotice = [
  "해당 상품은 부가세가 포함된 가격입니다.",
  "환불이 불가합니다.",
  "결제에 대한 자세한 문의는 메일로 보내주세요.",
];

export const paymentOptions = [
  { title: "카카오페이", image: <Kakao /> },
  { title: "네이버페이", image: <Credit /> },
  { title: "신용카드", image: <BankTransfer /> },
];
