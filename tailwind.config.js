/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'IBMPlexSerif': [
          'IBMPlexSerif_400Regular',
          'IBMPlexSerif_300Light',
          'IBMPlexSerif_500Medium',
          'IBMPlexSerif_600SemiBold',
          'IBMPlexSerif_700Bold',
          'IBMPlexSerif_200ExtraLight',
          'IBMPlexSerif_100Thin',
        ],
        'IBMPlexSerif_300Light': ['IBMPlexSerif_300Light'],
      },
    },
  },
  plugins: [],
};
