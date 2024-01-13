type Props = {
  setSelected: () => void;
  selected: number;
};

export default function DevBtn({ setSelected, selected }: Props) {
  return (
    <button
      className="w-full h-28 mt-5 text-xl font-bold bg-slate-200 border-2 rounded-md cursor-default shadow-sm"
      onClick={() => setSelected()}
      style={{
        borderColor: 0 == selected ? "#FFD600" : "#E4E4E4",
        backgroundColor: 0 == selected ? "#FFD600" : "#FFFFFF",
      }}
    >
      Dev용 충전 버튼
      <h1>이 버튼을 눌러주세요!!</h1>
    </button>
  );
}
