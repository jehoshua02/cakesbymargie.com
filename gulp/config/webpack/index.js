var config = {
  output: {
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['' , '.js']
  },
  module: {
    loaders: []
  },
  externals: {}
};

require('./react')(config);
require('./scss')(config);

module.exports = config;
