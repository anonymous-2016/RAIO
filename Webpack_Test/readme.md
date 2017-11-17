# ES6 Modules


https://developer.mozilla.org/zh-CN/


```sh
$ npm i -D url-loader file-loader


$ npm i -D style-loader css-loader sass-loader

```

https://doc.webpack-china.org/loaders/url-loader/
https://github.com/webpack-contrib/file-loader



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://stackoverflow.com/questions/32612877/how-to-assign-the-returned-value-of-a-promise-to-a-variable


https://developers.google.com/web/fundamentals/primers/promises

https://stackoverflow.com/questions/42691436/typescript-how-to-structure-a-fetch-api-call-inside-a-method-that-returns-a-pro

```js

var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.FetchNewsSummary = STOCK_F9_FV.Utils.FetchNewsSummary || (
    (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = false) => {
        if (debug) {
            console.log(`News Summary url = \n`, url);
        }
        const datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
                    Object.assign(datas, json);
                    console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
                    // return datas;
                }
            }
        )
        .catch(err => console.log(`News Summary Error Infos: \n`, err));
        // setTimeout(() => {
        //     console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
        //     // return datas;
        // }, 0);
        return datas;
        // return only work out Promise!
    }
);




FetchNewsSummary = (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = true) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    const datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
                Object.assign(datas, json);
                console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
                // return datas;
            }
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
    // setTimeout(() => {
    //     console.log(`setTimeout & datas = \n`, JSON.stringify(datas, null, 4));
    //     // setTimeout & datas = {} ???
    //     // return datas;
    // }, 3000);
    return datas;
    // return only work out Promise!
};

FetchNewsSummary();

x = FetchNewsSummary();
// return only work out Promise!

```




```md

.babelrc

{
    "presets": ["es2015"],
    "plugins":["transform-object-rest-spread"]
}


"presets": ["es2015"]

query: {
    presets: ['es2015'],
}

options: {
    modules: true
}

```


https://weblogs.asp.net/dwahlin/getting-started-with-es6-%E2%80%93-transpiling-es6-to-es5
https://github.com/danwahlin/es6samples


https://webpack.js.org/concepts/loaders/

https://webpack.js.org/loaders/babel-loader/#src/components/Sidebar/Sidebar.jsx


https://webpack.js.org/loaders/

https://babeljs.io/docs/usage/api/#options
https://babeljs.io/docs/plugins/#presets


> Each yearly preset only compiles what was ratified in that year. 

`babel-preset-env` replaces `es2015, es2016, es2017, latest`


https://babeljs.io/docs/plugins/preset-es2015/

https://babeljs.io/docs/plugins/transform-es2015-arrow-functions/

.babelrc

```json

{
    "plugins": ["transform-es2015-arrow-functions"]
}


{
    "plugins": [
        ["transform-es2015-arrow-functions", { "spec": true }]
    ]
}

// https://babeljs.io/docs/plugins/preset-es2015/
{
    "presets": ["es2015"]
}
// "amd" | "umd" | "systemjs" | "commonjs" | false, defaults to "commonjs".
// boolean, defaults to false.
// boolean, defaults to false.

{
    "plugins": [
        ["transform-es2015-arrow-functions", { "spec": true }]
    ]
}

```

$ npm i -D babel-cli babel-preset-es2015

https://babeljs.io/docs/usage/cli/

https://babeljs.io/docs/usage/api/#options


https://webpack.js.org/configuration/module/#rule-options-rule-query

```js

parser: {
    amd: false, // disable AMD
    commonjs: false, // disable CommonJS
    system: false, // disable SystemJS
    harmony: false, // disable ES2015 Harmony import/export
    requireInclude: false, // disable require.include
    requireEnsure: false, // disable require.ensure
    requireContext: false, // disable require.context
    browserify: false, // disable special handling of Browserify bundles
    requireJs: false, // disable requirejs.*
    node: false, // disable __dirname, __filename, module, require.extensions, require.main, etc.
    node: {...} // reconfigure node layer on module level
}
```

https://moduscreate.com/blog/optimizing-react-es6-webpack-production-build/

{
    "presets": ["es2015", "react"]
}


```js
// query: {
//     presets: ['es2015'],
// }
// "presets": ["es2015"]
// .babelrc


# webpack 3.x | babel-loader 8.x | babel 7.x
$ npm i -D babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack

# webpack 3.x babel-loader 7.x | babel 6.x
$ npm i -D babel-loader babel-core babel-preset-env webpack



$ npm i -D babel-plugin-transform-runtime
$ npm i -S babel-runtime

module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['preset-env'],
                    // presets: ['@babel/preset-env'],
                    // plugins: [require('@babel/plugin-transform-object-rest-spread')]
                    // plugins: ['@babel/transform-runtime']
                }
            }
        }
    ]
}

```

https://moduscreate.com/blog/optimizing-react-es6-webpack-production-build/

https://github.com/babel/babel-preset-env/issues/186

https://github.com/webpack/webpack/issues/2785

https://stackoverflow.com/questions/36986133/couldnt-find-preset-es2015-relative-to-directory


{
    "presets": ["preset-env"]
}


https://doc.webpack-china.org/configuration/

https://webpack.js.org/configuration/

https://webpack.js.org/configuration/module/#rule-use
https://webpack.js.org/configuration/module/#rule-loader

https://webpack.js.org/configuration/module/#module-rules

https://webpack.js.org/configuration/module/#useentry

https://webpack.js.org/configuration/module/#rule-test


{
    loader: "css-loader",
    options: {
        modules: true
    }
}

# presets: ['env']


https://github.com/webpack/webpack/issues/2785

http://www.css88.com/doc/webpack/loaders/babel-loader/

```js

module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
    ]
}

```

https://babeljs.io/docs/plugins/preset-env

https://babeljs.io/docs/plugins/preset-env#examples


```json

{
    "presets": ["env"]
}


{
    "presets": [
        [
            "env", {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                }
            }
        ]
    ]
}


{
    "presets": [
        [
            "env", {
                "targets": {
                    "node": "6.10"
                }
            }
        ]
    ]
}


{
    "presets": [
        [
            "env", {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}





{
    "presets": [
        [
            "env", {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                },
                "include": ["transform-es2015-arrow-functions", "es6.map"],
                "exclude": ["transform-regenerator", "es6.set"]
            }
        ]
    ]
}


```

https://babeljs.io/docs/plugins/preset-env#examples


```json

{
    "presets": [
        [
            "env", {
                "targets": {
                    "chrome": 52,
                    "browsers": ["last 2 versions", "safari >= 7"]
                },
                "include": ["transform-es2015-arrow-functions", "es6.map"],
                "exclude": ["transform-regenerator", "es6.set"],
                "modules": false,
                "useBuiltIns": true,
                "debug": true,
                "loose": true
            }
        ]
    ]
}






```

# babel-plugin-transform-object-rest-spread

https://babeljs.io/docs/plugins/transform-object-rest-spread/

https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread

```sh

$ npm i -D babel-plugin-transform-object-rest-spread


```


```json
{
    "plugins": [
        ["transform-object-rest-spread", { "useBuiltIns": true }]
    ]
}

{
    "presets": ["env"],
    "plugins": ["transform-object-rest-spread"]
}


```

https://babeljs.io/docs/plugins/syntax-object-rest-spread/

> This plugin only allows Babel to parse this syntax. 


```sh

$ npm i -D babel-plugin-syntax-object-rest-spread


```





# browser-sync

$ browser-sync start --server --files "./000-xyz/*.*"

http://localhost:3000/demo-modal/company-news.html

http://localhost:3000/modal/index.html


```sh

$ browser-sync start --server --files "./*.*"
$ browser-sync start --server --files "./000-xyz/*.*"

# babel
$ npm i -D babel babel-cli babel-preset-env babel-polyfill babel-preset-react

# webpack
$ npm i -D webpack babel-loader babel-core
$ npm i -D uglifyjs-webpack-plugin html-webpack-plugin clean-webpack-plugin

# css/sass
$ npm i -D style-loader css-loader sass-loader

# AMD/Commonjs
$ npm i -S requirejs systemjs 
$ npm i -D es-module-loader

$ npm i -D browserify


```

https://www.sitepoint.com/modular-javascript-systemjs-jspm/
https://github.com/systemjs/plugin-babel
https://github.com/systemjs/systemjs

https://github.com/ModuleLoader/es-module-loader
https://github.com/ModuleLoader/browser-es-module-loader
https://github.com/ModuleLoader/browser-es-module-loader/blob/master/package.json

```json

    "devDependencies": {
        "rollup": "^0.34.7",
        "babel-core": "^6.22.1",
        "babel-plugin-syntax-dynamic-import": "^6.18.0",
        "babel-plugin-transform-es2015-modules-systemjs": "^6.22.0",
        "browserify": "^13.1.0",
        "es-module-loader": "^2.0.0",
        "rollup-plugin-node-resolve": "^2.0.0"
    },
    "scripts": {
        "prepublish": "npm run build",
        "build": "mkdir -p dist && browserify src/index.js > dist/bundle.min.js && rollup -c"
    }

```




/usr/local/apache2/webapps/information


/usr/local/apache2/webapps/information/reportinfo

/usr/local/apache2/webapps/information/bulletininfo



face, 😑 😩 🤖 🦊 😒 😧 😟 🐭 🐻 🤓 😪 🦁 🐹 😌 😢 😠 🤗 🐮 😞

https://emojipedia.org/search/?q=face




http://localhost:3000/000-xyz/modal/index.html


??? proxy ???

http://10.1.5.202/information/newsinfo/

http://10.1.5.202/queryservice/news/content/564082427896

// 研报 摘要
http://10.1.5.202/webservice/researchreport/research/zy/551173471225




```js

{
    "Title": "温州宏丰:实控人增持过程中误操作 出现短线交易",
    "Id": 564082427896,
    "Content": "　　证券时报网11月15日讯 温州宏丰(300283)11月15日晚间公告,实际控制人、董事长陈晓近期集中竞价方式增持公司53.86万股,增持比例0.13%;在增持过程中因误操作,出现了短线交易,错误委托卖出公司股票 5万股。截至公告日,陈晓持股比例58.43%。\n",
    "PublishDate": "2017-11-15  17:34:52",
    "Infosource": "证券时报网",
    "Url": "http://kuaixun.stcn.com/2017/1115/13771960.shtml"
}


```


字体：大 中 小 12px 14px 16px


Blockchain Fundamentals

solidity

.sol

Introduction to Bitcoin and Decentralized Technology



https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44#.dr9v9ufob

Currying


```js

function add(x) {
    // x = 1
    console.log(`first outer function argument x =`, x);
    return function (y) {
        // y = 41
        console.log(`second inner function argument y =`, y);
        return x + y;
    };
}

const incremenent1 = add(1);
increment1(41); // 42

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

$ npm i -S requirejs
$ npm i -D requirejs

```

http://www.requirejs.org/docs/jquery.html#modulename
https://github.com/requirejs/requirejs/wiki/Upgrading-to-RequireJS-2.0



## browser-side require() the node.js way

https://browserify.org/

https://github.com/browserify/browserify

```sh

$ npm i -g browserify

$ npm i -S browserify
$ npm i -D browserify

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












