const path = require("path");
const devServer = require("webpack-dev-server");
module.exports = {
    mode: "development",
    entry: {
        filename: path.resolve(__dirname, "src/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    devServer: {
        port: 8000,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, "dist"),
        }
    }
}