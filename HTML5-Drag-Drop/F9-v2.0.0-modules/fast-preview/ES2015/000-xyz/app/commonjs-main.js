// commonjs main module

var M1 = require('./commonjs-module1.js');
var M2 = require('./commonjs-module2.js');


var CJS_init = function CJS_init(params) {
    // CJS_init
    console.log('CJS_init = ', params);
    console.log('calling CJS modules');
    M1.CJSM1('commonjs module1');
    M2.CJSM2('commonjs module2');
};


setTimeout(function() {
    console.log('CJS init...');
    CJS_init('CJS is running!');
}, 0);



