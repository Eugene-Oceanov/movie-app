const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: "development",

    entry: {
        mainScript: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        assetModuleFilename: "[name][ext]",
    },

    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },

    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "./src/assets/fonts/"
                    }
                }
            },
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            title: "Movie App",
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html")
        })
    ]
}