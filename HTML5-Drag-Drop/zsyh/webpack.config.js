'use strict';

/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description F9-FV-Modules\webpack.config.js
 * @author xgqfrms
 *
 * @license MIT
 * @copyright xgqfrms 2016-forever || 2017-present
 *
 */

// import { export } from "module-name";

// import path from "path";
// import webpack from "webpack";
// import UglifyJSPlugin from "uglifyjs-webpack-plugin";
// import HtmlWebpackPlugin from "html-webpack-plugin";


const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BASE_URI = {
    APP: './Modules/',
    MODULES: './Modules',
    index: `./sidebar`,
    modal: `./modal`,
    libs: `./libs`
    // index: `./index.js`,
    // `` ??? '' ??? ""
};


if (process.env.NODE_ENV !== 'production') {
    console.log('😃, Looks like we are in development mode!');
}else{
    console.log('Tada, 🎉, we are in production mode!');
}

const STOCK_F9 = [
    "agency-research-statistics",
    "agency-rating",
    "changes-shareholding-executives",
    "company-announcements",
    "company-news",
    "equity-pledge",
    "financing-and-margin-balance-difference-trend",
    "holdings-participation-situation",
    "important-infos",
    "indicators-per-share",
    "institutional-shareholding-change-statistics",
    "investor-relations",
    "monthly-capital-flows-large-single-statistics",
    "profit-forecast",
    "recent-important-events-backup",
    "recent-important-events",
    "research-report",
    "stock-price-turnover",
    "top-ten-shareholders"
];

let entry_obj = {};

STOCK_F9.forEach(
    (item, i) => {
        entry_obj[item] = `${BASE_URI.MODULES}/${item}`;
    }
);
// sidebar
entry_obj[BASE_URI.index] = `${BASE_URI.index}`;
// BouncedModal
entry_obj[BASE_URI.modal] = `${BASE_URI.libs}/BouncedModal`;

// "app": "npm run rmrf & webpack -p",

// no return


module.exports = {
    entry: Object.assign({},entry_obj),
    // js map name & push to entry ???
    // node read files name & /**/*.js
    // entry: {
    //     // 输入文件 public/src && no import in app, need to add as an entry
    //     app: './src/index.js',
    //     // module1: BASE_URI.WEB + '/module1',
    //     // module2: BASE_URI.WEB + '/module2',
    //     nim: BASE_URI.WEB + '/no-import-module',
    //     // stock_f9: BASE_URI.WEB + '/es5-global-function',
    //     news: `${BASE_URI.ES5}/company-news`,
    //     // f9fv: `${BASE_URI.F9FV}/turnover-trend-make-market-diagram`,
    //     "turnover-trend-make-market-diagram": `${BASE_URI.F9FV}/turnover-trend-make-market-diagram`,
    // },
    output: {
        // 输出文件 dist/build
        // path: path.resolve(__dirname, "build/"),
        path: path.resolve(__dirname, "build/js/"),
        filename: '[name].min.js',// ??? hash version
        // filename: '[name].[hash:16].min.js',// hash version
        // [hash] 和 [chunkhash] 的长度可以使用 [hash:16]（默认为20）来指定。
        // filename: "[chunkhash].bundle.js",
        // publicPath: '/'
        // pathinfo: true,
        // sourceMapFilename:  [name], [id], [hash] 和 [chunkhash], // 默认使用 "[file].map"。
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
                            modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            // sourceMap: true,
                            // minimize: true || {/* CSSNano Options */},
                            // camelCase: true,
                            // importLoaders: 1,
                            // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            // alias: {
                            //     "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                            // },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     includePaths: [
                        //         path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                        //     ]
                        // }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ],
            //     // use: [
            //     //     'to-string-loader',
            //     //     'css-loader'
            //     // ],
            //     // use: [
            //     //     'handlebars-loader', // handlebars loader expects raw resource string
            //     //     'extract-loader',
            //     //     'css-loader'
            //     // ]
            // }
        ]
    },
    devtool: 'source-map',
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
