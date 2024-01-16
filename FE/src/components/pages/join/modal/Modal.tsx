import TypeModal from "./TypeModal";

type Props = {
  close: () => void;
  id: "school" | "image";
};

export default function Modal({ close, id }: Readonly<Props>) {
  return (
    <section className="relative">
      <TypeModal close={close} id={id} />
    </section>
  );
}
