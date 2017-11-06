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

## require & define

```js

define('amd_main', function() {
    'use strict';
    var AMD_init = function AMD_init(params) {
        // AMD_init
        console.log('AMD_init = ', params);
        console.log('calling AMD modules');
        require(['amd_module1','amd_module2'], function(amd_module1, amd_module2) {
            'use strict';
            amd_module1.AMDM1('AMD module1');
            amd_module2.AMDM2('AMD module2');
        });
    };
    AMD_init('AMD is running!');
    return {
        AMD_init: AMD_init
    };
});

```




