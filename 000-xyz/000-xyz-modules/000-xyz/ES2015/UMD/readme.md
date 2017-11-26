# UMD

> UMD = AMD + CMD + old global var


https://github.com/umdjs/umd

> UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.

http://babeljs.io/docs/plugins/transform-es2015-modules-umd/

```sh
$ npm i -D babel-plugin-transform-es2015-modules-umd

```


```json
{
    "plugins": ["transform-es2015-modules-umd"]
}

{
    "plugins": [
        [
            "transform-es2015-modules-umd",
            {
                "globals": {
                    "es6-promise": "Promise"
                }
            }
        ]
    ]
}
```



```js

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
        exports: {}
        };
        factory(mod.exports);
        global.actual = mod.exports;
    }
    })(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = 42;
});

```


> blogs

https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
http://bob.yexley.net/umd-javascript-that-runs-anywhere/

http://know.cujojs.com/tutorials/modules/authoring-umd-modules
http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html


```js
// amd
//    filename: foo.js
define(['jquery'], function ($) {
    //    methods
    function myFunc(){};

    //    exposed public methods
    return myFunc;
});


//    filename: foo.js
define(['jquery', 'underscore'], function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
});

```


```js
// commonjs

//    filename: foo.js

//    dependencies
var $ = require('jquery');

//    methods
function myFunc(){};

//    exposed public method (single)
module.exports = myFunc;




//    filename: foo.js
var $ = require('jquery');
var _ = require('underscore');

//    methods
function a(){};    //    private because it's omitted from module.exports (see below)
function b(){};    //    public because it's defined in module.exports
function c(){};    //    public because it's defined in module.exports

//    exposed public methods
module.exports = {
    b: b,
    c: c
};


```

```js
// umd

// root === this === window
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function myFunc(){};

    //    exposed public method
    return myFunc;
}));


// root === this === window

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));

```


