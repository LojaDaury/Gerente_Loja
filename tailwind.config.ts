import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sm_gray: '2px 2px 8px 0 rgba(139, 139, 139, 0.6)',
      sm_yellow: '0 0 8px 2px rgba(250, 255, 6, 1)'
    },
    extend: {
      colors: {
        yellow: {
          200: "#FBFD8C",
          400: "#EDF123",
          500: "#FAFF06",

        }

      }
    },
  },
  plugins: [],
};
export default config;
