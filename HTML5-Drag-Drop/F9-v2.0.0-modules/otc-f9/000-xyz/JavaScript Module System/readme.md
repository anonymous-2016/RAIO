# JavaScript Module System

Q1: encapsulation, no conflicts?
Q2: dependency, in the right order?

A: module system

## The Revealing Module Pattern

> JavaScript scopes (at least up to the appearance of let in ES2015) work at the function level.

> IIFE & Closures

https://developer.mozilla.org/en-US/docs/Glossary/IIFE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


http://lucybain.com/blog/2014/immediately-invoked-function-expression/
http://benalman.com/news/2010/11/immediately-invoked-function-expression/


PROS
    Simple enough to be implemented anywhere (no libraries, no language support required).
    Multiple modules can be defined in a single file.
CONS
    No way to programmatically import modules (except by using eval).
    Dependencies need to be handled manually.
    Asynchronous loading of modules is not possible.
    Circular dependencies can be troublesome.
    Hard to analyze for static code analyzers.

```js

var myRevealingModule = (function () {
    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";
    function privateFunction() {
        console.log("Name:" + privateVar);
    }
    function publicSetName(strName) {
        privateVar = strName;
    }
    function publicGetName() {
        privateFunction();
    }
    // Reveal public pointers to
    // private functions and properties
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModule.setName("Paul Kinlan");

```

## CommonJS

> browserify / webpack / Node.js

http://browserify.org/index.html

PROS
    Simple: a developer can grasp the concept without looking at the docs.
    Dependency management is integrated: modules require other modules and get loaded in the needed order.
    require can be called anywhere: modules can be loaded programmatically.
    Circular dependencies are supported.
CONS
    Synchronous API makes it not suitable for certain uses (client-side).
    One file per module.
    Browsers require a loader library or transpiling.
    No constructor function for modules (Node supports this though).
    Hard to analyze for static code analyzers.


```js

// In circle.js
const PI = Math.PI;
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;


// In some file
const circle = require('./circle.js');
console.log( `The area of a circle of radius 4 is ${circle.area(4)}`);

```


## AMD

> require.js

http://requirejs.org/docs/start.html


PROS
    Asynchronous loading (better startup times).
    Circular dependencies are supported.
    Compatibility for require and exports.
    Dependency management fully integrated.
    Modules can be split in multiple files if necessary.
    Constructor functions are supported.
    Plugin support (custom loading steps).
CONS
    Slightly more complex syntactically.
    Loader libraries are required unless transpiled.
    Hard to analyze for static code analyzers.

```js

//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});

// Or:
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    return function () {};
});

```

## UMD


## ES6 Modules


PROS
    Synchronous and asynchronous loading supported.
    Syntactically simple.
    Support for static analysis tools.
    Integrated in the language (eventually supported everywhere, no need for libraries).
    Circular dependencies supported.
CONS
    Still not supported everywhere.


```js

//------ lib.js ------
export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}

const diag = (x, y) => {
    return sqrt(square(x) + square(y));
};

export default diag;
export {diag};


//------ main.js ------
// import {square, diag} from `./lib.js`;
import {square, diag} from `./lib`;

console.log(square(11));
// 121
console.log(diag(4, 3));
// 5

```

> polyfill & transpilers

https://github.com/ModuleLoader/es-module-loader

https://babeljs.io/


## Module loaders

> Dynamic ES module loader

> System.js

https://github.com/systemjs/systemjs

https://github.com/ModuleLoader/es-module-loader

https://github.com/whatwg/loader

> ES2015 does not support dynamic loading of modules, but a draft specification does:


```js

System.import('some_module')
.then(some_module => {
    // Use some_module
})
.catch(error => {
    // ...
});

```

```html
<!-- libs -->
<script src="system.js"></script>
<!-- config -->
<script>
    // set our baseURL reference path
    System.config({
        baseURL: '/app',
        // or 'traceur' or 'typescript'
        transpiler: 'babel',
        // or traceurOptions or typescriptOptions
        babelOptions: {
            //
        },
    });
    // loads /app/main.js
    System.import('main.js');
</script>

```

https://github.com/tc39/proposal-dynamic-import

```html

<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>proposal-dynamic-import</title>
</head>
<body>
    <section>
        <nav>
            <a href="books.html" data-entry-module="books">Books</a>
            <a href="movies.html" data-entry-module="movies">Movies</a>
            <a href="video-games.html" data-entry-module="video-games">Video Games</a>
        </nav>
        <main>Content will load here!</main>
    </section>
    <!-- js -->
    <script>
        const main = document.querySelector("main");
        for (const link of document.querySelectorAll("nav > a")) {
            link.addEventListener("click", e => {
                e.preventDefault();
                // dynamic-import
                import (`./section-modules/${link.dataset.entryModule}.js`)
                .then(module => {
                    module.loadPageInto(main);
                })
                .catch(err => {
                    main.textContent = err.message;
                });
            });
        }
    </script>
</body>
</html>

```

https://jakearchibald.com/2017/es-modules-in-browsers/

https://html.spec.whatwg.org/multipage/scripting.html#the-script-element

https://blog.whatwg.org/js-modules

https://matthewphillips.info/posts/loading-app-with-script-module


### `<script type="module">`

> es-modules-in-browsers

chrome://flags/
chrome://flags/#enable-module-scripts

```js
// utils.js
export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

```

```html

<script type="module">
    import {addTextToBody} from './utils.js';
    addTextToBody('Modules are pretty cool.');
</script>

```



## Node.js

module.exports & exports


```js

// This won't work, replacing exports entirely breaks the binding to
// modules.exports.
exports =  (width) => {
    return {
        area: () => width * width
    };
}

// This works as expected.
module.exports = (width) => {
    return {
        area: () => width * width
    };
}

```

## auth0

https://auth0.com

https://auth0.com/docs/quickstarts

https://github.com/auth0-blog/es2015-rundown-example






## Make this work:

```js

duplicate([1, 2, 3, 4, 5]);
// [1,2,3,4,5,1,2,3,4,5]


function duplicate(arr) {
  return arr.concat(arr);
}

let arr = [1, 2, 3, 4, 5];
arr.map(
    (item, i) => {
        console.log(`item = `, item, i);
        arr.push(item);
    }
);

//

```
