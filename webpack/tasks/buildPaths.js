const path = require('path');
const appRoot = process.cwd();

module.exports = function( options ) {
  var options = options || {};
  const defaultOptions = {
    'DIST': 'public/assets',
    'SRC': 'src/web/views',
    'JS': 'src/web/javascripts'
  }

  const dist = options.DIST || defaultOptions.DIST;
  const src = options.SRC || defaultOptions.SRC;
  const js = options.JS || defaultOptions.JS;

  return {
    'DIST': path.resolve( appRoot, dist ), // development.bundle
    'SRC': path.resolve( appRoot, src ), // source
    'JS': path.resolve( appRoot, js ) // entry
  }
}
