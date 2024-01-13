import { formatSuppotData } from "@/utils/dataFomat";

type Props = {
  supporter: {
    address: string;
  };
};

export default function SuppotInfo({ supporter }: Readonly<Props>) {
  const suppotData = formatSuppotData(supporter.address);
  return (
    <section className="m-[1.14rem]">
      <div className="flex text-[1.25rem] px-6 py-4 bg-colore7e rounded-md gap-6">
        <ul>
          {suppotData.map(({ icon, title, value }) => (
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
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
