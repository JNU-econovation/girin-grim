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
        grey: "#b0b0b0",

        textGrey: "#525252",
        input_title: "#717184",
        input_bg: "#f2f2f2",
        bgGrey: "#f5f5f5",
      },
      fontFamily: {
        nanum: "[font-family:'NanumSquare_Neo-Regular',Helvetica]",
        noto: "[font-family:'NotoSansKR-Regular',Helvetica]",
      },
    },
  },
  plugins: [],
};
export default config;
