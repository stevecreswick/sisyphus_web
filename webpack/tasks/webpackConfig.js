const path = require('path');
const paths = require( './buildPaths' )();
const buildPlugins = require( './buildPlugins' )();
const jsPath = path.join( 'public', 'assets' )

module.exports = function() {
  return {
    entry: path.join( paths.JS, 'application.js' ), // this can use Hephaestus
    output: {  // this can use Hephaestus
      path: paths.DIST,
      filename: 'app.bundle.js'
    },

    plugins: buildPlugins(),

    module: {
      rules: loaders
    },

    resolve: {  // this can use Hephaestus
      extensions: [ '.js', '.jsx' ],
    },

    devServer: {
      hot: true
    }
  };
}
