/*
loaders : loader will perform there task before final compilation is done.
ex ==> (css-loader(css), babel-loader(js...), svg-inline-loader(images)) bundling all the files.
plugins : Will be used after the compliation is done
ex ==> html-webpack-plugin - used to inject the bundled file into html.
*/
/*
To run this webpack config file we make use of  webpack-dev-server
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import path, { dirname } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  // define path where the bundled file will be saved
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
