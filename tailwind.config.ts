import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#000',
          background: '#fff',
        },
        dark: {
          text: '#fff',
          background: '#000',
        },
      },
    },
  },
  plugins: [],
};
export default config;
