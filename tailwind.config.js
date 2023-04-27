/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body': "url('/src/images/sky2.jpg')",
      },
      borderWidth: {
        '20' : "20px"
      },
      colors: {
        "red-fire" : "#FFBE0B",
        "yellow-fire" : "#F42B03"
      },
      translate: {
        "negative10": "-10px"
      }
    },
  },
  plugins: [],
} 