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
  return (
    <div className="mt-[2rem]">
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
        />
      </div>
    </div>
  );
}
