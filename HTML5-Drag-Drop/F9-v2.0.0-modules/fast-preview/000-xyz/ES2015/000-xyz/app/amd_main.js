// AMD main module

/* */

require(['amd_module1','amd_module2'], function(amd_module1, amd_module2) {
    'use strict';
    var AMD_init = function AMD_init(params) {
        // AMD_init
        console.log('AMD_init = ', params);
        console.log('calling AMD modules');
        amd_module1.AMDM1('AMD module1');
        // amd_module2.AMDM2('AMD module2');
        // async test ???
    };
    // AMD_init('AMD is running!');
    setTimeout(function() {
        console.log('AMD init...');
        AMD_init('AMD is running!');
    }, 0);
    // return {
    //     AMD_init: AMD_init
    // };
    // Uncaught TypeError: Cannot read property 'AMD_init' of undefined
});



// Uncaught ReferenceError: require is not defined ???


// ??? require in define ???
// https://stackoverflow.com/questions/15371918/mismatched-anonymous-define-module
// define with string id

/* 
// define('amd_modules', function() {})
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

 */


/* 

Error: define('amd_modules') !== require(['amd_main'])

OK: define('amd_main') !== require(['amd_main'])


// ??? require in define ???
// https://stackoverflow.com/questions/15371918/mismatched-anonymous-define-module
// define with string id

*/



// Uncaught Error: Mismatched anonymous define() module



/* 


define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    // 
});

*/





