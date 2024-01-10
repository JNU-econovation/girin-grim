import Hero from "@/components/common/Hero";
import MemberInfoList from "./MemberInfoList";

const InfoData = [
  {
    title: "크레파스",
    content: "250000",
    icon: "icon",
    array: false as false,
  },
  {
    title: "자기소개",
    content:
      "안녕하세요 저는 박건규입니다.안녕하세요 저는 박건규입니다.안녕하세요 저는 박건규입니다.안녕하세요 저는 박건규입니다.",
    icon: null,
    array: false as false,
  },
  {
    title: "연락처",
    content: "010-1234-5678",
    icon: null,
    array: false as false,
  },
  {
    title: "주소",
    content: "부산광역시 금정구 부산대학로 63번길 2",
    icon: null,
    array: false as false,
  },
  {
    title: "관심 대학",
    content: [
      "전남대학교",
      "전남대학교",
      "전남대학교",
      "전남대학교",
      "전남대학교",
      "전남대학교",
      "전남대학교",
      "전남대학교",
    ] as string[],
    icon: null,
    array: true as true,
  },
];

export default function InfoSectoin() {
  return (
    <section className="mt-24 relative z-50 flex flex-col items-center max-w-[20rem] w-full mx-auto">
      <Hero page="member" />
      <h1 className="text-[1.625rem] font-black mt-4 cursor-default">
        박건규박건규건규건규
      </h1>
      <span className="text-md text-[#696969] mt-1 mb-5">205292@jnu.ac.kr</span>
      {InfoData.map((data, index) => (
        <MemberInfoList
          key={index}
          title={data.title}
          content={data.content}
          icon={data.icon}
          array={data.array}
        />
      ))}
    </section>
  );
}
