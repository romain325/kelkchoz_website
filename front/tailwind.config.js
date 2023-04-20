/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      third: 'var(--color-third)',
      fourth: '#EBC7E8',
      dark: '#222222',
      light: '#f8f8f8',
      grey: 'rgba(235, 235, 235, 0.64)',
    }
  },
  plugins: [require('daisyui')],
}
