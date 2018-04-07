const path = require('path');
const webpack = require('webpack');
const loaders = require( './webpack.config.loaders' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

let assetPath;

process.env.NODE_ENV === 'production' ?
  assetPath = process.env.ASSET_PATH || '/assets' :
  assetPath = process.env.ASSET_PATH || '';

const appRoot = process.cwd();
var appSource = path.join( appRoot, 'src/web', 'application' );

module.exports = {
  devtool: 'source-map',

  entry: [
    appSource
  ],

  output: {
    path: path.join( appRoot, 'public'),
    filename: 'assets/bundle.js'
  },

  plugins: [
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),

    // new webpack.DefinePlugin({
    //   'process.env.ASSET_PATH': JSON.stringify(assetPath)
    // }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify( 'production' ),
        'TEST_VAR': 'Does this work...'
      }
    })
  ],

  module: {
    loaders: loaders
  }
}
