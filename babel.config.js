const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: path.resolve(__dirname, 'assets'),
            src: path.resolve(__dirname, 'src'),
          },
        }
      ]
    ]
  }
}