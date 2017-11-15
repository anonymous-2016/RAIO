# ES6 Modules


https://developer.mozilla.org/zh-CN/



```sh

$ browser-sync start --server --files "./*.*"

$ browser-sync start --server --files "./000-xyz/*.*"


/usr/local/apache2/webapps/information


/usr/local/apache2/webapps/information/reportinfo

/usr/local/apache2/webapps/information/bulletininfo



face, 😑 😩 🤖 🦊 😒 😧 😟 🐭 🐻 🤓 😪 🦁 🐹 😌 😢 😠 🤗 🐮 😞

https://emojipedia.org/search/?q=face




http://localhost:3000/000-xyz/modal/index.html


??? proxy ???

http://10.1.5.202/information/newsinfo/

http://10.1.5.202/queryservice/news/content/564082427896


{
    "Title": "温州宏丰:实控人增持过程中误操作 出现短线交易",
    "Id": 564082427896,
    "Content": "　　证券时报网11月15日讯 温州宏丰(300283)11月15日晚间公告,实际控制人、董事长陈晓近期集中竞价方式增持公司53.86万股,增持比例0.13%;在增持过程中因误操作,出现了短线交易,错误委托卖出公司股票 5万股。截至公告日,陈晓持股比例58.43%。\n",
    "PublishDate": "2017-11-15  17:34:52",
    "Infosource": "证券时报网",
    "Url": "http://kuaixun.stcn.com/2017/1115/13771960.shtml"
}


```





## import

> 此功能目前无法在任何浏览器中实现。(这个功能刚刚开始在本地浏览器中实现。)
它在许多转换器中实现，例如 Traceur Compiler ， Babel ， Rollup 或 Webpack。


```js

import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";

```

## export

> 此特性目前仅在 Safari 和 Chrome 原生实现。
它在许多转换器中实现，如 Traceur Compiler，Babel， Rollup 或 Webpack。


```js

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, function
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;


```


$ browser-sync start --server --files "./fast-preview/*.*"



# Babel CLI and a preset

https://babeljs.io/
https://babeljs.io/docs/setup

```sh

# all in one

$ npm i -D babel babel-cli babel-preset-env babel-polyfill babel-preset-react

$ npm i -D babel-cli babel-preset-env

$ npm install --save-dev babel-cli

$ npm install --save-dev babel-preset-env

$ npm install --save-dev babel-polyfill

$ npm install --save-dev babel-preset-react

# webpack

$ npm i -D babel-loader babel-core

$ npm install --save-dev babel-loader babel-core



# css/sass

$ npm i -D style-loader css-loader sass-loader

$ npm i -D uglifyjs-webpack-plugin html-webpack-plugin clean-webpack-plugin



```


```js

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


```

https://babeljs.io/users/
https://github.com/babel/website/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+%22New+User%3A%22
https://jakearchibald.github.io/svgomg/

### babel-standalone

https://babeljs.io/docs/setup#installation

```html

<div id="output"></div>
<!-- Load Babel -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<!-- Your custom script here -->
<script type="text/babel">
    const getMessage = () => "Hello World";
    document.getElementById('output').innerHTML = getMessage();
</script>

```

### Babel CLI

https://babeljs.io/docs/setup#installation

```json

{
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
        "build": "babel src -d lib"
    },
    "devDependencies": {
        "babel-cli": "^6.0.0"
    }
}

// 
```


### Webpack

https://webpack.js.org/concepts/
https://github.com/webpack/webpack
https://doc.webpack-china.org/


```sh

$ npm install --save-dev babel-loader babel-core

# webpack 3.x | babel-loader 8.x | babel 7.x
$ npm install babel-loader@8.0.0-beta.0 @babel/core@next @babel/preset-env@next webpack

# webpack 3.x babel-loader 7.x | babel 6.x
$ npm install babel-loader babel-core babel-preset-env webpack

# ES7 class-properties
$ npm install --save-dev babel-plugin-transform-class-properties

```

https://github.com/babel/babel-loader




```js

module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ]
}


module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
}


module: {
    rules: [
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
}

```



## bundler & loader


> 打包器 bundler，负责将有依赖关系的多个 module 打包成 一个或多个 bundle。

webpack/browserify

> 加载器 loader，负责将各种不同格式形式的 module，加载成浏览器能识别的 module 形式。
system.js/require.js

> module 格式形式， AMD, CMD (commonjs), UMD，ES6 module(ES2015/ES2016/ES2017 ...), 






## Next-generation ES6 module bundler
https://rollupjs.org/
https://rollupjs.org/repl
https://github.com/rollup/rollup


## Streaming build system
https://gulpjs.com/
https://github.com/gulpjs/gulp


## JavaScript Task Runner
https://gruntjs.com/
https://github.com/gruntjs/grunt

## A bundler for javascript and friends.

https://webpack.js.org/concepts/
https://github.com/webpack/webpack
https://doc.webpack-china.org/



## A JavaScript file and module loader

http://www.requirejs.org/
http://www.requirejs.org/docs/start.html

http://www.requirejs.org/docs/download.html#requirejs

```sh

$ npm i -g requirejs


```

http://www.requirejs.org/docs/jquery.html#modulename
https://github.com/requirejs/requirejs/wiki/Upgrading-to-RequireJS-2.0



## browser-side require() the node.js way

https://browserify.org/

https://github.com/browserify/browserify

```sh

$ npm i -g browserify

```




## AMD 

> Asynchronous Module Definition API 

https://github.com/amdjs/amdjs-api/wiki/AMD
https://github.com/amdjs/amdjs-api/wiki/AMD-(中文版)

https://github.com/amdjs/amdjs-api/wiki/require
https://github.com/amdjs/amdjs-api/wiki/require-(中文版)

## CommonJS

http://wiki.commonjs.org/wiki/CommonJS
http://wiki.commonjs.org/wiki/Modules/1.1.1
http://wiki.commonjs.org/wiki/Modules/Transport
http://wiki.commonjs.org/wiki/Modules/Async/A

https://github.com/commonjs/commonjs
http://commonjs.org/

http://www.requirejs.org/docs/commonjs.html
http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition



## UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.

https://github.com/umdjs/umd

https://www.gigmasters.com/mobile-dj/cmdjs


# AMD vs Common JS & UMD

https://www.linkedin.com/pulse/amd-vs-common-js-umd-damodaran-sathyakumar

http://blog.millermedeiros.com/amd-is-better-for-the-web-than-commonjs-modules/
http://tagneto.blogspot.com/2012/01/reply-to-tom-on-amd.html
http://unscriptable.com/2011/09/30/amd-versus-cjs-whats-the-best-format/


# What Is AMD, CommonJS, and UMD?

https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/


# JavaScript Modules: A Beginner’s Guide

https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

https://github.com/Medium
https://medium.com/@GitHub

https://medium.com/@xgqfrms


# decodeURIComponent

https://stackoverflow.com/questions/38638210/how-to-use-umd-in-browser-without-any-additional-dependencies


```js

// %2f38638210%2f

decodeURI(`%2f38638210%2f`);
// "%2f38638210%2f"
decodeURIComponent(`%2f38638210%2f`);
// "/38638210/"

```

## babel/plugin

https://babeljs.io/docs/plugins/transform-class-properties/

https://babeljs.io/docs/plugins/transform-object-rest-spread


```js

plugins: [require('@babel/plugin-transform-class-properties')]
plugins: [require('@babel/plugin-transform-object-rest-spread')]


plugins: [require('@babel/plugin-transform-class-properties'), require('@babel/plugin-transform-object-rest-spread')]

```


# module formats & module loaders


## server side js (node.js & Sync)

> CommonJS (systemjs) 


## browser side js (Async)

> AMD (requirejs)

```js
// no dependency
define([], function(){
    function funcA() {
        // 
    };
    return {
        funcA: funcA
    };
});

// dependency
// no need `.js`
define(['a', 'b', ...], function(a, b){
    // 
});

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




## TypeScript & Babel

> UMD

## ES6 Module

> JS build-in

## SystemJS-system.register

## CommonJS shortcut

> module.exports === exports












