/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      anton: "'Anton', serif",
      inter: "'Inter', serif",
      colors:{
        customOrange: '#f09e3a',
      }
    },
  },
  plugins: [],
}

