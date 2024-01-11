import { notice } from "@/constants/commonData";

export default function Notice() {
  return (
    <ul className="m-[1.14rem] ml-10 list-disc">
      {notice.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
