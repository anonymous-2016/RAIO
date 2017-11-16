const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: './path/to/my/entry/file.js',
    // entry: './src/index.js',
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },
    entry: {
        app: './src/index.js',// hot
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',// ??? hash version
        // filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.txt$/, 
                use: 'raw-loader'// loaders
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, // .scss || .sass || .css
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-map',// 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    devServer: {
        inline: true,
        port: 7777,
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments,// {Boolean|RegExp|Function<(node, comment) -> {Boolean|Object}>}
            test: /\.js($&#124;\?)/i,
            include: /\/includes/,
            exclude: /\/excludes/,
            // parallel: true,
            parallel: {
                cache: true,
                workers: 2 // for e.g
            },
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                parse: {...options},
                mangle: {
                    ...options,
                    properties: {
                        // mangle property options
                    }
                },
                output: {
                    comments: false,
                    beautify: false,
                    ...options
                },
                compress: {...options},
                warnings: false
            },
            warningsFilter: (src) => true
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
                // ??? config('production')/config('development')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new WebpackDevServer(compiler, options)
    ]
};