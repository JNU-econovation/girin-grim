type Props = {
  size: "sm" | "md" | "lg";
};

export default function Coin({ size }: Readonly<Props>) {
  const sizeClass =
    size == "sm" ? "w-5 h-5" : size == "md" ? "w-6 h-6" : "w-7 h-7";

  return (
    <div
      className={`rounded-full bg-colorb0b flex justify-center items-center text-sm text-white font-semibold ${sizeClass}`}
    >
      C
    </div>
  );
}
