import LoginForm from "@/components/login/LoginForm";
import LoginHeader from "@/components/login/LoginHeader";
import LoginRedirect from "@/components/login/LoginRedirect";

export default function LoginPage() {
  return (
    // text-[#525252]
    <section className="w-[32rem] mt-[7rem] mx-auto">
      <LoginHeader />
      <LoginForm />
      <LoginRedirect />
    </section>
  );
}
