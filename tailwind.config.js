module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'MTred': 'var(--color-MTred)',
        'MTpurple': 'var(--color-MTpurple)',
        'MTblue': 'var(--color-MTblue)',
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
