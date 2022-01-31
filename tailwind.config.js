module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				guideRed: '#ee1822',
				guideOrange: '#fa7921',
				guideOrangeLight: '#fe9920',
				guideGreen: '#029e5e',
				guideYellow: '#fbbf01'
			},
			backgroundImage: {}
		}
	},
	plugins: []
}
