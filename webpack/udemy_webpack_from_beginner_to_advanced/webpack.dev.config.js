const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'hello-world': './src/hello-world.js',
		'kiwi': './src/kiwi.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		port: 9000,
		static: {
		  directory: path.resolve(__dirname, './dist')	
		},
		devMiddleware: {
			index: 'index.html',
			writeToDisk: true
		}
	},
	module: {
		rules: [
			{

			},
			{
				test: /\.(png|jpeg)$/,
				type: 'asset/resource'
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.(scss)$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
						loader: 'babel-loader',
						options: {
								presets: [ '@babel/env' ],
								plugins: [ '@babel/plugin-proposal-class-properties' ]
						}
				}
			},
			{
				test: /\.hbs$/,
				use: [
						'handlebars-loader'
				]
		}
		],
		

	},
	plugins: [
	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: [
				'**/*',
				path.join(process.cwd(), 'build/**/*')
		]
}),
new HtmlWebpackPlugin({
	filename: 'hello-world.html',
	chunks: ['hello-world'],
	title: 'Hello world',
	template: 'src/index.hbs',
	minify: false
}),
new HtmlWebpackPlugin({
	filename: 'kiwi.html',
	chunks: ['kiwi'],
	template: 'src/page-template.hbs',
	title: 'Kiwi',
	minify: false
})
]
}