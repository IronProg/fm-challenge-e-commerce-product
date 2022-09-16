/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cOrange: "hsl(26, 100%, 55%)",
      cSemiPaleOrange: "rgba(255, 125, 26, 0.8)",
      cPaleOrange: "hsl(25, 100%, 94%)",
      cVeryDarkBlue: "hsl(220, 13%, 13%)",
      cDarkGrayishBlue: "hsl(219, 9%, 45%)",
      cGrayishBlue: "hsl(220, 14%, 75%)",
      cLightGrayishBlue: "hsl(223, 64%, 98%)",
      cWhite: "hsl(0, 0%, 100%)",
      cBlack: "hsl(0, 0%, 0%)",
      cBlackWithOpacity: "rgba(0, 0, 0 0.75)",
    },
    fontWeight: {
      c400: "400",
      c700: "700",
      c900: "900",
    },
    extend: {},
  },
  plugins: [],
};
