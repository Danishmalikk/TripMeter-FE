/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        transparent : 'transparent', 
        current : 'currentColor',
        background : '#fafafa',
        cardBg : '', 
        cardShadow : ''
      }
    },
  },
  plugins: [],
}