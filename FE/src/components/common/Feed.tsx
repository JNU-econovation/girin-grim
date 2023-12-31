export default function Feed() {
  return (
    <section className="font-nanum cursor-default">
      {/* <img src="" alt="" /> */}
      <div className="w-full h-[17rem] bg-slate-300 " />
      <div className="flex text-[0.75rem] gap-[0.3rem] mt-[0.875rem]">
        <h4 className="font-extrabold">전남대학교</h4>
        <span> | </span>
        <span>블록체인 동아리 블록체제</span>
      </div>
      <h2 className="text-[1.375rem] font-black mt-3 cursor-default">
        환경을 생각하는 비즈 만들기 KIT
      </h2>
      <p className="text-[0.75rem] text-color999 leading-4 mt-[0.69rem] cursor-default">
        우리 동네의 풍경에 대한 영수증을 지갑에 가져 정말로! 가져보세요.
        블록체인이란 그런 것이니까요!우리 동네의 풍경에 대한 영수증을 지갑에
        가져 정말로! 가져보세요. 블록체인이란 그런 것이니까요!
      </p>
      <div className="w-full mt-[0.56rem] flex flex-col gap-[0.375rem]">
        <progress max={100} value={60} />
        <div className="w-full flex justify-between text-[0.87rem] font-[700]">
          <span className=" text-main">D-3</span>
          <span className=" text-color999">60%</span>
        </div>
      </div>
    </section>
  );
}
