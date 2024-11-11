import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ["Bricolage Grotesque Variable", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}