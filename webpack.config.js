const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'index.html');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src/js/index.js');


module.exports = {
  entry: ENTRY_PATH,
  output: {
	filename: 'bundle.js',
	path: OUTPUT_PATH
  },
  plugins: [
	new HtmlWebpackPlugin({
      title: 'Luminous',
      filename: TEMPLATE_PATH,
      inject: 'body'
    })
  ],
  module: {
  	rules: [{
	  test: /\.js$/, 
	  exclude: /node_modules/,
	  use: 'jshint-loader'
	}]
  }
};