const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	entry: './src/kiwi.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:9002/'
	},
	// mode: 'production',
	mode: 'development',
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 3000
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
		filename: 'kiwi.html',
		template: 'src/page-template.hbs',
		title: 'Kiwi',
		minify: false
	}),
	new ModuleFederationPlugin({
		name: 'KiwiApp',
		filename: 'remoteEntry.js',
		exposes: {
			'./KiwiPage': './src/components/kiwi-page/kiwi-page.js'
		}
	})
]
}