import { chargeNotice } from "@/constants/CategoryData";

export default function ChargeNoticet() {
  return (
    <>
      <h3 className="mt-8 font-bold">이용 안내</h3>
      <ul className="pl-5">
        {chargeNotice.map((notice) => (
          <li className="list-disc font-light">{notice}</li>
        ))}
      </ul>
    </>
  );
}
