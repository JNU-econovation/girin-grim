import { HomeState } from "@/store/HomeState";
import { useRecoilState } from "recoil";

export default function ExtendBtn() {
  const [{ page }, setPage] = useRecoilState(HomeState);
  const isFirstPage = page == 0;
  const text = isFirstPage ? "다음 페이지" : "이전 페이지";
  return (
    <div className="w-full flex justify-center my-[5.62rem]">
      <button
        className="px-[7rem] py-[1.12rem] border mx-auto text-colorb9b border-colord9d shadow-[0_0.125rem_0.25rem_0_#a4a5a5] rounded-[0.2rem]"
        onClick={() => {
          isFirstPage && setPage((prev) => ({ ...prev, page: prev.page + 1 }));
          !isFirstPage && setPage((prev) => ({ ...prev, page: prev.page - 1 }));
        }}
      >
        {text}
      </button>
    </div>
  );
}
