'use strict';


/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description F9-v2.0.0-modules\webpack-es6-to-es5.js
 *
 */

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const BASE_URI = {
    WEB: './src/modules/'
};

/* 

var path = require("path"),
    BASE_URI = {
        WEB: './public/javascript'
    };
    entry: {    //输入文件
        "login": BASE_URI.WEB + '/login',
        "list.good": BASE_URI.WEB + '/good/list',
        "history.good": BASE_URI.WEB + '/good/history',
        "list.order": BASE_URI.WEB + '/order/list',
        "print.order": BASE_URI.WEB + '/order/print',
        "delivery.user": BASE_URI.WEB + '/user/delivery',
        "history.user": BASE_URI.WEB + '/user/history',
        "home.user": BASE_URI.WEB + '/user/home'
    },

*/

module.exports = {
    entry: {
        // 输入文件 public/src && no import in app, need to add as an entry
        app: './src/index.js',
        // module1: BASE_URI.WEB + '/module1',
        // module2: BASE_URI.WEB + '/module2',
        nim: BASE_URI.WEB + '/no-import-module',
    },
    output: {
        // 输出文件 public/build
        path: path.resolve(__dirname, "build/public/"),//主目录
        filename: '[name].min.js',// ??? hash version
        // publicPath: '/'
    },
    resolve: {
        // 自动识别的扩展名
        extensions: ['.js']
    },
    module: {
        // 引用的 loader
        rules: [
            {
                test: /\.js$/,// test: /\.(js|jsx)$/,
                exclude: /node_modules/,// exclude: /(node_modules|bower_components)/,
                // use: 'babel-loader',
                loader: "babel-loader",
                // options: {
                //     // presets: ['@babel/preset-env'],
                //     // presets: ["es2015"],
                //     presets: ['preset-env']
                // }
                // .babelrc
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // presets: ['es2015'],
                //         // presets: ['preset-env'],
                //         presets: ['env'],
                //         // plugins: [require('babel-plugin-transform-object-rest-spread')]
                //     }
                // }
            },
            {
                test: /\.css$/,// test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    // devtool: 'source-map',
    // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true,// {Boolean|RegExp|Function<(node, comment) -> {Boolean|Object}>}
            // test: /\.js$/i,// test: /\.js($&#124;\?)/i
            // include: /\/includes/,
            // exclude: /\/excludes/,
            // parallel: true,
            // parallel: {
            //     cache: true,
            //     workers: 2, // for e.g
            // },
            // uglifyOptions: {
            //     ie8: true,// ie8: false,
            //     ecma: 5,//ecma: 8,
            //     parse: {...options},
            //     mangle: {
            //         ...options,
            //         properties: {
            //             // mangle property options
            //         }
            //     },
            //     output: {
            //         comments: false,
            //         beautify: false,
            //         ...options
            //     },
            //     compress: {...options},
            //     warnings: false
            // },
            // warningsFilter: (src) => true
        }),
        // new HtmlWebpackPlugin({
        //     title: 'using ES6 today with webpack3',
        //     template: './src/index.html'
        // }),
        // new CleanWebpackPlugin(['dist']),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['vendor.js']
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //         // ??? config('production')/config('development')
        //     }
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new WebpackDevServer(compiler, options)
    ]
};
