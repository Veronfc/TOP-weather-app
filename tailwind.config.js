/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'gsl': ['GeosansLight', 'sans-serif'],
        'als': ['"Alumni Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

