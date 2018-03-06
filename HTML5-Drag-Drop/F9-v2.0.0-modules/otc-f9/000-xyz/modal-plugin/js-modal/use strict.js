"use strict";



/*

    https://www.w3schools.com/js/js_strict.asp
    In function calls like f(), the this value was the global object.
    In strict mode, it is now undefined.
    在像 f() 这样的函数调用中，this 值是全局对象
    在严格模式下，它现在是未定义的。

*/


"use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());


// "use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());



(function() {
    "use strict";
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());




"use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());

// this = undefined
// Uncaught TypeError: Cannot set property 'Modal' of undefined


"use strict";
(function() {
    // Define our constructor
    let this = window;// reserved word `this`
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());

// Uncaught SyntaxError: Unexpected strict mode reserved word


"use strict";
(function() {
    // Define our constructor
    let that = window;
    console.log(`that =`, that);
    that.Modal = function() {
        console.log(`that =`, that);
    }
}());

// that = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

Modal;
// ƒ () {
//     console.log(`that =`, that);
// }

Modal();
// that = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
