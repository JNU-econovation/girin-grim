import { Delete, File } from "@/components/common/icon";

export default function Upload() {
  const type = ["png", "jpg", "jpeg", "gif"];
  return (
    <section className="w-[28rem] h-72 bg-white fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 rounded-lg">
      <div className="flex justify-between ">
        <h1 className="text-lg font-bold">Upload Image</h1>
        <Delete />
      </div>
      <label
        htmlFor="file-upload"
        className="relative cursor-pointer font-semibold grow bg-colorede flex justify-center items-center flex-col rounded-lg mt-3"
      >
        <File colored />
        <span className="mt-2">Upload a file</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
      </label>
      <ul className="flex gap-2 mt-4">
        {type.map((item) => (
          <li key={item} className="px-4 py-1 bg-colorede rounded-lg">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
