# Modules Loader




1. layout

(fv-div-layout-3)/(fv-div-layout-5)/(fv-div-layout-7)

> default layout + click setting layout


http://vid20.pluralsight.com/clip-videos/jonathan-mills/javascript-practical-design-patterns-m0/javascript-practical-design-patterns-m0-01/1280x720mp4/20160115214305.mp4?oBrtIZ0CPvUGb_oA9qOJhp1yZnz0b7P0xBYZCp0QkIHyyDyZ2-i0Q9nnJhLB55FduqR2Wz0dIJpQHN87MMJwV5OvphwA_8aISWWAInKy2tDvk-vnu--l8FmkmNTQBfgqeHKKyT6wWVLINDn_DQIV-QPXB9J0tD-34quqckBLLWaPsT-VXxmtceIQvZewjE-m8QHQSs2ezKYwelg5kAvH9Yk7_Hfh16whQGACnS8eYKw31iguiXvWMX-D3lBsUr_PQt0ETsMXdOmdf8U



https://s2.pluralsight.com/webplayer/player/client/libs/video.min.js

```js

!function(a){
    if("object" == typeof exports && "undefined" != typeof module){
        module.exports=a();
    }
    else if("function" == typeof define && define.amd){
        define([],a);
    }else{
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        b.videojs =a()
    }
}



"undefined" != typeof window ? window : "undefined"
// Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}


undefined" != typeof global ? global : "undefined"
// undefined"

"undefined" != typeof self ? self : this,
// "object"



```


# JavaScript Modules: Closures & setTimeout & IIFE 

https://developer.xgqfrms.org/zh-CN/docs/Web/JavaScript/Closures
https://developer.xgqfrms.org/en-US/docs/Glossary/IIFE





```js


/**
 * NameSpace CF
*/
var CF = CF || {};

// anonymous function
CF.func = function () {
    let name = "xgqfrms";
    function displayName() {
        console.log(`name = ${name}`); 
    }
    return {displayName};
};

// named function
CF.func = function func() {
    let name = "xgqfrms";
    function displayName() {
        console.log(`name = ${name}`); 
    }
    return {displayName};
};


CF.func().displayName();
// name = xgqfrms

/* ES5 Constructor Function */

// global
function CFfunc() {
    var name = "xgqfrms";
    function displayName() {
        console.log('name =', name); 
    }
    // ...spread
    return {
        "displayName": displayName
    };
}

CFfunc().displayName();
// name = xgqfrms

var testFunc1 = CFfunc();
testFunc1.displayName();
// name = xgqfrms

var testFunc2 = new CFfunc();
testFunc2.displayName();
// name = xgqfrms
testFunc2.name = `webgeeker`;
testFunc2.displayName();// ??? update failed
// name = xgqfrms
testFunc2.name;// this.name bug ???
// "webgeeker"

var testFunc3 = CFfunc;
testFunc3().displayName();
// name = xgqfrms
testFunc3().name = `webgeeker`;
testFunc3().displayName();// ??? update failed



/* IIFE & Closure & setTimeout */


// local
(function CFfunc() {
    var name = "xgqfrms";
    function displayName() {
        console.log('name =', name); 
    }
    // ...spread
    return {
        "displayName": displayName
    };
})().displayName();

(function CFfunc() {
    var name = "xgqfrms";
    function displayName() {
        console.log('name =', name); 
    }
    // ...spread
    return {
        "displayName": displayName
    };
}()).displayName();

(function CFfunc() {
    var name = "xgqfrms";
    function displayName() {
        console.log('name =', name); 
    }
    // ...spread
    return {
        "displayName": displayName
    };
}().displayName());



// local
setTimeout(function() {
    function CFfunc() {
        var name = "xgqfrms";
        function displayName() {
            console.log('name =', name); 
        }
        // ...spread
        return {
            "displayName": displayName
        };
    }
    //IIFE
    CFfunc().displayName();
}, 0);







/* ES6 Classes */

class CFfunc {
    let name = "xgqfrms";
    const displayName = () => {
        console.log(`name = ${name}`); 
    };
    // ...spread
    return {
        displayName
    };
}


/* 
    https://googlechrome.github.io/samples/classes-es6/index.html
    https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html
    https://repl.it/languages/babel
    https://jscomplete.com/repl/
    https://babeljs.io/repl/
*/

class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a', this.name);
        console.log('height =', this.height);
        console.log('width =', this.width);
    }
    static showHeight() {
        console.log('static height =', this.height);
    }
    static showWidth() {
        console.log('static width =', this.width);
    }let 
}

class Square extends Polygon {
    constructor(length) {
        // call `super()` before using `this`!
        super(length, length);
        this.name = 'Square';
    }
    sayName() {
        console.log(`Hi, I am a ${this.name}`);
        // call parent class method, using super
        super.sayName();
        // this ??? Circular references ??? 循环引用
        // this.sayName();
        // RangeError: Maximum call stack size exceeded
        console.log(`this = ${this}`);
        // this = [object Object]
        console.log(`this.name = ${this.name}`);
        // this.name = Square
        console.log(`this = ${JSON.stringify(this, null, 4)}`);
        /* 
            this = {
                "name": "Square",
                "height": 111,
                "width": 111
            }
        */
        // deep copy ??? JSON.stringify() & JSON.parse();
    }
    sayHello() {
        console.log(`Hello World!`);
    }
}


// initial & constructor(args)
let p = new Polygon(123,456);
p.sayName();

/*
    Hi, I am a Polygon
    height = 123
    width = 456
*/
let s = new Square(111);
s.sayName();
s.sayHello();

/*
    Hi, I am a Square
    Hi, I am a Square
    height = 111
    width = 111
    Hello World!
*/



// 类表达式 =
const MyClass = class {
    // class body
};

const MyClass = class [className] [extends] {
    // class body
};

// 类声明
class className [extends] {
    // class body
};



// 原型方法
class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea()
    }
    // Setter
    set area(value) {
        return value**value;
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    // init() ???
}

const square = new Rectangle(10, 10);
console.log(square.area);
// 100


/* 匿名类 */ 
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

/* 命名的类 */ 
let Rectangle = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};





/* 
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
*/

Object.defineProperty(obj, prop, descriptor);

descriptor = {
    configurable: false,
    enumerable: false,
    writable: false,
    value: undefined,
    get: undefined,
    set: undefined
};

/* 
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer
    可以通过 new Object(), Object.create() 方法，或者使用字面量标记(初始化 标记)初始化对象。
    对象初始化，由花括号{}包含的一个由0个或者多个对象属性名和关联值组成的列表构成。
*/

let obj1 = {};
let obj2 = {
    a: "alias",
    b: 37,
    c: {}
};

let a = "alias",
    b = 37,
    c = {};

let obj3 = {
    a: a,
    b: b,
    c: c
};

let obj4 = {
    property: function ([parameters]) {
        // 
    },
    get property() {
        // 
    },
    set property(value) {
        // 
    },
};


// destructuring assignment
let obj5 = {
    a,
    b,
    c
};
let obj5 = {a, b, c};

// ...spread
let obj6 = {...obj2};






class Square extends Polygon {
    constructor(length) {
        // 在这里, 它调用了`父类的构造函数`, 并将父类的 lengths 提供给 Polygon 的"width"和"height"
        super(length, length);
        // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
        // 忽略这个，将会导致一个引用错误。
        this.name = 'Square';
        super.sayName();
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.area = value;
    }
}


/* 
    在同一个类中的一个静态方法调用另一个静态方法，你可以使用 this 关键字。
*/

class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'


/* 
    静态方法 不能直接在 非静态方法 中使用 this 关键字来访问。
    你需要使用 类名 来调用它们：CLASSNAME.STATIC_METHOD_NAME(),
    或者将其作为 构造函数的属性 来调用该方法： this.constructor.STATIC_METHOD_NAME().
*/

class StaticMethodCall {
    constructor() {
        console.log(StaticMethodCall.staticMethod());
        // 'static method has been called.'
        console.log(this.constructor.staticMethod());
        // 'static method has been called.'
    }
    static staticMethod() {
        return 'static method has been called.';
    }
}


/* 

    1. 一个静态方法在一个类上是如何被实现的。
    2. 具有一个静态成员的一个类是可以被子类化 。
    3. 一个静态方法如何能被调用和不能被调用。

*/

// parent class
class Tripple {
    // static method
    static tripple(n) {
        n = n || 1;
        return n * 3;
    }
}

// child class
class BiggerTripple extends Tripple {
    // static method
    static tripple(n) {
        return super.tripple(n) * super.tripple(n);
    }
}

console.log(Tripple.tripple()); 
// 3
console.log(Tripple.tripple(6));
// 18

let tp = new Tripple();

console.log(BiggerTripple.tripple(3));   
// 81（不会受父类实例化的影响）

console.log(tp.tripple());
// 'tp.tripple 不是一个函数'.



/*
    JSX: React ES7 initial class properties ???
    https://babeljs.io/docs/plugins/transform-class-properties/
    https://reactjs.org/docs/react-without-es6.html#autobinding
    https://jscomplete.com/repl
    https://jscomplete.com/learning-react-js
    https://reactjs.org/docs/react-dom.html#render
*/

class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello!'
        };
        // constructor bind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert(this.state.message);
    }
    // WARNING: this syntax is experimental! Using an arrow here binds the method:
    // ES7 bind(this)
    ES7_handleClick = () => {
        alert(this.state.message);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    ES6 constructor
                </button>
                {/*ES6 bind(this) onClick={(e) => this.handleClick(e)} */}
                <button onClick={() => this.handleClick()}>
                    ES6 Arrow Function
                </button>
                <button onClick={this.ES7_handleClick}>
                    ES7 class properties
                </button>
            </div>
        );
    }
}

const app = `mountNode`;

// ReactDOM.render(component, app_container[, callback])
const callback_func = (e) => {
    console.log(`e = `, e);
};

ReactDOM.render(<SayHello />, mountNode, callback_func);




```










```js

/* 

get & set ??? bug

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

*/

function Book () {
    var name = '';
    // this must be a Object!!!
    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (val) {
            console.log(val);
            name = val;
        }
    });
    // no return bug ???
}

function Book () {
    var name = '';
    var obj = {};
    // this must be a Object!!!
    Object.defineProperty(obj, 'name', {
        get: function () {
            return name;
        },
        set: function (val) {
            console.log(val);
            name = val;
        },
        // value: 37,
        writable: true,
        enumerable: true,
        configurable: true
    });
    // no return bug ???
}

var b = new Book();
// Uncaught TypeError: Invalid property descriptor. 
// Cannot both specify accessors and a value or writable attribute, #<Object>
b.name = `xgqfrms`;
b.obj.name();
b.obj.name(`webgeeker`);





// bug ???
function Book () {
    var name = '';
    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (val) {
            console.log(val);
            name = val;
        }
    });
    // no return bug ???
}

let b = new Book();
b.name = `xgqfrms`;


// closure update error ???
function Book () {
    var name = '';
    var get = function () {
        return name;
        // return this.name;
    };
    var set = function (val) {
        console.log(val);
        name = val;
        // this.name = val;
    };
    return {
        name,
        get,
        set
    };
}
var b = new Book();
b.name = `xgqfrms`;



// this update OK!
function Book () {
    var name = '';
    var get = function () {
        // return name;
        return this.name;
    };
    var set = function (val) {
        console.log(val);
        // name = val;
        this.name = val;
    };
    return {
        name,
        get,
        set
    };
}
var b = new Book();
b.name = `xgqfrms`;


```














