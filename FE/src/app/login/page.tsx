import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    // text-[#525252]
    <section className="w-[32rem] mt-[9.56rem] mx-auto">
      <h1 className="font-notoKR font-bold text-color656 text-[3.125rem]">
        로그인
      </h1>
      <h3 className="text-color656 font-nanum text-[1.125rem] font-[400]">
        LOGIN
      </h3>
      <LoginForm />
    </section>
  );
}
