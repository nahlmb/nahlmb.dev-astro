module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			  },
		},
	},
	plugins: [
		require('preline/plugin')
	],
}
