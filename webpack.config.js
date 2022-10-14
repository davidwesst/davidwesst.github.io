const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: [ 
		path.resolve(__dirname, "src/assets/styles/index.css")
	],
	output: {
		path: path.resolve(__dirname, "dist/assets/"),
		publicPath: "/assets/"
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 
					MiniCssExtractPlugin.loader, 
					"css-loader" 
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
