// import icon from "../../public/icon.jpg";

export default function Header() {
  return (
    <header className="w-full py-2 border-b-2 ">
      <div className="w-full max-w-6xl mx-auto bg">
        <div className="w-full flex justify-center items-center">
          {/* <div className="w-28 h-16 bg-yellow-400" /> */}
          <img src="/assets/icon.jpg" alt="icon" className="w-36 h-14 my-4 " />
        </div>

        <ul className="flex gap-5 font-semibold">
          <li>카테고리</li>
          <li>대학</li>
          <li>추천</li>
          <li className="">펀딩 올리기</li>
        </ul>
      </div>
    </header>
  );
}
