/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        oasis: '#FFF1C3',
      },
      fontFamily: {
        sans: ["'ClashDisplay-Regular'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
