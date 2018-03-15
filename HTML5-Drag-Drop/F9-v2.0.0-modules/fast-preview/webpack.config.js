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
 * @todo tree shaking & ES6 import modules(css/js/images)
 *
 */

// import { export } from "module-name";
// 1º / -4º

// import path from "path";
// import webpack from "webpack";
// import UglifyJSPlugin from "uglifyjs-webpack-plugin";
// import HtmlWebpackPlugin from "html-webpack-plugin";


const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// Extract separate css file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    // path: path.resolve(__dirname, "build/css/"),
    // publicPath
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const BASE_URI = {
    APP: './Modules/',
    MODULES: './Modules',
    first: `./first`,// first.js
    index: `./sidebar`,
    // index: `./index.js`,
    modal: `./modal`,
    libs: `./libs`,
    init: `./init`,
    CSS: `./Modules`,
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
    "top-ten-shareholders",
    // "sidebar"
];

let entry_obj = {};

STOCK_F9.forEach(
    (item, i) => {
        entry_obj[item] = `${BASE_URI.MODULES}/${item}`;
    }
);
// sidebar
entry_obj[BASE_URI.index] = `${BASE_URI.index}`;
// first css
entry_obj[BASE_URI.first] = `${BASE_URI.first}`;
// init
entry_obj[BASE_URI.init] = `${BASE_URI.init}`;

// BouncedModal
// entry_obj[BASE_URI.modal] = `${BASE_URI.libs}/BouncedModal`;
// entry_obj[BASE_URI.modal] = `${BASE_URI.libs}/modal`;

// CSS loader & css modules
// auto figure out extensions name
const STOCK_F9_CSS = [
    "demo",
    "demo-sass",
];

// .css !== .js

STOCK_F9_CSS.forEach(
    (item, i) => {
        entry_obj[item] = `${BASE_URI.CSS}/${item}`;
    }
);
// entry_obj[`demo`] = `${BASE_URI.CSS}/demo`;
// entry_obj[`demo-sass`] = `${BASE_URI.CSS}/demo-sass`;

// vendors: ['jquery', 'moment'] ???
// entry_obj["vendors"] = ['jquery', 'moment'];

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
    //      // vendors: ['jquery', 'moment']
    // },
    output: {
        // 输出文件 dist/build
        // path: path.resolve(__dirname, "build/"),
        path: path.resolve(__dirname, "build/js/"),
        // (Absolute path).
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
        extensions: ['.js', '.css', '.scss'],
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
                test: /\.(css|scss|sass)$/,
                use: extractSass.extract({
                    // path: path.resolve(__dirname, "build/css/"),
                    // publicPath (Relative to server root)
                    publicPath: `/build/css/`,// Override the publicPath setting for this loader
                    // publicPath: `${__dirname}/build/css/`,
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                sourceMap: true,
                                minimize: true || {/* CSSNano Options */},
                                // camelCase: true,
                                // importLoaders: 1,
                                // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                                // alias: {
                                //     "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                                // },
                                // url: false,
                                // minimize: true,
                                // sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                // includePaths: [
                                //     path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                                // ],
                            },
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',// base64
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
        extractSass,// object
        new UglifyJSPlugin({
            // minimize: true, // no exist any longer!
            sourceMap: true,
            extractComments: true,// {Boolean|RegExp|Function<(node, comment) -> {Boolean|Object}>}
            // uglifyOptions: {
            //     ie8: false,
            //     ecma: 8,
            // },
            // test: /\.js$/i,// test: /\.js($&#124;\?)/i
            // include: /\/includes/,
            // exclude: /\/excludes/,
            // parallel: true,
            // parallel: {
            //     cache: true,
            //     workers: 3, // for e.g
            // },
            // uglifyOptions: {
            //     ie8: true,// ie8: false,
            //     ecma: 5,// ecma: 8,
            //     parse: {...options},
            // mangle: false,
            // mangle: {
            //     // reserved: ['BouncedModal', ],// 标识符
            //     // keep_fnames: true,
            //     // ...options,
            //     properties: {
            //         // mangle property options
            //         reserved: ["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]
            //     },
            // },
            //     output: {
            //         comments: false,
            //         beautify: false,
            //         ...options
            //     },
            //     compress: {...options},
            //     warnings: false,
            //     except: ['$super', '$', 'exports', 'require'],//排除关键字 ???
            // },
            // warningsFilter: (src) => true
        }),
        // new HtmlWebpackPlugin({
        //     title: 'using ES6 today with webpack3',
        //     template: './src/index.html'
        // }),
        // new CleanWebpackPlugin(['dist']),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //         // ??? config('production')/config('development')
        //     }
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new WebpackDevServer(compiler, options),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['vendor.js']
        // }),
        // 把入口文件里面的数组打包成verdors.js
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, `dist`),
        host: `http://10.1.5.202`,
        compress: true,
        port: 8080
    },
};
