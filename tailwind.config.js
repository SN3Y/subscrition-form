/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(234, 29%, 20%)",
        "char-gray": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        'Roboto': ["Roboto", 'sans-serif']
      }
    },
    backgroundImage: {
      'desktop': "url('/assets/images/illustration-sign-up-desktop.svg')"
    }
  },
  
  plugins: [],
}

