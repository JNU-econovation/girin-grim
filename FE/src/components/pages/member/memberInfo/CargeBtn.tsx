import StyledBtn from "@/components/common/StyledBtn";
import { useRouter } from "next/navigation";
export default function CargeBtn() {
  const router = useRouter();
  const onCLick = () => {
    router.push("/charge");
  };
  return (
    <div className="w-[3.25rem]">
      <StyledBtn
        text="충전"
        handler={() => onCLick()}
        style="h-full mt-0 text-base font-nanum font-semibold"
      />
    </div>
  );
}
