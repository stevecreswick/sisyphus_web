const path = require('path');
const webpack = require('webpack');

// Loaders
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const hephaestus = require( './webpack/hephaestus' );
const loaders = hephaestus.loaders();

// Paths
const paths = hephaestus.paths();

// Config
module.exports = {
  entry: path.join( paths.JS, 'application.js' ),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  plugins: [
    extractSass,
    new HtmlWebpackPlugin( {
      template: path.join( paths.SRC, 'index.html' ),
    } ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: loaders
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  devServer: {
    hot: true
  },

  cache: false
};
