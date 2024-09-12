/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#131319",
        blue: "#4A96FF",
        white: "#FFFFFF",
        gray: {
          100: "#C5C7CA",
          500: "#7F8084",
          600: "#6B6C70",
          900: "#35373B",
        },
      },
    },
  },
  plugins: [],
};
