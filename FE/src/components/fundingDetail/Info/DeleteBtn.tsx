import { Delete } from "../../common/icon";

export default function DeleteBtn({ onCLick }: { onCLick: () => void }) {
  return (
    <button onClick={onCLick}>
      <Delete />
    </button>
  );
}
