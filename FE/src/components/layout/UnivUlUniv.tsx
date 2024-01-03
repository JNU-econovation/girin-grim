import useUniv from "@/hooks/useUniv";
import UnivUl from "../common/UnivUl";

export default function UnivUlUniv() {
  const { data, isLoading, error } = useUniv();

  return (
    <>
      {data && (
        <UnivUl
          data={data.response.university}
          type="univ"
          modify={() => {
            //TODO: 현재 검색대학을 전역 상태로 만들고, 입력된 string형 대학 이름을 검색 대학으로 modify하는 함수 추가하기
            console.log(data);
          }}
        />
      )}
    </>
  );
}
