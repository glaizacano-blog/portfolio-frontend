const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      linkedin: '#0077b5',
      github: '#191717',
      gitlab: '#fc6d27',
      twitter: '#1dA1f2',
      dev: '#000000',
      instagram: '#e4405f',
    },
    screens: {
      'xxs': {'min': '0px', 'max': '383px'},
      'xs': {'min': '384px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '4.75xl': '2.75rem',
        '5.25xl': '3.25rem',
        '5.5xl': '3.5rem'
      },
      height: {
        '66': '16.5rem',
        '68': '17rem',
        '84': '21rem',
        '88': '22rem',
        '100': '26rem',
        '104': '28rem',
        '106': '30rem',
        '108': '32rem',
        '112': '36rem',
        '114': '38rem',
        '116': '40rem',
        '120': '44rem',
        '1/4-screen': '25vh',
        '1/3-screen': '33.333333vh',
        '1/2-screen': '50vh',
        '2/3-screen': '66.666667vh',
        '3/4-screen': '75vh',
        'nav': '5rem'
      },
      maxHeight: {
        '100': '26rem',
        '114': '38rem',
      },
      minHeight: {
        '96': '24rem',
        '98': '25rem',
        '114': '38rem',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '5/6': '83.333333%;'
      },
      minWidth: {
        '1/4': '25%',
        '2/5': '40%',
      }
    },
  },
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      padding: ['hover', 'focus']
    },
  },
  plugins: [],
}
