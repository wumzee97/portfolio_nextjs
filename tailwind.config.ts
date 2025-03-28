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
        'primary': '#D3E97A',
        'neutral-black': '#0A0A0A',
        'neutral-offwhite': '#C7C7C7'
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)'],
        manrope: ['var(--font-manrope)'],
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
export default config;

