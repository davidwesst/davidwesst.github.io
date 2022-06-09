const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'source-map',
    devServer: {
        static: "./dist"
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'davidwesst.com',
            template: "src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { 
                    presets: [
                      ["@babel/preset-env", {targets: {node: "current"}}],
                      "@babel/preset-react", 
                    ] 
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}