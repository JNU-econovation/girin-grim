import { useRouter } from "next/navigation";
import StyledBtn from "../../common/StyledBtn";

type Props = {
  memberId: number;
};

export default function BackBtn({ memberId }: Props) {
  const redirectUrl = `/member/${memberId}`;
  const router = useRouter();
  const goBack = () => {
    router.push(redirectUrl);
  };
  return (
    <div className="w-[22.5rem] mx-auto mt-16">
      <StyledBtn text="후원 목록으로" handler={() => goBack()} />
    </div>
  );
}
