const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { truncate } = require("fs");

module.exports = {
    mode: "development",
    entry: "./src/app/index.js",
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
            template: "src/app/index.html",
        }),
    ],
    resolve: {
        extensions: [".tsx",".jsx",".ts",".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { 
                    presets: [
                      ["@babel/preset-env", {targets: {node: "current"}}],
                      "@babel/preset-react",
                      "@babel/preset-typescript" 
                    ] 
                }
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}