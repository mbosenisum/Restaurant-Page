const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

// https://webpack.js.org/concepts/entry-points/
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  entry: {
    // index: './src/index.js',
    // menu: './src/menu.js',
    menu: './src/menu.js',
    index: './src/index.js',
    // index: {
    //   dependOn: 'menu',
    //   import: './src/index.js',
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'placeholder title',
      template: '/src/index.html',
    }),
    // new CopyPlugin([
    //   { from: 'src', to: 'dist' },
    // ]),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/*.png', to: 'dist' },
    //     __dirname,
    //   ],
    // }),
  ],
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true,
  },
};