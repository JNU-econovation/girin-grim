import StyledBtn from "@/components/common/StyledBtn";

export default function SettingBtn() {
  return (
    <div className="absolute bottom-14 -right-56 w-36 h-[2.875rem] shrink-0 shadow-lg overflow-hidden">
      <StyledBtn text="수정하기" style="text-xl font-bold h-full" />
    </div>
  );
}
