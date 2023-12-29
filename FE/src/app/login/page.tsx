import AgreementCheckbox from "@/components/common/AgreementCheckbox";
import StyledBtn from "@/components/common/StyledBtn";
import LoginForm from "@/components/login/LoginForm";
import LoginHeader from "@/components/login/LoginHeader";

export default function LoginPage() {
  return (
    // text-[#525252]
    <section className="w-[32rem] mt-[9.56rem] mx-auto">
      <LoginHeader />
      <LoginForm />
      <AgreementCheckbox text="로그인 상태 유지" style="mt-[1rem]" />
      <StyledBtn text="로그인" style="mt-[2.4rem]" />
    </section>
  );
}
