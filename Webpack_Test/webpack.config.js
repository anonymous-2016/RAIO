'use strict';


/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description F9-v2.0.0-modules\webpack-es6-to-es5.js
 *
 */

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',// 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
};
