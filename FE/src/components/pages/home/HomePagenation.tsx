import { ArrowLeft, ArrowRight } from "@/components/common/icon";
import { HomeState } from "@/store/HomeState";
import { useRecoilState } from "recoil";

export default function HomePagenation() {
  const pageConst = [
    {
      id: 0,
      isFirst: true,
      text: 1,
    },
    {
      id: 1,
      isFirst: false,
      text: 2,
    },
  ];

  const [{ page }, setPage] = useRecoilState(HomeState);
  const isFirstPage = page == 0;
  return (
    <section className="flex gap-3 justify-center w-full mt-20">
      <button
        className={`${
          page === 0 ? "bg-colorede" : "border-colorede border"
        }  rounded-lg px-3 text-center py-1`}
        onClick={() =>
          !isFirstPage && setPage((prev) => ({ ...prev, page: prev.page - 1 }))
        }
      >
        <ArrowLeft isBlocked={page === 0} />
      </button>
      {pageConst.map(({ id, text }) => (
        <button
          key={id}
          className={`px-3 py-1 border rounded-lg ${
            page === id && " border-main text-main"
          }`}
          onClick={() => setPage((prev) => ({ ...prev, page: id }))}
        >
          {text}
        </button>
      ))}
      <button
        className={`${
          page === 1 ? "bg-colorede" : "border-colorede border"
        }  rounded-lg px-3 text-center py-1`}
        onClick={() =>
          isFirstPage && setPage((prev) => ({ ...prev, page: prev.page + 1 }))
        }
      >
        <ArrowRight isBlocked={page === 1} />
      </button>
    </section>
  );
}
