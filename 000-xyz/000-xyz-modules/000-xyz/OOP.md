# OOP

> 面向对象编程 (OOP) 是用抽象方式创建基于现实世界模型的一种编程模式。它使用先前建立的范例，包括`模块化，多态和封装`几种技术。

> 在 OOP 中，每个对象能够接收消息，处理数据和发送消息给其他对象。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript


```js

// OOP & IIFE

let moduleTest = (function(url = ``) {
    const V = `this is a constant value!`;
    const debug = false;
    // const url = ``;
    // return obj
    return {
        api: `https://developer.mozilla.org/API`,
        dom: () => {
            //do somthing
            console.log(`dom!`);
        },
        fetch: (url) => {
            // fetch data
            console.log(`url = `, url);
        },
        init: function() {
            const TV = `test value!`;
            let self = this;
            // this === obj ???
            if(debug){
                console.log(`self = this,`, self);
                // {api: "https://developer.mozilla.org/API", init: ƒ}
                console.log(`this obj = ,`, this);
                // {api: "https://developer.mozilla.org/API", init: ƒ}
                console.log(`self.api = ,`, self.api);
                // https://developer.mozilla.org/API
                console.log(`this.api = ,`, this.api);
                // https://developer.mozilla.org/API
                console.log(`self.V = ,`, self.V);
                // undefined
                console.log(`self.TV = ,`, self.TV);
                // undefined
                console.log(`outer V = ,`, V);
                // this is a constant value!
                console.log(`inner TV = ,`, TV);
                // test value!
            }
            this.dom();
            // do dom
            this.fetch();
            // init data
        }
    };
})(url);

const url = `https://cdn.xgqfrms.xyz/`;
moduleTest.init(url);

```






## HTML5 Atrribute ???

> CSS Attributes ???


https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes


https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*


## data-*

> HTML5 这类的属性，被称为自定义属性，允许HTML与和它对应DOM表现形式之间的专有信息交换，这或许对script来说有用。


https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*


https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests


http://www.jb51.net/html5/152511.html



```js

// Object (must be , data-obj=`{"key":"value"}`)

// data-obj='{"uid":"007","name":"hacker","age":"unkown","address":"UFO"}'


let test = document.querySelector('[data-obj*="uid"');

let data_obj = JSON.parse(test.dataset.obj);

```



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent




```js

/* 

https://www.bing.com/?intlF=%E5%9B%BD%E5%86%85%E7%89%88%E5%9B%BD%E9%99%85%E7%89%88%E6%8F%90%E4%BA%A4

https://www.bing.com/?intlF=国内版国际版提交


*/

encodeURI(`https://www.bing.com/?intlF=国内版国际版提交`);
// "https://www.bing.com/?intlF=%E5%9B%BD%E5%86%85%E7%89%88%E5%9B%BD%E9%99%85%E7%89%88%E6%8F%90%E4%BA%A4"

decodeURI(`https://www.bing.com/?intlF=%E5%9B%BD%E5%86%85%E7%89%88%E5%9B%BD%E9%99%85%E7%89%88%E6%8F%90%E4%BA%A4`);
// "https://www.bing.com/?intlF=国内版国际版提交"


encodeURIComponent(`国内版国际版提交`);
// "%E5%9B%BD%E5%86%85%E7%89%88%E5%9B%BD%E9%99%85%E7%89%88%E6%8F%90%E4%BA%A4"

decodeURIComponent(`%E5%9B%BD%E5%86%85%E7%89%88%E5%9B%BD%E9%99%85%E7%89%88%E6%8F%90%E4%BA%A4`);
// "国内版国际版提交"




```



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly

> WebAssembly 对象是所有 WebAssembly 相关功能的`命名空间`(全局对象)。


```js

const importObject = {
    imports: {
        imported_func: function(arg) {
            console.log(arg);
        }
    }
};

fetch('simple.wasm')
.then(res => res.arrayBuffer())
.then(
    (bytes) => {
        return WebAssembly.instantiate(bytes, importObject);
    }
).then(
    (result) => {
        return result.instance.exports.exported_func();
    }
);

```


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html


```js
class Square extends Polygon {
    constructor(length) {
        // Here, it calls the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.area = value;
    } 
}


class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon




```





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

> 所有对象都会从它的原型上继承一个 constructor 属性



```js

let obj = {};
obj.constructor === Object; // true

let obj = new Object;
obj.constructor === Object; // true

let arr = [];
arr.constructor === Array; // true

let arr = new Array;
arr.constructor === Array // true

let num = new Number(3);
num.constructor === Number; // true


```

```js

// function class
function Tree(name) {
    this.name = name;
    // this.constructor = () => {
    //     console.log(`init constructor`);
    // }
    // IIFE
    (function (name){
        console.log(`每个声明的函数都可以在实例化后被调用执行`, name);
    })(this.name);
}

// instance object
let theTree = new Tree("Redwood");

// console.log(`theTree.constructor is, `, theTree.constructor);

theTree.constructor();
// 每个声明的函数都可以在实例化后被调用执行 undefined

```

```js

// function class
function Tree(name) {
    this.name = name;
    this.init = () => {
        console.log(`init constructor`);
    }
    // init();//Uncaught ReferenceError: init is not defined
    this.init();
    // IIFE
    (function (name){
        console.log(`每个声明的函数都可以在实例化后被调用执行`, name);
    })(this.name);
}



// instance object
let theTree = new Tree("Redwood");

/* multi constuctor ??? */

// init constructor
// 每个声明的函数都可以在实例化后被调用执行 Redwood

theTree.constructor();
// init constructor
// 每个声明的函数都可以在实例化后被调用执行 undefined

```


```js
// const OOP = () => {

function OOP () {
    this.DOM = {
        queryOne: document.querySelector,
        queryAll: document.querySelectorAll, 
    };
    this.Data = {
        fetch: window.fetch,
        ajax: window.XMLHttpRequest,
    };
    this.init = () => {
        console.log(`init constructor`);
        return {
            dom: this.DOM,
            data: this.Data
        }
    };
    // this.init();
    // IIFE & init & constructor
    (() => {
        return this.init();
    })();
};


let xyz = new OOP();
// Uncaught TypeError: OOP is not a constructor


let xyz = new OOP();
// init constructor
// OOP {DOM: {…}, Data: {…}, init: ƒ}

xyz.Data.fetch(`https://cdn.xgqfrms.xyz/json/data.json`);
// Uncaught (in promise) TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation

// 非法调用 ???

xyz.DOM.queryOne(`body`);
// Uncaught TypeError: Illegal invocation


this;
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

this.fetch;
// ƒ fetch() { [native code] }

this.Window;
// ƒ Window() { [native code] }

this.Window();
// Uncaught TypeError: Illegal constructor

this.window();
// Uncaught TypeError: this.window is not a function


/* debugger:///VM3185:1 */


const url = `https://cdn.xgqfrms.xyz/json/data.json`;

xyz.Data.fetch(url);



```



```js

function Person(firstName) {
    this.firstName = firstName;
    this.say = () => {
        console.log(`Hello, ${this.firstName}`);
        // return `Hello, ${this.firstName}`;
    }
}

Person.prototype.sayHello = function() {
    console.log(`prototype Hello, I'm ${this.firstName}`);
};

let person1 = new Person("Alice");
let hello = person1.say;
let helloFunction = person1.sayHello;



person1.sayHello(); 
// prototype Hello, I'm Alice

hello(); 
// Hello, Alice

helloFunction(); 
// prototype Hello, I'm undefined
// (or fails with a TypeError in strict mode)




console.log(helloFunction === person1.sayHello);
// true

console.log(helloFunction === Person.prototype.sayHello);
// true

helloFunction.call(person1);
// prototype Hello, I'm Alice



```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call


> 注意：该方法的作用和 apply() 方法类似，只有一个区别，就是call()方法接受的是若干个参数的`列表`，而apply()方法接受的是一个包含多个参数的`数组`。

```js

fun.call(thisArg, arg1, arg2, ...)

fun.apply(thisArg, [argsArray])

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create

> Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象。

```js

Object.create(proto[, propertiesObject])

```


```md

JavaScript 指南
    Introduction
    Grammar and types
    Control flow and error handling
    Loops and iteration
    Functions
    Expressions and operators
    Numbers and dates
    Text formatting
    Regular expressions
    Indexed collections
    Keyed collections
    Working with objects
    Details of the object model
    Iterators and generators
    Meta programming
中级教程
    深入 JavaScript
    JavaScript 数据结构
    如何正确判断相等性
    Closures
高级
    继承和原型链
    严格模式
    JavaScript 类型化数组
    SIMD types
    内存管理
    Concurrency model and Event Loop

```




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management






```js


[1,2,3,4,5,6,7,8,9,0].join();
// "1,2,3,4,5,6,7,8,9,0"

[1,2,3,4,5,6,7,8,9,0].join(`_`);
// "1_2_3_4_5_6_7_8_9_0"


```


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

```js

function init() {
    let name = "Mozilla"; 
    // name 是一个被init创建的局部变量
    function displayName() { 
    // displayName() 是一个内部函数,
        console.log(`name = ${name}`); 
        //  一个闭包使用在父函数中声明的变量
    } 
    displayName();
}
init();


function makeFunc() {
    let name = "Mozilla";
    function displayName() {
        console.log(`name = ${name}`); 
    }
    return displayName;
}

let myFunc = makeFunc();
myFunc();


```


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop


> stack / heap / queue === 栈/堆/队列

1. 函数调用形成了一个栈帧。
2. 对象被分配在一个堆中，即用以表示一个大部分非结构化的内存区域。
3. 一个 JavaScript 运行时包含了一个待处理的消息队列。

> 事件循环模型是 JavaScript的一个非常有趣的特性，与许多其他语言不同，它永不阻塞。

https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311








## collection

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap


// forEach & map

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

```js

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

// ES6
let numbers = [1, 5, 10, 15];
let doubles = numbers.map( x => x ** 2);

// doubles is now [1, 25, 100, 225]
// numbers is still [1, 5, 10, 15]


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

forEach() 方法对数组的每个元素执行一次提供的函数。
Note: not return a new array! & no return value!
应用场景：为一些相同的元素，绑定事件处理器！
demo： https://codepen.io/forEach_demo

```

## matches() ??? js-30-days


https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches


match()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match


filter()


http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener

https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/dispatchEvent

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener


```js

target.addEventListener(type, listener [,{capture: Boolean, bubbling: Boolean, once: Boolean}]);


once
capture
bubbling
propagation 传播

event.preventDefault();
event.stopPropagation();
event.stopImmediatePropagation();

useCapture


```

https://developer.mozilla.org/zh-CN/docs/Web/Events/dblclick

https://developer.mozilla.org/zh-CN/docs/Web/Events/click





https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation

https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation


https://developer.mozilla.org/zh-CN/docs/Web/API/Event/Event
https://developer.mozilla.org/zh-CN/docs/Web/API/Event/createEvent

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/srcElement
> Event.srcElement 是标准的 Event.target 属性的一个别名。

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/bubbles
https://developer.mozilla.org/zh-CN/docs/Web/API/Event/cancelable
https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composed

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/deepPath

https://developer.mozilla.org/zh-CN/docs/Web/API/CSSValue
https://developer.mozilla.org/zh-CN/docs/Web/API/Attr
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttributeNode



https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model

http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event


https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target

> event.target 属性可以用来实现 事件委托 (event delegation)。

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/currentTarget

> event.currentTarget 很有用, 当将相同的事件处理程序附加到多个元素时。


https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction








```js

// numberWithCommas ??? js 30 days

// let regex = new RegExp(/\B(?(\d{3}+)?(\d))/, g);

// Uncaught SyntaxError: Invalid regular expression: /\B(?(\d{3}+)?(\d))/: Invalid group


```





图灵机器人

http://www.tuling123.com/openapi/api?key=4dcd4c3776104a52be5e8002ee40df45&&info=不懂你说的是什么～



http://xyxiao.cn/

http://xyxiao.cn/vue-blog/







# highstock & navigator / scrollbar / rangeSelector


https://www.highcharts.com/stock/demo


https://api.highcharts.com/highstock/scrollbar


http://www.highcharts.com/docs/chart-design-and-style/style-by-css

.highcharts-scrollbar-thumb,
.highcharts-scrollbar-arrow,
.highcharts-scrollbar-button,
.highcharts-scrollbar-rifles,
.highcharts-scrollbar-track


```js

    scrollbar: {
        barBackgroundColor: 'gray',// bar
        barBorderColor: "#cccccc",
        barBorderRadius: 7,
        barBorderWidth: 1,
        buttonArrowColor: '#333333',
        buttonBackgroundColor: '#e6e6e6',// button
        buttonBorderColor: "#cccccc",
        buttonBorderRadius: 3,
        buttonBorderWidth: 1,
        enabled: true,
        height: undefined,
        liveRedraw: undefined,
        margin: 10,
        minWidth: 6,
        rifleColor: "#333333",
        showFull: true,
        step: 0.2,
        trackBackgroundColor: "#f2f2f2",
        trackBorderColor: "#f2f2f2",
        trackBorderRadius: 0,
        trackBorderWidth: 1,
        zIndex: 3,
    },

```

# highcharts-navigator

https://api.highcharts.com/highstock/navigator



```js
// navigator

    navigator: {
       enabled: false,
       adaptToUpdatedData:
    },




```






https://api.highcharts.com/highstock/rangeSelector

https://api.highcharts.com/highstock/rangeSelector.buttons


http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/rangeselector/input-datepicker/

> rangeselector & input-datepicker


```js
// rangeSelector

Highcharts.stockChart('container', {
        chart: {
            height: 300,
            type: 'column',
        },
        rangeSelector: {
            enabled: true,
            floating: false,
            allButtonsEnabled: true,
            buttonSpacing: 0,
            verticalAlign: 'top',// top, middle, bottom.
            x: 0,
            y: 0,
            buttons: [
                {
                    type: 'month',// undefined, "millisecond", "second", "minute", "hour", "day", "week", "month", "ytd", "all".
                    count: 1,
                    text: '1m',// undefined
                    dataGrouping: {
                        forced: true,
                        units: [['day', [1]]]
                    },
                    offsetMax: 0,
                    offsetMin: 0,
                    events: {
                        click: function(e) {
                            console.log(this);
                        },
                    },// undefined
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m'
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'ytd',
                    text: 'YTD'
                },
                {
                    type: 'year',
                    count: 1,
                    text: '1y'
                },
                {
                    type: 'all',
                    text: 'All'
                }
            ],
            buttonPosition: {
                align: 'right',// Zoom
                // left, center, right
                x: 0,
                y: 0,
            },
            buttonTheme: {
                height: 18,
                width: 28,
                padding: 2,
                undefined: 0,
                zIndex: 7,
                fill: 'none',
                // ???
                stroke: 'none',
                'stroke-width': 0,
                r: 8,
                style: {
                    color: '#039',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#039',
                        style: {
                            color: 'white'
                        }
                    }
                    // disabled: { ... }
                }
            },
            selected: 2,
            // height: undefined,
            inputBoxBorderColor: "#cccccc",
            inputBoxHeight: 17,
            // inputBoxStyle: undefined,
            inputBoxWidth: 90,
            inputDateFormat: "%b %e %Y",
            inputDateParser: function (value) {
                // Custom parser to parse the %H:%M:%S.%L format
                // return a valid JavaScript time as milliseconds since 1970.
                value = value.split(/[:\.]/);
                return Date.UTC(
                    1970,
                    0,
                    1,
                    parseInt(value[0], 10),
                    parseInt(value[1], 10),
                    parseInt(value[2], 10),
                    parseInt(value[3], 10)
                );
            },
            inputEditDateFormat: "%Y-%m-%d",
            // inputEnabled: undefined,
            inputPosition:{
                align: "right", // left, center, right.
                x: 0,
                y: 0,
            },
            inputStyle: {
                color: '#039',
                fontWeight: 'bold'
            },
            labelStyle: {
                color: "#666666",
                fontWeight: 'bold'
            },
            selected: undefined,
        },
        _navigator: {
            enabled: false
        },
        title: {
            text: 'AAPL Stock Price'
        },
        subtitle: {
            text: 'Custom data grouping tied to range selector'
        },
        series: [
            {
                name: 'AAPL',
                data: data,
                marker: {
                    enabled: null, // auto
                    radius: 3,
                    lineWidth: 1,
                    lineColor: '#FF00FF'
                },
                tooltip: {
                    valueDecimals: 3
                }
            },
            {
                data: [324, 124, 547, 221],
                yAxis: 1,
                tooltip: {
                    valueDecimals: 2
                }
            }
        ],
        plotOptions: {
            column: {
                borderRadius: 5
            }
        },
        yAxis: [
            {
                className: 'highcharts-color-0',
                title: {
                    text: 'Primary axis'
                }
            },
            {
                className: 'highcharts-color-1',
                opposite: true,// ???
                title: {
                    text: 'Secondary axis'
                }
            }
        ],
        xAxis: {
            tickPixelInterval: 120
        },
        scrollbar: {
            barBackgroundColor: 'gray',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'gray',
            buttonBorderWidth: 0,
            buttonArrowColor: 'yellow',
            buttonBorderRadius: 7,
            rifleColor: 'yellow',
            trackBackgroundColor: 'white',
            trackBorderWidth: 1,
            trackBorderColor: 'silver',
            trackBorderRadius: 7
        },
    }
);

```

https://www.highcharts.com/docs/chart-design-and-style/style-by-css
https://codepen.io/TorsteinHonsi/pen/KMNbRN
https://github.com/highcharts/highcharts/blob/master/css/highcharts.scss



```html

<div id="container" style="height: 400px; min-width: 600px; max-width: 800px; margin: 0 auto"></div>


<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>

```



http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/area-basic/


area-basic

```js

Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: `
            Source:
            <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">
                thebulletin.metapress.com
            </a>
        `
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
            // ???
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000]
    }]
});

```



# tooltip

https://api.highcharts.com/highstock/tooltip.formatter

formatter: function


pointFormat: String

https://api.highcharts.com/highstock/tooltip.pointFormat

pointFormatter: function

https://api.highcharts.com/highstock/tooltip.pointFormatter


https://api.highcharts.com/highstock/tooltip.dateTimeLabelFormats

dateTimeLabelFormats

https://api.highcharts.com/highstock/tooltip.dateTimeLabelFormats#Highcharts.dateFormat



```js

{
    millisecond:"%A, %b %e, %H:%M:%S.%L",
    second:"%A, %b %e, %H:%M:%S",
    minute:"%A, %b %e, %H:%M",
    hour:"%A, %b %e, %H:%M",
    day:"%A, %b %e, %Y",
    week:"Week from %A, %b %e, %Y",
    month:"%B %Y",
    year:"%Y"
}

```

headerFormat: String

https://api.highcharts.com/highstock/tooltip.headerFormat


https://api.highcharts.com/highstock/tooltip.footerFormat

footerFormat: String

https://api.highcharts.com/highstock/tooltip.formatter

formatter: function









https://api.highcharts.com/highcharts/yAxis.showEmpty







# 找到了 # api

https://api.highcharts.com/highcharts/series.column.connectNulls

https://api.highcharts.com/highcharts/series.line.connectNulls


> old api , 不能用了!

https://api.highcharts.com/highcharts/#plotOptions.series.connectNulls




https://www.highcharts.com/demo/column-stacked-percent/


```css
.fv-agency-rating-hs-container {
    /* width: 850px; */
    /* height: 275px; */
    /* height: 270px; */
    height: 100%;
    /* max-height: 275px;
    overflow-y: scroll; */
}

```


```js

    yAxis: [
        // yAxis 1
        {
            // x: -50,
            // y: -50,
            min: 0,
            title: {
                text: '',
                // text: 'Total fruit consumption'
            },
            labels: {
                format: '{value}%',// 百分比
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }
    ],
    tooltip: {
        headerFormat: `
            <strong>
                {point.x}
            </strong>
            <br/>
        `,
        pointFormat: `
            <span style="color:{point.color}">\u25CF</span>
            {series.name}: {point.y}<br/>
            <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
        `,
        // 总数/总共/总量/总额/共有/总数
        // {${point.stackTotal ? point.stackTotal : point.y}} ???
        // {point.stackTotal || point.y}
        // {point.stackTotal ? point.stackTotal : point.y}
    },
    // 情节/绘图选项
    plotOptions: {
        // (series) type = column (chart)
        column: {
            // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
            // stacking: 'null',
            stacking: 'percent',// 百分比堆叠柱形图
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    }
    ,
    scrollbar: {
        enabled: true
    },
    series: [
        {
            name: '上调',// type = column (chart)
            // data: [5, 3, 4, 7, 2],
            data: up,
        },
        {
            name: '维持',
            // data: [2, 2, 3, 2, 1],
            data: keep,
        },
        {
            name: '下调',
            // data: [3, 4, 4, 2, 5],
            data: down,
        },
        {
            type:'spline',
            yAxis: 1,
            color:"skyblue",
            name: '平均',
            // data: [3, 4, 4, 2, 5],
            data: average,
            connectNulls: true,// OK null !== 0
        }
    ],
```






# danymic loading module.js


```js
<script src="module.js" data-index="" data-script="" ></script>


```



























