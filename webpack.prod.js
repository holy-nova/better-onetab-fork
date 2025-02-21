/* eslint-disable */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        options: {
          plugins: ["syntax-dynamic-import"],
          presets: [
            "minify",
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        }
      },
    ]
  }
})
