/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/index.template.html',
    // Do not put spaces in glob lists, i.e., no {ts, tsx}
    './src/components/**/*.{ts,tsx}',
    './src/index.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
}
