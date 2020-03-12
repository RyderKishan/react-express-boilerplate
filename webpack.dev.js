const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const PORT = 8118;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
    contentBase: 'dist',
    historyApiFallback: true,
    liveReload: true,
    port: PORT,
    // proxy: {
    //   '*': 'http://localhost:3000',
    // },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
