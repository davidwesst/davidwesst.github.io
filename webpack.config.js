const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: [ 
		path.resolve(__dirname, "src/assets/styles/index.css"),
		path.resolve(__dirname, "src/assets/scripts/index.ts")
	],
	output: {
		clean: true,
		path: path.resolve(__dirname, "dist/assets/"),
		publicPath: "/assets/"
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new DotEnvPlugin(),
		new CopyPlugin({
			patterns: [
				{ 
					from: path.resolve(__dirname, "staticwebapp.config.json"), 
					to: path.resolve(__dirname, "dist/staticwebapp.config.json") 
				}
			]
		})
	],
	resolve: { 
		extensions: [".tsx", ".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 
					{
						loader: MiniCssExtractPlugin.loader 
					},
					"css-loader" 
				]
			},
			{
				test: /\.tsx?$/i,
				use: [
					"ts-loader"
				],
				exclude: "/node_modules/"
			},
			{
				test: /\.js$/i,
				enforce: "pre",
				use: [
					"source-map-loader"
				]
			},
			{
				test: /.(png|jp?eg|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /.(tff|woff|woff2)$/i,
				type: "asset"
			}
		]
	}
}
