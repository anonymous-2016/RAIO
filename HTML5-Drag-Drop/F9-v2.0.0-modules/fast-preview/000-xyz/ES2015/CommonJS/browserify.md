# browserify (CMD)

> bundler

1. only CommonJS
2. js
3. node.js in browser


## SystemJS

https://github.com/systemjs/systemjs
https://github.com/systemjs/plugin-babel

```js

SystemJS.config({
    map: {
        'plugin-babel': 'path/to/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
});

```

https://www.sitepoint.com/modular-javascript-systemjs-jspm/

https://github.com/ModuleLoader/es-module-loader

https://www.codeschool.com/blog/2015/12/11/es2015-a-systemjs-odyssey/

https://stackoverflow.com/questions/tagged/systemjs
https://stackoverflow.com/questions/26858855/how-to-make-it-possible-to-use-typescript-with-systemjs-and-angular





```html

<script src="systemjs/dist/system.js"></script>
<script>
    // System.config({ ... }) 
    System.config({
        meta: {
            format: 'cjs'
            // module format
        }
    });
    // entry js
    SystemJS.import('/js/main.js');
</script>


```






## JSPM

https://jspm.io/
https://github.com/jspm/jspm-cli

https://jspm.io/docs/getting-started.html


```sh

$ npm i -g jspm

$ jspm init

$ jspm install npm:lodash-node
$ jspm install github:components/jquery
$ jspm install jquery
$ jspm install myname=npm:underscore

$ jspm bundle lib/main --inject


```

```js

System.import('lib/main.js');


// # Loading NodeJS core browserify libraries

System.import('buffer').then(function(buffer) {
    console.log(new buffer.Buffer('base64 encoded').toString('base64'));
});


// # Loading from npm

System.import('npm:lodash').then(function(_) {
    console.log(_.max([1, 2, 3, 4]));
});


// # Loading jQuery

System.import('jquery').then(function($) {
    $(window).scrollTop(0);
});

```






# webapck (CMD/AMD/UMD/ES6)

> bundler & loaders

1. CMD/AMD/UMD/ES6
2. code spilttng
3. js/css/images ...
4. loaders (pre-process files)


# webpack & babel-loader & babel-core & babel-preset-env

> es2015 => commonjs


> old webpack 1.x

```js

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

```

> new webpack 2.x/3.x


```js

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
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-transform-object-rest-spread')]
                    }
                }
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


```






## build-in module loader (node.js)

> commonjs

```js

// no dependency
var ABC = "";
function fucA() {
    // m
}

exports.fucA = fucA;
exports.ABC = ABC;


// dependency
const ma = require(`a.js`);
const mb = require(`b.js`);

function fucA() {
    // ma
}
function fucB() {
    // mnb
}

// exports.fucA = fucA;
// exports.fucB = fucB;
module.exports = {
    fucA: fucA,
    fucB: fucB
};

// module.exports === exports !!!

```

```js
// module format
System.config({
    meta: {
        format: 'cjs'
    }
});
// entry js
System.import('js/app.js');


/* 

# CJS !== CMD

> CommonJS

> CMD seajs(smg ???)


*/
```




















