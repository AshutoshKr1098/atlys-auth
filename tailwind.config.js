/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          700: "#26292D",
          900: "#131319",
        },
        blue: "#4A96FF",
        white: "#FFFFFF",
        gray: {
          100: "#C6C7CA",
          200: "#636468",
          500: "#7F8084",
          600: "#6B6C70",
          900: "#35373B",
        },
      },
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        "wide-3": "3%", // Custom letter-spacing of 3%
      },
    },
  },
  plugins: [],
};
