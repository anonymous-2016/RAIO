'use strict';


/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description F9-v2.0.0-modules\webpack-es6-to-es5.js
 *
 */


var path = require("path")
    , BASE_URI = {
        WEB: './public/javascript'
    }
    ;
module.exports = {
    entry: {    //输入文件
        "login": BASE_URI.WEB + '/login'
        , "list.good": BASE_URI.WEB + '/good/list'
        , "history.good": BASE_URI.WEB + '/good/history'
        , "list.order": BASE_URI.WEB + '/order/list'
        , "print.order": BASE_URI.WEB + '/order/print'
        , "delivery.user": BASE_URI.WEB + '/user/delivery'
        , "history.user": BASE_URI.WEB + '/user/history'
        , "home.user": BASE_URI.WEB + '/user/home'
    },
    output: {//输出文件
        path: path.resolve(__dirname, "public/src"),//主目录
        filename: '[name].min.js'
    },
    resolve: {//自动识别的扩展名
        extensions: ['.js']
    },
    module: {//引用的组件
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
};