const { Bebas_Neue, Comfortaa, Questrial } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      Bebas_Neue: ["Bebas Neue", "sans-serif"],
      Comfortaa: ["Comfortaa", "sans-serif"],
      Questrial: ["Questrial", "sans-serif"],
    }
  },
  plugins: [],
};
