import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function Creator({ close }: Readonly<{ close: () => void }>) {
  return <>{createPortal(<Modal close={close} />, document.body)}</>;
}
