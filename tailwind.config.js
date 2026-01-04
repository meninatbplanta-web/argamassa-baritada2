/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./ferramentas/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          orangeHover: '#EA580C',
          blue: '#1E3A8A',
          lightBlue: '#EFF6FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

