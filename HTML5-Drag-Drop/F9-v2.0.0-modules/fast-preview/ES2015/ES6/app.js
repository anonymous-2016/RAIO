import "./es6-module.js";
import * as ES6M from "./es6-module.js";
import { ES6M } from "./es6-module.js";
import {ES6_Module as ES6M} from "./es6-module.js";



// Closure & setTimeout
setTimeout(function() {
    console.log(`Closure & setTimeout \n`, this);
    ES6_Module();
    ES6M();
    ES6M.ES6_Module();
}, 0);

// Closure & IIFE
(() => {
    console.log(`ES6 & IIFE \n`, this);
})();


// IIFE
(function () {
    console.log(`ES5 & IIFE \n`, this);
})();

(function () {
    console.log(`ES5 & IIFE \n`, this);
}());


// !function
!function () {
    console.log(`ES5 & IIFE \n`, this);
}();

(!function () {
    console.log(`ES5 & IIFE \n`, this);
}());


