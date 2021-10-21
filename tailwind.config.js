module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#FDF6F6',
        'secondary': '#1F1F1F',
        'mt-red': '#E25A5A',
        'mt-purple': '#5338DC',
        'mt-blue': '#1FAD98',
      },
      spacing: {
        '80vh': '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
