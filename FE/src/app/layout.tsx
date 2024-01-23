import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/pages/layout/Header";
import { ReactQuery } from "@/context/ReackQuery";
import Recoil from "@/context/Recoil";

export const metadata: Metadata = {
  title: "너와 그린 기린 그림",
  description:
    "지역 기반 펀딩 플렛폼 너와 그린 기린 그림 입니다! 저희는 전남대학교 에코노베이션 동아리 소속 *23#팀입니다. 너와 그린 기린 그림은 23년도 2학기에 진행된 프로젝트입니다.",
  generator: "Next.js 14",
  applicationName: "너와 그린 기린 그림",
  keywords: [
    "너와 그린 기린 그림",
    "펀딩",
    "플렛폼",
    "전남대학교",
    "23#",
    "기린",
    "그림",
    "너가 그린 기린 그림",
    "니가",
    "내가",
    "전남",
    "전남대",
    "funding",
    "platform",
    "girin",
    "picture",
  ],
  authors: [
    {
      name: "전남대학교 23# 팀",
      url: "https://github.com/JNU-econovation/girin-grim",
    },
    { name: "geongyu09", url: "https://github.com/geongyu09" },
  ],
  openGraph: {
    title: "너와 그린 기린 그림",
    description:
      "지역 기반 펀딩 플렛폼 너와 그린 기린 그림 입니다! 저희는 전남대학교 에코노베이션 동아리 소속 *23#팀입니다. 너와 그린 기린 그림은 23년도 2학기에 진행된 프로젝트입니다.",
    url: "https://girin-grim.shop",
    siteName: "girin-grim",
    images: [
      {
        url: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/upload/Mascot+2.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://girin-grim.s3.ap-northeast-2.amazonaws.com/upload/Mascot+2.jpg",
        width: 1800,
        height: 1600,
        alt: "girin grim mascot",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQuery>
          <Recoil>
            <Header />
            {children}
          </Recoil>
        </ReactQuery>
      </body>
    </html>
  );
}
