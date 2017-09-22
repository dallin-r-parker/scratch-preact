const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3030
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}