// alias
const alias = require('./common/alias.js');

// entry
const entry = require('./common/entry.js');

// dev
const dev = require('./dev/server.js');

// plugins
const plugins = require('./dev/plugins.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  devServer: dev,
  entry: entry,
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  performance: {
    hints: false,
  },
};
