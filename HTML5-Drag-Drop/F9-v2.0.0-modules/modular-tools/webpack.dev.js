// development version 开发版本


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// import {  } from "module";
/* 
    node.js ??? support
    https://nodejs.org/en/download/
    Latest LTS Version: 8.9.0 (includes npm 5.5.1)
    https://nodejs.org/dist/v8.9.0/node-v8.9.0-x64.msi
*/

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
        title: 'Development'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};


