/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/.*js"],
  theme: {
    extend: {
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},

        },
      },

      animation:{
        'open-menu':'open-menu 0.5 ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

