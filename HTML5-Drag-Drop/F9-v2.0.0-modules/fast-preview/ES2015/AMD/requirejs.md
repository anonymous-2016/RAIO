# requireJS (AMD)

> loader

1. only AMD
2. js


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



