module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': {'min': '0px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      height: {
        '66': '16.5rem',
        '68': '17rem',
        '88': '22rem',
        '1/2-screen': '50vh',
        '2/3-screen': '66.666667vh',
        '3/4-screen': '75vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
