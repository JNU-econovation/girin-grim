import { categoryData } from "@/constants/CategoryData";

export default function Category() {
  return (
    <div className="bg-gradient-to-t via-colord9d from-colord9d absolute top-[2.3rem] left-[1.4rem] p-[0.1rem] rounded-[0.63rem]">
      <section className="w-[8.63rem] h-[10.9rem] rounded-[0.63rem] p-[1.45rem] bg-white text-[1.125rem] font-extrabold  ">
        <ul className="mx-auto mt-[0.3rem]">
          {categoryData.map(({ title, icon }) => (
            <li key={title} className="mb-[0.3rem]">
              <div className="flex items-center gap-[0.75rem]">
                {icon}
                {title}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
