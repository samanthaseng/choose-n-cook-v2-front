/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'160': '40rem',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Roboto Slab', 'serif'],
		},
	},
	plugins: [],
	mode: 'jit',
};
