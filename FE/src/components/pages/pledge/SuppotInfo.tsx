import { formatSuppotData } from "@/utils/dataFomat";
import AddressComponents from "./AddressComponents";

type Props = {
  supporter: {
    address: string;
  };
  type: "DONATE" | "GIFT";
};

export default function SuppotInfo({ supporter, type }: Readonly<Props>) {
  const suppotData = formatSuppotData(supporter.address);
  return (
    <section className="m-[1.14rem]">
      <div className="flex text-xl px-6 py-4 bg-colorede rounded-md gap-6">
        <ul className="flex flex-col gap-3">
          {suppotData.map(({ icon, title, value }) => {
            if (type === "DONATE" && title === "주소") return <></>;
            return (
              <li
                key={title}
                className="grid grid-cols-[1fr_3fr_20fr] items-center w-full pl-10 gap-5"
              >
                {icon}
                <p className="flex justify-between">
                  {title.split("").map((char) => (
                    <span key={char}>{char}</span>
                  ))}
                </p>
                <p>{value ? value : <AddressComponents />}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
