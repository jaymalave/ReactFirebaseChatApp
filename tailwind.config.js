const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      backgroundColor: '#1F2937',
      titleColor: '#F87171',
      signInColor: '#2563EB',
      signOutColor: '#EF4444',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
