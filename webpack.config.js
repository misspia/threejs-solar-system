var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
  },
  module: {
	rules: [{
	  test: /\.js$/, // Run the loader on all .js files
	  exclude: /node_modules/, // ignore all files in the node_modules folder
	  use: 'jshint-loader'
	}]
  }
};