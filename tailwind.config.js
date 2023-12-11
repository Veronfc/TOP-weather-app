/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '475px',
			},
			fontFamily: {
				gsl: ['GeosansLight', 'sans-serif'],
				als: ['"Alumni Sans"', 'sans-serif'],
			},
			colors: {
				c1: '#DDDDDD', // 60%
				c2: '#3A4750', // 30%
				c3: '#30E3CA', // 10%
			},
		},
	},
	plugins: [],
}
