/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bicub: ["Bucibic"],
    },
    extend: {
      boxShadow: {
        custom: "0px 0px 3px 0px #DFEBF1",
        camera: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
        bottomNav: "0px -4px 8px 0px rgba(0, 0, 0, 0.04)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      dropShadow: {
        custom: "drop-shadow(0px 0px 24px #000000)",
      },
    },
  },
  plugins: [],
};
