module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#001a4d',
        brand: '#001a4d',
        muted: '#6b7280',
        beige: '#e8d5c4',
        'navy-dark': '#001a4d',
        'navy-light': '#0a2463'
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
