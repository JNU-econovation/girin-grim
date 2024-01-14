export default function GaugeBg({ height }: Readonly<{ height: number }>) {
  return (
    <>
      <div className="flex flex-col items-center absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
        <div
          className={`w-5 bg-white translate-y-2 h-${height}`}
          style={{
            height: height + "rem",
          }}
        />
        <div className="w-12 h-12 bg-white rounded-full" />
      </div>
      <div className="flex flex-col items-center absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 z-0">
        <div
          className={`w-7 bg-yellow-600 translate-y-2 h-${height}`}
          style={{
            height: height + "rem",
          }}
        />
        <div className="w-14 h-14 bg-yellow-600 rounded-full" />
      </div>
    </>
  );
}
