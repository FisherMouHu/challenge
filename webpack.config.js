const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: { index: path.resolve(__dirname, "src/client", "index.js") },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon: 'public/favicon.png',
            template: path.resolve(__dirname, "public", "index.html")
        })
    ]
};