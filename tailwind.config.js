/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        'bbva-navy': '#072146',
        'bbva-blue': '#004481',
        'bbva-medium-blue': '#1973B8',
        'bbva-aqua': '#2DCCCD',
        'bbva-light-blue': '#5BBEFF',
        'bbva-core-blue': '#004481',
        'bbva-white': '#FFFFFF',
        'bbva-gray': '#F4F4F4',
      },
      backgroundImage: {
        'bbva-gradient': 'linear-gradient(135deg, #072146 0%, #004481 100%)',
        'bbva-subtle': 'linear-gradient(to right, #F4F4F4, #FFFFFF)',
      }
    }
  },
  plugins: [],
}
