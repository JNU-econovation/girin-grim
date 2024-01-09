import StyledBtn from "../common/StyledBtn";
import { useRecoilValue } from "recoil";
import { SelectedOptions } from "@/store/FundingState";
import { postPayment } from "@/apis/apis";

export default function PaymentBtn() {
  const options = useRecoilValue(SelectedOptions);
  const onClick = () => {
    // postPayment();
  };
  return <StyledBtn text="결제하기" />;
}
