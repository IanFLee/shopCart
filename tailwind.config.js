module.exports = {
  content: [                                
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
          fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
        switzer: ['Switzer', 'sans-serif'],
        stardom: ['Stardom', 'mono'],
        gambarino: ['Gambarino', 'mono']
      },
    },
  },
  plugins: [],
}
