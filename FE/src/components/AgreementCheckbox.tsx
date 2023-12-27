import { joinForm } from "@/store/join";
import React from "react";
import { useRecoilState } from "recoil";

export default function AgreementCheckbox() {
  const [form, setForm] = useRecoilState(joinForm);

  const handleAgreement = (isChecked: boolean) => {
    setForm({ ...form, agree: isChecked });
  };

  return (
    <div className="flex items-center gap-2">
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
        개인정보 수집 및 이용에 대한 동의
      </label>
    </div>
  );
}
