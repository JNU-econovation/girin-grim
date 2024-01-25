"use client";

import { Delete, Nick } from "@/components/common/icon";
import useUser from "@/hooks/useUser";
import { logout } from "@/utils/authenticate";
import Image from "next/image";
import Link from "next/link";

type Props = {
  close: () => void;
};

export default function UserModal({ close }: Readonly<Props>) {
  const { data } = useUser();
  if (!data) return <div>에러가 발생했습니다..</div>;
  const { email, image, memberId, nickname } = data.response;

  return (
    <>
      <section className="absolute bg-white top-14 right-0 z-20 font-nanum flex flex-col justify-center items-center py-8 px-10 rounded-xl border-2">
        <button onClick={close} className="absolute right-3 top-3">
          <Delete />
        </button>
        <span className="text-color656">{email}</span>
        <Link href={`/member/${memberId}`} className="mt-4">
          <Image
            src={image}
            alt=""
            width={80}
            height={80}
            className="rounded-full mx-20 my-2 bg-white  w-20 h-20"
          />
        </Link>

        <p className="text-center font-semibold">{nickname}</p>
        <button
          className="w-10/12 mx-auto py-2 rounded-lg mt-3 text-[#D94D4D] border-main border hover:bg-main transition-all"
          onClick={() => {
            logout();
            window.location.href = "/";
          }}
        >
          로그아웃
        </button>
      </section>
      <button
        className="fixed top-0 left-0 w-full h-full z-10 bg-slate-400"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      />
    </>
  );
}
