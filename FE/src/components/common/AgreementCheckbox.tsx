"use client";
import { joinState } from "@/store/JoinState";
import { useRecoilState } from "recoil";

type Props = {
  text: string;
  style?: string;
};

export default function AgreementCheckbox({ text, style }: Readonly<Props>) {
  const [form, setForm] = useRecoilState(joinState);

  const handleAgreement = (isChecked: boolean) => {
    setForm({ ...form, agree: isChecked });
  };

  return (
    <div className={`flex items-center gap-2 ${style}`}>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        onChange={(e) => handleAgreement(e.target.checked)}
        checked={form.agree}
      />
      <label
        htmlFor="scales"
        className="text-[0.875rem] text-[#525252] text-sm"
      >
        {text}
      </label>
    </div>
  );
}
