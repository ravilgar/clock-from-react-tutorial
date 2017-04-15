const path = require('path');

module.exports = {
	devtool:'inline-source-map',
	entry: {
		js: path.join(__dirname, 'client/client.js')
	},
	output:{
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: 'babel-loader'
			}
		]
	}
}