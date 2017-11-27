/**
 * @description `!function() & IIFE`
 * @author xgqfrms
 * @link https://github.com/gildata/RAIO/issues/192
 */

// ES6
(
    () => console.log(`ES6 IIFE!`, this)
)(this);



// ES5
(
    function () {
        console.log(`ES5 IIFE!`, this);
    }
)(this);


(
    function () {
        console.log(`ES5 IIFE!`, this);
    }(this)
);


function fn() {
    console.log(`ES5 IIFE!`, this);
}(this);

!function fn() {
    console.log(`ES5 IIFE!`, this);
}(this);


!function fn() {
    console.log(`ES5 IIFE!`, this);
}();


!function fn() {
    console.log(`ES5 IIFE!`, this);
}();
// true


!function fn() {
    console.log(`ES5 IIFE!`, this);
};
// false

!function() {
    console.log(`ES5 IIFE!`, this);
};
// false

function fn() {
    console.log(`ES5 IIFE!`, this);
};

fn();




+function(){
    console.log(`You can also use + instead of !`);
}();
// You can also use + instead of !
// NaN

-function(){
    console.log(`You can also use - instead of !`);
}();
// You can also use - instead of !
// NaN

+-function(){
    console.log(`You can also use +- instead of !`);
}();
// You can also use +- instead of !
// NaN


-+function(){
    console.log(`You can also use -+ instead of !`);
}();
// You can also use -+ instead of !
// NaN




// https://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-name

// + is just one of the options. 
// It can also be -, !, ~, or just about any other unary operator. 

~function() { 
    console.log(`You can also use ~ instead of !`);
}();
// You can also use -+ instead of !
// -1

+~function() { 
    console.log(`You can also use +~ instead of !`);
}();
// You can also use +~ instead of !
// -1

-~function() { 
    console.log(`You can also use ~ instead of !`);
}();
// You can also use -~ instead of !
// 1

~-function() { 
    console.log(`You can also use ~ instead of !`);
}();
// You can also use +~ instead of !
// -1

~+function() { 
    console.log(`You can also use ~ instead of !`);
}();
// You can also use +~ instead of !
// -1

~NaN;
// -1
~null;
// -1
~false;
// -1
~undefined;
// -1





function foo() {
    console.log(`this is function declaration!`);
}

function foo() {
    console.log(`this is function declaration!`);
};


!function foo() {
    console.log(`this is function expression!`);
};
// false

!function foo() {
    console.log(`this is function expression!`);
}
// false


// It simply makes the `JavaScript parser` parse it as an expression, which is necessary to execute it.

!function foo() {
    console.log(`this is function expression!`);
}()
// this is function declaration!
// true

!function foo() {
    console.log(`this is function expression!`);
}();

// https://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function

// `!` makes the expression return `true`. 
// This is because by default all IIFE return `undefined`, 
// which leaves us with `!undefined` which is `true`.

(function(){
    console.log(`This is because by default all IIFE return \`undefined\`!`);
})();
// undefined

!undefined;
// true
!NaN;
// true

!function foo() {
    console.log(`this is function declaration!`);
};
// false
!function foo() {
    console.log(`this is function declaration!`);
}();
// true


// The function returns undefined, and !undefined is true.

function xyz(){};
// undefined

!function xyz(){};

~undefined;
// -1

!undefined;
// true

javascript:alert(!function(){}())
// true
javascript:console.log(`xyz`);
// xyz














