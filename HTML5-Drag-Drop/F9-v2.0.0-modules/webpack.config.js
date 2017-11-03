var config = {
    entry: './src/js/main.js',
    output: {
        path: './builds/development/js/',
        filename: 'main.js'
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config;




/* 

    // https://doc.webpack-china.org/concepts
    const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
    const webpack = require('webpack'); //to access built-in plugins
    const path = require('path');

    const config = {
        entry: './path/to/my/entry/file.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.txt$/,
                    use: 'raw-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    };

    module.exports = config;

*/
