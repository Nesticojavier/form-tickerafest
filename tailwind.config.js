/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fucsia: "#fe1577",
        myblue: "#16a4e1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
