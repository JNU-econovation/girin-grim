export default function Receipt({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full bg-colorede pb-4">
      <section className="w-full max-w-7xl mx-auto grid grid-cols-[3fr_2fr] gap-3">
        {children}
      </section>
    </div>
  );
}
