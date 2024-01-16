import Select from "./Select";
import Upload from "./Upload";

export default function TypeModal({
  close,
  id,
}: Readonly<{ close: () => void; id: "image" | "school" }>) {
  return (
    <>
      <button
        className="w-full h-full fixed bg-black opacity-30 top-0 left-0"
        onClick={close}
      />
      {
        {
          school: <Select close={close} />,
          image: <Upload close={close} />,
        }[id]
      }
    </>
  );
}
