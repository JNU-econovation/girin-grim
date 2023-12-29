import Link from "next/link";

export default function LoginRedirect() {
  return (
    <div className="cursor-default w-full text-center mt-8">
      <span className="text-color999">
        비밀번호 재설정 |{" "}
        <Link href={"/join"}>
          <span className="text-main">회원가입</span>
        </Link>
      </span>
    </div>
  );
}
