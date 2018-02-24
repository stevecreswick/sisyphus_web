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

// Environments
const __DEV__ = process.NODE_ENV === 'development';
const __TEST__ = process.NODE_ENV === 'test';
const __PROD__ = process.NODE_ENV === 'production';

const project = require('./project.config')

// Config
module.exports = {
  entry: path.join( project.BASE, project.SRC, project.ENTRY ),
  output: {
    path: path.join( project.BASE, project.DIST ),
    filename: 'app.bundle.js'
  },

  plugins: [
    extractSass,
    new HtmlWebpackPlugin( {
      template: path.join( project.SRC, 'views', 'index.html' ),
    } ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(Object.assign({
      'process.env': { NODE_ENV: JSON.stringify(project.ENV) },
      __DEV__,
      __TEST__,
      __PROD__,
    }, project.globals))
  ],

  module: {
    rules: loaders
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true
  },

  cache: false
};
