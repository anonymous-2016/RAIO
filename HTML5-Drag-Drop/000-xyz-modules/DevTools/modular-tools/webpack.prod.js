// production version 生产版本

/* 

https://doc.webpack-china.org/configuration/#-
https://doc.webpack-china.org/configuration/devtool
https://doc.webpack-china.org/guides/tree-shaking
http://blog.teamtreehouse.com/introduction-source-maps
https://doc.webpack-china.org/guides/development
https://doc.webpack-china.org/guides/production/
https://doc.webpack-china.org/plugins/uglifyjs-webpack-plugin
https://doc.webpack-china.org/guides/hot-module-replacement#-
https://doc.webpack-china.org/concepts/loaders
https://doc.webpack-china.org/concepts/modules
https://doc.webpack-china.org/api/plugins
https://doc.webpack-china.org/plugins



$ npm i -D uglifyjs-webpack-plugin

// 也可以在命令行接口中使用 --optimize-minimize 标记，来使用 UglifyJsPlugin


$ npm i -D webpack-dev-server

// webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

$ npm i -D express webpack-dev-middleware

$ npm i -D webpack-merge

// 在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。
// 在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。

// 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。

// 许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。
// 我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量
// 可以使用 --define process.env.NODE_ENV="'production'" 来使用 webpack 内置的 DefinePlugin, 
// webpack -p 将自动地调用上述这些标记，从而调用需要引入的插件。

*/

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


