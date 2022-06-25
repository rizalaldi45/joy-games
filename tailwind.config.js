module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#5D5FEF',
        'soft-dark': '#171c30',
        'soft-slate': '#212121',
      },
      screens: {
        'xs': {'max':'640px'},
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [],
}