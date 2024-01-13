import { LoginUser } from "@/Model/User";
import { LoginState } from "@/store/LoginState";
import { useRecoilState } from "recoil";

type Props = {
  title: string;
  type?: string;
  icon: JSX.Element;
  placeholder: string;
};

export default function LoginInput({
  title,
  type = "text",
  icon,
  placeholder,
}: Readonly<Props>) {
  const [login, setLogin] = useRecoilState<LoginUser>(LoginState);
  return (
    <div className="mt-[1.8rem]">
      <label
        htmlFor="email"
        className="font-nanum text-[0.625rem] text-[400] text-color656"
      >
        {title}
      </label>
      <div className="relative">
        <div className="absolute top-1/2 left-[1rem] -translate-y-1/2">
          {icon}
        </div>
        <input
          name={type}
          type={type}
          className="w-full h-[3.75rem] px-14 shrink-0 rounded-[0.4rem] outline-none border-2"
          placeholder={placeholder}
          value={login[title as keyof LoginUser]}
          onChange={(e) => {
            setLogin((prev: LoginUser) => ({
              ...prev,
              [type]: e.target.value,
            }));
          }}
        />
      </div>
    </div>
  );
}
