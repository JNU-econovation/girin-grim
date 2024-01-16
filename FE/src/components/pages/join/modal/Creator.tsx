import { createPortal } from "react-dom";
import Modal from "./Modal";
type Props = {
  close: () => void;
  id: "school" | "image";
};

export default function Creator({ close, id }: Readonly<Props>) {
  return <>{createPortal(<Modal close={close} id={id} />, document.body)}</>;
}
