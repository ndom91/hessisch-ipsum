module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      blocklist: [/-tooltip-/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
