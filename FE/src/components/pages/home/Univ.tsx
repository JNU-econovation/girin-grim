"use client";
import { useRecoilState } from "recoil";
import { Setting } from "../../common/icon";
import { HomeState, HomeUniSelectedState } from "@/store/HomeState";
import { FavUniversity } from "@/Model/Feed";
import { getUnivText, getunivHeader } from "@/utils/Home";
import { CheckIsLoggedIn } from "@/utils/authenticate";
import { useRouter } from "next/navigation";

type Props = {
  favUniversity: FavUniversity[];
};

export default function Univ({ favUniversity }: Readonly<Props>) {
  const [home, setHome] = useRecoilState(HomeState);
  const [isSelected, setIsSelected] = useRecoilState(HomeUniSelectedState);
  const univText = getUnivText(isSelected, favUniversity);
  const univHeader = getunivHeader(isSelected, home.uni.univName);
  const isLoggedIn = CheckIsLoggedIn();
  const router = useRouter();

  return (
    <div
      className="mt-[1.2rem] text-colorb9b font-nanum text-sm flex gap-[0.4rem] underline cursor-default"
      onClick={() => !isLoggedIn && router.push("/login")}
    >
      <Setting />
      <div>
        <span className="font-bold">{univHeader}</span>
        <span> | </span>
        <span className="font-medium">{univText}</span>
        {isSelected && (
          <button
            onClick={() => {
              setHome((prev) => ({
                ...prev,
                uni: { univId: 0, univName: "" },
              }));
              setIsSelected(false);
            }}
          >
            <span>{"관심대학 보기 "}&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
}
