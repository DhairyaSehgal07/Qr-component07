/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      colors: {
        'White': 'var(--White)',
        'Light_Gray': 'var(--Light_Gray)',
        'Grayish_Blue': 'var(--Grayish_Blue)',
        'Dark_Blue': 'var(--Dark_Blue', 
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}