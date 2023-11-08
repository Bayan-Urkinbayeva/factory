/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

