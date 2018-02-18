const fs = require('fs-extra');
const path = require('path');
const appRoot = process.cwd();
const processLogger = require( './../utils/processLogger' );

const clean = async function cleanDirectory () {
  processLogger( 'Clean: Wiping Public Folder.', 'info' );

  try {
    await fs.emptyDir( appRoot + '/public')
    processLogger( 'Clean: Removed Public Folder.', 'success' );
  } catch (err) {
    processLogger( 'Clean: ERROR Failed to Clean Public Folder.', 'error' );
    console.error(err)
  }
}

module.exports = clean;
