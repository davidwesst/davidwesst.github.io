const path = require("path");

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: [ 
		path.resolve(__dirname, "src/assets/styles/index.css")
	],
	output: {
		path: path.resolve(__dirname, "dist/assets/")
	},
	plugins: [
		
	],
	module: {
		rules: [
			{
				test:/\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}
