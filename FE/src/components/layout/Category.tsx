"use client";
import { categoryData } from "@/constants/CategoryData";
import { HomeState } from "@/store/HomeState";
import { useRecoilState } from "recoil";

export default function Category() {
  const [{ category }, setHome] = useRecoilState(HomeState);

  return (
    <div className="bg-gradient-to-t via-colord9d from-colord9d absolute top-[2.9rem] left-[1.4rem] p-[0.15rem] rounded-[0.63rem]">
      <section className="w-[8.63rem] h-[10.9rem] rounded-[0.63rem] p-[1.45rem] bg-white text-[1.125rem] font-bold">
        <ul className="mx-auto mt-[0.3rem]">
          {categoryData.map(({ title, icon }) => (
            <button
              key={title}
              onClick={() => setHome((prev) => ({ ...prev, category: title }))}
            >
              <li className="mb-[1.43rem]">
                <div
                  className={`flex items-center gap-[0.75rem] ${
                    category == title ? "" : "text-color9f9"
                  }`}
                >
                  {icon}
                  {title}
                </div>
              </li>
            </button>
          ))}
        </ul>
      </section>
    </div>
  );
}
