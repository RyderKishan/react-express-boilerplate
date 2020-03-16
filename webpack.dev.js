const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const PORT = 3000;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'debug',
    compress: true,
    open: false,
    writeToDisk: true,
    contentBase: 'build',
    historyApiFallback: true,
    liveReload: false,
    port: PORT,
    // proxy: {
    //   '*': 'http://localhost:7400',
    // },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
