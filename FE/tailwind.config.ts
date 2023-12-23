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
        main1: "#FE910D",
        main2: "#FFC619",
        main3: "#DE9E66",

        black1: "#12151A",
        black2: "#656567",
        black3: "#9F9F9F",
        black4: "#B9B9B9",
        black5: "#EDEDED",
      },
    },
  },
  plugins: [],
};
export default config;
