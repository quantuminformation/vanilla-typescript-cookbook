var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../build')
};

module.exports = {

  entry: {
    app: PATHS.src + '/app.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },


  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.src
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts','.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack boilerplate',
      hash: true,
      filename: 'index.html',
      template: PATHS.src + '/index.html',
    })
  ]
};
