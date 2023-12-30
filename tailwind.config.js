/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      colors: {
        "green": "#39DB4A",
        "green-nav": "#36CC45",
        "ash":"#4A4A4A"
      },
      boxShadow: {
        '3xl': '-2px 10px 50px 0px rgba(57, 219, 74, 0.50)',
        '4xl': '2px 4px 30px 0px rgba(0, 0, 0, 0.10)'
      },
      screens: {
        xs: "480px",
        sm: "768px",
        mm: "500px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}