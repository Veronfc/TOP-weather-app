/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '440px'
			},
			fontFamily: {
				fin: ['Finlandica', 'sans-serif'],
				rts: ['Righteous', 'sans-serif']
			},
			colors: {
				active: '#00ADB5',
				primary: '#CCCCCC',
				secondary: '#222831'
			}
		}
	},
	plugins: []
}
