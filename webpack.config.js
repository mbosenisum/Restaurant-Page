const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    index: './src/index.js',
    // menu: './src/menu.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'placeholder title',
      template: '/src/index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true,
  },
};