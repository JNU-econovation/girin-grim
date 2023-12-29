import { LoginData } from "@/constants/LoginData";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form className="mt-[2.68rem]">
      {LoginData.map(({ id, title, type, icon, placeholder }) => (
        <LoginInput
          key={id}
          title={title}
          type={type}
          icon={icon}
          placeholder={placeholder}
        />
      ))}
    </form>
  );
}
