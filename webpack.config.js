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
                test: /\.less$/,
                use: [{
                        loader: ExtractCssPlugin.loader
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(png|svg|gif)$/,
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