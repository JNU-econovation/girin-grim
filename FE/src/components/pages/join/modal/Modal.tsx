import Upload from "./Upload";

export default function Modal({ close }: Readonly<{ close: () => void }>) {
  return (
    <section className="relative">
      <button
        className="w-full h-full fixed bg-black opacity-30 top-0 left-0"
        onClick={close}
      />
      <Upload close={close} />
    </section>
  );
}
