/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"light-cyan": 'hsl(193, 38%, 86%)',
			"neon-green": 'hsl(150, 100%, 66%)',
			"grayish-blue": '#313A49',
			"grayish-blue-100": '#202632'
		}
	},
	plugins: [],
}
