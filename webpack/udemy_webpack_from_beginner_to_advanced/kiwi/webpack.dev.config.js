const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	entry: './src/kiwi.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/static/'
	},
	mode: 'development',
	devServer: {
		port: 9002,
		static: {
		  directory: path.resolve(__dirname, './dist')	
		},
		devMiddleware: {
			index: 'kiwi.html',
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
	filename: 'kiwi.html',
	template: 'src/page-template.hbs',
	title: 'Kiwi',
	minify: false
}),
new ModuleFederationPlugin({
	name: 'KiwiApp',
	remotes: {
		HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js'
	}
})
]
}