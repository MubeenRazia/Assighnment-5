import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mywhite: "#FFFFFF",
        myblack:" #000000",
        mybrown: "#787054",
        button:" #A29875",

        background:  "#A29875",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
