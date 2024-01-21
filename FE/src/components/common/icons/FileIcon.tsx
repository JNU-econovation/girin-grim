import Image from "next/image";

export default function FileIcon({ colored }: Readonly<{ colored?: boolean }>) {
  return (
    <>
      {colored ? (
        <Image
          src={"/assets/ColoredFile.svg"}
          alt="file input"
          width={27}
          height={27}
        />
      ) : (
        <Image
          src={"/assets/File.svg"}
          alt="file input"
          width={27}
          height={27}
          className="text-main"
        />
      )}
    </>
  );
}
