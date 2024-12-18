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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "#606C38",
        darkGreen: "#283618",
        white: "#FEFAE0",
        lightOrange: "#DDA15E",
        darkOrange: "#BC6C25",
      },
      backgroundImage: {
        render1: "url('/render1.jpg')",
        render1_mobile: "url('/render1_mobile.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
