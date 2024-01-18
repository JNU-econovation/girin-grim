import useCharge from "@/hooks/useCharge";
import Agreement from "./Agreement";
import PaymentBtn from "./PaymentBtn";
import Total from "../../common/Total";
import { logout } from "@/utils/authenticate";
import { useRouter } from "next/navigation";

type Props = {
  type: "DONATE" | "GIFT";
  fundingId: number;
  address: string;
};

export default function Payment({ type, fundingId, address }: Readonly<Props>) {
  const { data } = useCharge();
  if (data && data.success == false) {
    const router = useRouter();
    alert("토큰이 만료되었습니다! 다시 로그인 해주세요.");
    logout();
    router.replace("/login");
    return;
  }
  return (
    <div className="relative py-11 px-10 z-50">
      <p className="text-[1.375rem] font-semibold">결제 정보를 확인해주세요.</p>
      <div className=" mt-8">
        {data && (
          <p className="text-end font-semibold text-color999">
            My Coin : {data ? data.response.coin : ""}
          </p>
        )}
        <Total type={type} />
      </div>
      <hr className="border-colorb9b border mt-5" />
      <Agreement />
      <PaymentBtn type={type} fundingId={fundingId} address={address} />
    </div>
  );
}
