// AMD module 1

define('amd_module1', function() {
    'use strict';
    var AMDM1 = function AMDM1(params) {
        console.log('AMDM1 params = ', params);
        console.log("you just called AMD module 1!");
    };
    // return AMDM1;
    return {
        AMDM1: AMDM1
    };
});

