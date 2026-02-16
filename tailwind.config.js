/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        primary: '#0f2041',
        accent: '#f6cd46',
        secondary: '#767676',
        heading: '#222222',
      },
    },
  },
  plugins: [],
}
