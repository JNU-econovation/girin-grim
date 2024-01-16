import ImageModal from "./ImageModal";

type Props = {
  close: () => void;
  id: "school" | "image";
};

export default function Modal({ close, id }: Readonly<Props>) {
  return (
    <section className="relative">
      <ImageModal close={close} id={id} />
    </section>
  );
}
