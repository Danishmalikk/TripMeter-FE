/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'text-color' : "var(--text-color)",  
        'sm-text-color' : "var(--sm-text-color)",  
        'box-background' : "var(--box-background)", 
        'box-shadow' : "var(--box-shadow)",

      },
      
    },
  },
  plugins: [],
}