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
        'button-text' : "var(--button-text-color)", 
        'box-background' : "var(--box-background)", 
        'input-border' : "var(--input-border)", 
        'box-shadow' : "var(--box-shadow)",
        'backgorund-color' : "var(--background)", 

      },
      
    },
  },
  plugins: [],
}