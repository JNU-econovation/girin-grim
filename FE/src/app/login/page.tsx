import LoginForm from "@/components/pages/login/LoginForm";
import LoginHeader from "@/components/pages/login/LoginHeader";
import LoginRedirect from "@/components/pages/login/LoginRedirect";

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
