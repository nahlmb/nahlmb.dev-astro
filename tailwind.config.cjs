module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['rubik', 'ui-sans-serif', 'system-ui', ],
			'serif': ['rubik', 'ui-serif', 'Georgia', ],
			'mono': ['ui-monospace', 'SFMono-Regular', ],
			'display': ['rubik', ],
			'body': ['rubik', ],
		},
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors : {
				primary: '#000000',
				background : '#FFFFFF',
				outline : '#F6F6F6'
			}
		},
	},
	plugins: [
		require('preline/plugin'),
		require('@tailwindcss/typography'),
	],
}