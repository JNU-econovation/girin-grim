"use client";
import { File } from "@/components/common/icon";
import { useState } from "react";
import Creator from "./modal/Creator";

export default function UploadImage() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="w-52 h-52 bg-colord9d rounded-full mx-auto relative shadow-lg my-12">
      <button
        className="px-2 py-2 bg-white shadow-lg rounded-full absolute bottom-3 right-3"
        onClick={(e) => {
          e.preventDefault();
          setModalOn(true);
        }}
      >
        <File />
      </button>
      {modalOn && <Creator close={() => setModalOn(false)} />}
    </div>
  );
}
