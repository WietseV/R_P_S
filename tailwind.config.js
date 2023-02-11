/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
      },
      rotate: {
        '30': '30deg',
        '150': '150deg',
        '60': '60deg',
        '210': '210deg',
        '270': '270deg',
        '300': '300deg',
        '330': '330deg'
      },
      backgroundImage: {
        'radial': 'radial-gradient(21% 37% at 72% 23%, #FFFFFF9C 24%, #073AFF00 100%)',
        'gold': 'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
        'silver': 'radial-gradient(ellipse farthest-corner at right bottom, #BEC0C2 0%, #B3B6B5 8%, #7D7D7A 30%, #70706F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #e5e6e7 8%, #BEC0C2 25%, #B3B6B5 62.5%, #A1A2A3 100%)',
        'split': 'radial-gradient(ellipse farthest-corner at right top, #FFF689 0%, #FFF689 70%, #CFFFB0 70%, #CFFFB0 100%)',
        'bggradient': 'radial-gradient(circle farthest-corner at center, #FFFFFF 0%, #fdba74 50%,  #FF8552 100%)',
        'spin': ' linear-gradient(#00000050 0%, #00000050 33%, #ffffff00 33%, #ffffff00 66%, #00000050 66%, #00000050 100%) '
      }
    },
  },
  plugins: [],
}
