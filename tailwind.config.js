/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#D86451',
        secondary: '#061319'
      },
      fontFamily:{
        sans:['Open Sans']
      }
    },
  },
  plugins: [],
}

