/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      kana:['"kana"','sans-serif'],
      DotGothic:['"DotGothic",sans-serif'],
    },
    },
  plugins: [],
}

