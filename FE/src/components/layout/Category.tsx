import { All, Donate, Gift } from "../common/icon";

export default function Category() {
  const category = [
    {
      icon: <All />,
      title: "전체 ",
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
  return (
    <section className="w-[6.25rem] h-[8.13rem] rounded-[0.63rem] p-[1rem] bg-white font-nanum text-[0.75rem] font-extrabold shadow-[0_0.25rem_0.25rem_#0000000d] absolute transition-all top-[2.3rem] left-[4rem] ">
      <ul className="mx-auto mt-[0.3rem]">
        {category.map((category) => (
          <li key={category.title} className="mb-[0.3rem]">
            <div className="flex items-center gap-[0.5rem]">
              {category.icon}
              {category.title}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
