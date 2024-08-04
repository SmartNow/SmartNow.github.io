/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo Narrow", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00afb9",
        secondary: "#436155",
        accent: "#e0a92b",
        background: "#260656",
        third: "#2d1830",
      }
    },
  },
};

