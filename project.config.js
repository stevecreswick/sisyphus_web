const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  /** The environment to use when building the project */
  ENV: NODE_ENV,

  /** The full path to the project's root directory */
  BASE: __dirname,

  /** The name of the directory containing the application source code */
  SRC: 'src/app',

  /** The file name of the application's entry point */
  ENTRY: 'main',

  /** The name of the directory in which to emit compiled assets */
  DIST: 'public/assets',

  /** The base path for all projects assets (relative to the website root) */
  // publicPath: '/',

  /** Whether to generate sourcemaps */
  // sourcemaps: true,

  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {},

  /** A hash map of variables and their values to expose globally */
  globals: {},

  /** Whether to enable verbose logging */
  verbose: false,

  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-router',
  ]
}
