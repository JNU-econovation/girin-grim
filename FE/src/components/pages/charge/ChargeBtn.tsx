"use client";
import StyledBtn from "../../common/StyledBtn";
import { useRecoilState } from "recoil";
import { SelectedOption } from "@/store/ChargeState";
import { postCharge } from "@/apis/charge";
import { useRouter } from "next/navigation";
import { getInsufficient } from "@/utils/localData";

type Props = {
  totalCost: number;
  reset: () => void;
};

export default function ChargeBtn({ totalCost, reset }: Readonly<Props>) {
  const [selected, setSelected] = useRecoilState(SelectedOption);
  const isOkToCharge = selected !== -1;
  const router = useRouter();

  const charge = () => {
    postCharge(totalCost)
      .then(() => {
        alert("충전이 완료되었습니다.");
        // const require = getInsufficient();
        setSelected(-1);
        reset();
        router.back();
      })
      .catch(() => alert("충전에 실패하였습니다."));
  };

  return (
    <div className="mt-7">
      <StyledBtn text="충전하기" disable={!isOkToCharge} handler={charge} />
    </div>
  );
}
