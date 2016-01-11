module.exports = {
	entry: './modules/main.js',
	output: {
		path: __dirname + '/dist',	
		filename: 'scripts.js',
		publicPath: './dist/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		]
	}
}