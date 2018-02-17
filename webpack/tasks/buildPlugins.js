const path = require('path');
const paths = require( './buildPaths' )();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const webpack = require('webpack');

module.exports = function( environment ) {
  switch ( environment ) {
    case 'production':
      return [
        extractSass,
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false
          }
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production'),
            'API_HOST': 'https://testingthis'
          }
        })
      ];

      break;
    default:
      return [
        extractSass,

        new HtmlWebpackPlugin({
          template: path.join( paths.SRC, 'index.html' ),
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin( {
          'process.env': {
            'NODE_ENV': JSON.stringify( 'development' ),
            'API_HOST': 'http://localhost:5000'
          }
        } )
      ];
  }
};
