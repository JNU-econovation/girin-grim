"use client";

import StyledBtn from "../common/StyledBtn";
import { useRecoilValue } from "recoil";
import { SelectedOption } from "@/store/ChargeState";
import { postCharge } from "@/apis/apis";

type Props = {
  totalCost: number;
};

export default function ChargeBtn({ totalCost }: Readonly<Props>) {
  const selected = useRecoilValue(SelectedOption);
  const isOkToCharge = selected !== -1;

  const charge = () => {
    postCharge(totalCost)
      .then((res) => {
        alert("충전이 완료되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("충전에 실패하였습니다.");
      });
  };

  return (
    <div className="mt-7">
      <StyledBtn text="충전하기" disable={!isOkToCharge} handler={charge} />
    </div>
  );
}
