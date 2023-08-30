// path
const path = require('path');

// static path
const distPath = path.resolve(__dirname, '../../static');

/**
 * dev server
 */
module.exports = {
  port: 9001,
  static: distPath,
};
