const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'hello-world': './src/hello-world.js',
		'kiwi': './src/kiwi.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'production',
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
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
		new TerserPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
	}),
	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: [
				'**/*',
				path.join(process.cwd(), 'build/**/*')
		]
}),
// new HtmlWebpackPlugin({
// 	title: 'Hello world',
// 	template: 'src/index.hbs',
// 	description: 'Some description'
// })
	new HtmlWebpackPlugin({
		filename: 'hello-world.html',
		drunks: ['hello-world'],
		title: 'Hello world',
		minify: false
	}),
	new HtmlWebpackPlugin({
		filename: 'kiwi.html',
		drunks: ['kiwi'],
		title: 'Kiwi',
		minify: false
	})
]
}