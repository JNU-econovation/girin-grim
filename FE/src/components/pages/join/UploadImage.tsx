"use client";
import { FileIcon } from "@/components/common/icon";
import Creator from "./modal/Creator";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageUrlState, onFileModalState } from "@/store/JoinState";

export default function UploadImage() {
  const imgSrc = useRecoilValue(imageUrlState);
  const [modalOn, setModalOn] = useRecoilState(onFileModalState);

  return (
    <div
      className="w-52 h-52 bg-colord9d rounded-full mx-auto relative shadow-lg my-12 "
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        className="px-2 py-2 bg-white shadow-lg rounded-full absolute bottom-3 right-3 focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          setModalOn(true);
        }}
      >
        <FileIcon />
      </button>
      {modalOn && <Creator close={() => setModalOn(false)} id="image" />}
    </div>
  );
}
