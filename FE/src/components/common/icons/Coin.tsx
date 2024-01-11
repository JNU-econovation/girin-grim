type Props = {
  size: "sm" | "md" | "lg";
  style?: string;
};

export default function Coin({ size, style }: Readonly<Props>) {
  const sizeClass =
    size == "sm" ? "w-5 h-5" : size == "md" ? "w-6 h-6" : "w-7 h-7";

  return (
    <div
      className={`rounded-full bg-colorb0b flex justify-center items-center text-sm text-white font-semibold ${sizeClass} ${style}`}
    >
      C
    </div>
  );
}
