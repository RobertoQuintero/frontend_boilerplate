module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: { 
    'autoprefixer': {
      Browserlist: [
        '> 1%',
        'ie >= 8',
        'edge >= 15',
        'ie_mob >= 10',
        'ff >= 66',
        'chrome >= 45',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4',
        'bb >= 10'
      ]

    }, // {} = Plugin Default Options
  }
})