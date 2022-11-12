/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'blackgrey': '#22223B',
      },
    },
    fontFamily: {
      'oswald': [ 'Oswald', 'sans-serif']
    },
  },
  plugins: [],
}
