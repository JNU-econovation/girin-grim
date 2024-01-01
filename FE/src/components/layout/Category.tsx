import { categoryData } from "@/constants/CategoryData";

export default function Category() {
  return (
    <section className="w-[6.25rem] h-[8.13rem] rounded-[0.63rem] p-[1rem] bg-white text-[0.75rem] font-extrabold absolute top-[2.3rem] left-[4rem] ">
      <ul className="mx-auto mt-[0.3rem]">
        {categoryData.map((category) => (
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
