import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sm_black_inset: 'inset 0 0 8px 5px rgba(0, 0, 0, 0.1)',
      sm_black: '0 0 10px 1px rgba(0, 0, 0, 0.1)',
      sm_gray: '2px 2px 8px 0 rgba(139, 139, 139, 0.6)',
      sm_yellow: '0 0 8px 2px rgba(250, 255, 6, 1)',
      md_yellow: '0 0 6px 5px rgba(250, 252, 6, 1)',
    },
    extend: {
      colors: {
        yellow: {
          200: "#FDFF84", 
          300: "#FBFF46",
          400: "#FAFE3B",
          500: "#FAFF00",
          600: "#D3D709",
          700: '#FCD404',
          800: '#D3D709',
        }

      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
