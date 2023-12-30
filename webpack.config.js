const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname,'src/optiplex_neofetch.png'), to: path.resolve(__dirname,'dist'), },
      ],
    }),
  ],
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true,
  },
};