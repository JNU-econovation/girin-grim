"use client";

import { Delete } from "@/components/common/icon";
import useUser from "@/hooks/useUser";
import { logout } from "@/utils/authenticate";
import Image from "next/image";
import Link from "next/link";

export default function UserModal() {
  const { data } = useUser();
  if (!data) return <div>에러가 발생했습니다..</div>;
  const { email, image, memberId, name } = data.response;
  return (
    <section className="absolute bg-slate-400 top-10 right-0 z-20">
      <div className="flex justify-between">
        <div />
        <span>{email}</span>
        <Delete />
      </div>
      <Link href={`/member/${memberId}`}>
        <Image
          src={image}
          alt=""
          width={80}
          height={80}
          className="rounded-full mx-10 my-2 bg-white "
        />
      </Link>

      <p>{name}</p>

      <button
        className="px-4 py-2"
        onClick={() => {
          logout();
          window.location.href = "/";
        }}
      >
        로그아웃
      </button>
    </section>
  );
}
