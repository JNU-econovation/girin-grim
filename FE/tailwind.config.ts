import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ff9a15",

        textGrey: "#525252",
        input_title: "#717184",
        input_bg: "#f2f2f2",
        bgGrey: "#f5f5f5",

        colorb0b: "#b0b0b0",
        color999: "#9999a7",
        color121: "#12151A",
        color656: "#656567",
        color9f9: "#9f9f9f",
        colorb9b: "#b9b9b9",
        colorede: "#ededed",
        colord9d: "#d9d9d9",
        colore7e: "#e7e7e7",
      },
      fontFamily: {
        nanum: "[font-family:'NanumSquare_Neo-Regular',Helvetica]",
        noto: "[font-family:'NotoSansKR-Regular',Helvetica]",
        notoKR: "[font-family:'Noto_Sans_KR-Bold',Helvetica]",
        esaman: "[font-family:'esamanru_OTF-Bold',Helvetica]",
      },
    },
  },
  plugins: [],
};
export default config;
