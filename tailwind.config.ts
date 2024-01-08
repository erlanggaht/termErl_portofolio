import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#181818",
        primary: "#199B43",
        secondary: "#C78000",
        danger: "#8a2858",
        white: "#ECF0F1",
        darkness: "#333",
        folder: "#81A1C1",
        file: "#8BB6B6",
        hoverBg: "#282828",
      },
      fontFamily: {
        SC: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
