const merge = require('webpack-merge');
const path = require('path')
// This will automatically get the dev/prod config based on process.env.NODE_ENV.
const expoConfig = require('@expo/webpack-config');


// Expo expects a function so we can pass around options.
module.exports = function (env, argv) {
  return merge(expoConfig(env, argv), {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'assets'),
        src: path.resolve(__dirname, 'src'),
      },
    },
  });
};