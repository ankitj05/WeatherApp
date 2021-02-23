module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cloud': "url('./Images/clouds.jpg')",
        'snow': "url('./Images/snow.jpg')",
        'clear-sky': "url('./Images/clear.jpg')",
        'mist': "url('./Images/mist.jpg')",
        'rain': "url('./Images/rain.jpg')",
        'thunder': "url('./Images/thunderstorm.jpg')"
      })
    },
    fontFamily: {
      'montserrat': ['montserrat', 'sans']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
