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
				rotateIcon: 'rotateIcon 15s infinite',
				marqueeLeft: 'marqueeLeft 20s linear infinite',
				marqueeRight: 'marqueeRight 20s linear infinite',
				animationPaused: 'paused', //stops on hover
				scrollerDown: 'scrollerDown 12s linear infinite',
				scrollerUp: 'scrollerUp 12s linear infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				rotateIcon: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				marqueeLeft: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marqueeRight: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(-0%)' },
				},
				scrollerDown: {
					'0%': {
						transform: 'translateY(-10em)'
					},
					'100%': {
						transform: 'translateY(14em)'
					},
				},
				scrollerUp: {
					'0%': {
						transform: 'translateY(10em)'
					},
					'100%': {
						transform: 'translateY(-14em)'
					},
				},
				'spin-reverse': {
					to: {
						transform: 'rotate(-360deg)',
					},
				},
			},
		},
	},
	plugins: [],
}