const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	entry: './src/image-caption.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:9001/'
	},
	mode: 'development',
	devServer: {
		port: 9003,
		static: {
		  directory: path.resolve(__dirname, './dist')	
		},
		devMiddleware: {
			index: 'image-caption.html',
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
	filename: 'image-caption.html',
	title: 'ImageCaption',
	template: 'src/index.hbs',
	minify: false
}),
new ModuleFederationPlugin({
	name: 'ImageCaptionApp',
	filename: 'remoteEntry.js',
	exposes: {
		'./ImageCaption': './src/components/image-caption/image-caption.js',
	}
})
]
}