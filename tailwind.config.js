/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-kalam)"],
      },
      backgroundImage: {
        background: "url('/background.jpg')",
        cover: "url('/home-cover.webp')",
        CoverImg: "url('/cover.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
