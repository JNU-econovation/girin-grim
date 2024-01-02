import useUniv from "@/hooks/useUniv";
import UnivUnitSection from "./UnivUnitSection";

export default function UnivList() {
  const { data, isLoading, error } = useUniv();
  return (
    <>
      {/* {isLoading && <div>로딩중</div>} */}
      {error && <div>{error.message}</div>}
      {data && (
        <UnivUnitSection
          data={data.response.university}
          type="univ"
          inputTitle="대학"
        />
      )}
    </>
  );
}
