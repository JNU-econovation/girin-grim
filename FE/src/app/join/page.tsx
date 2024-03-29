import dynamic from "next/dynamic";
const JoinForm = dynamic(() => import("@/components/pages/join/JoinForm"), {
  ssr: false,
});

export default function JoinPage() {
  return (
    <div className="w-[100vw] p-7 bg-bgGrey">
      <section className="w-[55.5rem] h-[89.3rem] bg-white mx-auto">
        <div className="w-[31.9rem] mx-auto pt-[4rem]">
          <h1 className="font-noto font-bold text-color656 text-[3.12rem] ">
            회원가입
          </h1>
          <h3 className="font-nanum  text-color656 text-[1.12rem]">APPLY</h3>
          <JoinForm />
        </div>
      </section>
    </div>
  );
}
