"use client";
import { CheckIsLoggedIn } from "@/utils/localData";
import { useRouter } from "next/navigation";

type Props = {
  forLoggedIn: boolean;
};

export default function useProtetor({ forLoggedIn }: Props) {
  const isLogin = CheckIsLoggedIn();
  const router = useRouter();

  if (forLoggedIn && !isLogin) {
    router.push("/login");
  } else if (!forLoggedIn && isLogin) {
    router.push("/");
  }
  return;
}
