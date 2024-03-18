/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': '350px',
      'xs': '450px',
      's': '550px',
      'xxm': '650px',
      'xm': '750px',
      'm': '850px',
      'lg': '950px',
      'xl': '1050px',
      '2xl': '1250px',
      '3xl': '1550px'
    },
    extend: {
      fontFamily: {
        'mainHeading' : ['Madimi One', 'sans-serif'],
        'basicHeading' : ['Anta ', 'sans-serif'],
        'content': ['Open Sans', 'sans-serif'],
        'semiOne' : ['Protest Riot', 'sans-serif'],
        'semiTwo' : ['Inconsolata', 'sans-serif'],
      },
      backgroundImage: {
        //'mainBackground' : "url('src/images/main-box.png')",
      },
      animation: {
        blob: "blob 7s infinite",
      },
            keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar-hide'),
  ],
};
