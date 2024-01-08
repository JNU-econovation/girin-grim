import Image from "next/image";

export default function Description() {
  return (
    <section className="max-w-xl mx-auto">
      <Image
        src={
          "https://girin-grim.s3.ap-northeast-2.amazonaws.com/DetailImage.jpg"
        }
        alt="DetailImage"
        width={1280}
        height={720}
      ></Image>
    </section>
  );
}
