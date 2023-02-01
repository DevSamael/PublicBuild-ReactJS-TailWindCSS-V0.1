/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      padding: {
        '1/3' : '33.33333%',
        '2/3' : '66.66667%',
      },
      backgroundImage: {
        'backimg' : "url('./Assets/BG.gif')",
        'homebg' : "url('./Assets/DevSambg.png')",
        'videobg' : "url('./Assets/Videobg.gif')",
        'Herogif' : "url('./Assets/Herogif.gif')"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
