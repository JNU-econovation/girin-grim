"use client";

import { joinCheckState, joinState } from "@/store/JoinState";
import { useRecoilState } from "recoil";

type Props = {
  text: string;
  style?: string;
};

export default function AgreementCheckbox({ text, style }: Readonly<Props>) {
  const [check, setCheck] = useRecoilState(joinCheckState);

  const handleAgreement = (isChecked: boolean) => {
    setCheck({ ...check, agree: isChecked });
  };

  return (
    <div className={`flex items-center gap-2 ${style}`}>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        onChange={(e) => handleAgreement(e.target.checked)}
        checked={check.agree}
      />
      <label htmlFor="scales" className="text-[0.875rem] text-color656 text-sm">
        {text}
      </label>
    </div>
  );
}
