const common = require('./webpack.common');
const { merge } = require('webpack-merge');
// const cleanWebPackPlugin = require('clean-webpack-plugin');

const path = require('path');
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // plugins: [new cleanWebPackPlugin()],
});
