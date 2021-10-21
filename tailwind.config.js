module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1F1F1F',
        'secondary': '#FDF6F6',
        'MTred': '#E25A5A',
        'MTpurple': '#5338DC',
        'MTblue': '#1FAD98',
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
