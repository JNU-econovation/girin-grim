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
    <section className="flex gap-2 justify-center w-full mt-20">
      <button
        className="bg-colord9d rounded-lg px-3 text-center py-1"
        onClick={() =>
          !isFirstPage && setPage((prev) => ({ ...prev, page: prev.page - 1 }))
        }
      >
        &lt;
      </button>
      {pageConst.map(({ id, isFirst, text }) => (
        <button
          key={id}
          className={`px-3 py-1 border rounded-lg ${
            page === id && " border-main"
          }`}
          onClick={() => setPage((prev) => ({ ...prev, page: id }))}
        >
          {text}
        </button>
      ))}
      <button
        className="bg-colord9d rounded-lg px-3 text-center py-1"
        onClick={() =>
          isFirstPage && setPage((prev) => ({ ...prev, page: prev.page + 1 }))
        }
      >
        &gt;
      </button>
    </section>
  );
}
