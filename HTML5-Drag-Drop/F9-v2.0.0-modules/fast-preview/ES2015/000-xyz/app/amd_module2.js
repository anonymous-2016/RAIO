// AMD module 2

define('amd_module2', function() {
    'use strict';
    var AMDM2 = function AMDM2(params) {
        console.log('AMDM1 params = ', params);
        console.log("you just called AMD module 2!");
    };
    // return AMDM2;
    return {
        AMDM2: AMDM2
    };
});


/* 

http://vid.pluralsight.com/expiretime=1509957807/77749253ef42a36bfef198f2b5d3e0f5/clip-videos/brice-wilson/javascript-module-fundamentals-m3/javascript-module-fundamentals-m3-06/1280x720mp4/20160610154641.mp4

*/