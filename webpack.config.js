var path = require('path');
var ExtractCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: ExtractCssPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'img',
                        publicPath: 'img'
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    plugins: [
        new ExtractCssPlugin({
            filename: "style.css"
        })
    ],
    target: 'web'
}