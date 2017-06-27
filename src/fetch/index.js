let url = `https://raw.githubusercontent.com/gildata/json/master/datas/ntb-F9/csjj-old.json`;

fetch(url)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos = ${repos}`);
    // Object.keys(myArray).length
    console.log(`json.length = ${Object.keys(repos).length}`);
    console.log(`Button = ${repos.ToolBar.Button[0]}`);
    console.log(`Button = ${repos.ToolBar.Button[1]}`);
    // "@name"
    // @json-error.json
    let name = "@name";
    console.log(`name = ${repos.name}`);
});



url = `https://raw.githubusercontent.com/gildata/json/master/datas/ntb-F9/csjj.json`;

fetch(url)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos = ${repos}`);
    // Object.keys(myArray).length
    console.log(`json.length = ${Object.keys(repos).length}`);
    console.log(`Button[0] = ${repos.ToolBar.Button[0]}`);
    console.log(`ToolBar.Button[1].name = ${repos.ToolBar.Button[1].name}`);
    console.log(`ToolBar.Button[1].Captio = ${repos.ToolBar.Button[1].Caption}`);
    console.log(`name = ${repos.name}`);
    console.log(`name = ${repos.caption}`);
    console.log(`ToolBar.Caption = ${repos.ToolBar.Caption}`);
    console.log(`ToolBar.name= ${repos.ToolBar.name}`);
});













url = `https://cdn.xgqfrms.xyz/json/user1.json`;

fetch(url)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`firstName = ${repos.firstName}`);
    console.log(`age = ${repos.age}`);
    console.log(`city = ${repos.address.city}`);
    console.log(`phoneNumber = ${repos.phoneNumber[0].number}`);
    console.log(`repos.length = ${repos.length}`);
});





const data = [
    {"id": "1", "name": "name_1", "parent_id": "0", "depth": "0"},
    {"id": "2", "name": "name_2", "parent_id": "0", "depth": "0"},
    {"id": "3", "name": "name_3", "parent_id": "1", "depth": "1"},
    {"id": "4", "name": "name_4", "parent_id": "3", "depth": "2"}
];

let object = data[0];

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`key = ${key}`);
        let key1 = object.key;
        let key2 = object[key];
        console.log(`object.${key} = ${key1}`);
        console.log(`object[${key}] = ${key2}`);
    }
}


url = `https://cdn.xgqfrms.xyz/json/datalist.json`;

fetch(url)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    let obj_length = Object.keys(json).length;
    console.log(`json length = ${obj_length}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos.length = ${Object.keys(repos).length}`);
    array.forEach(function(element) {
        // 
    }, this);
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`key = ${key}`);
            let key1 = object.key;
            let key2 = object[key];
            console.log(`object.${key} = ${key1}`);
            console.log(`object[${key}] = ${key2}`);
        }
    }
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            // 
            let element = object[key];
            console.log(`object.${key} = ${element}`);
        }
    }
/*error*/
for (let key of object) {
    if (object.hasOwnProperty(key)) {
        // 
        let element = object[key];
        console.log(`object.${key} = ${element}`);
    }
}
for (let key of object) {
    if (object.hasOwnProperty(key)) {
        //
        let element = object.key;
        console.log(`object.${key} = ${element}`);
    }
}



for (let obj of data) {
    console.log(`data.${obj} = ${obj}`);
    for (let key in obj) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key} = ${key}`);
            console.log(`object[${key}] = ${obj[key]}`);
        }
    }
}


/*

// object[Symbol.iterator] is not a function

// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as own (not inherited) property.


obj.hasOwnProperty(prop);





*/
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        
    }
    console.log(`id = ${repos[0].id}`);
    console.log(`name = ${repos[0].name}`);
    console.log(`isParent = ${repos[0].isParent}`);
});




let obj = {a: 1, b: 2, c: 3};

for (var prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}


/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of



The for...of statement creates a loop iterating over iterable objects 
(including Array, Map, Set, String, TypedArray, arguments object and so on), 
invoking a custom iteration hook with statements to be executed for the value of each distinct property.


for...of 语句在可迭代对象
(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环
，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.


let iterable = [10, 20, 30];

for (const value of iterable) {
    console.log(value);
}
// 10
// 20
// 30

let iterable = "boo";

for (let value of iterable) {
    console.log(value);
}
// "b"
// "o"
// "o"

let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
    console.log(value);
}
// 0
// 255


let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
    paragraph.classList.add("read");
}

// Set 对象允许你存储任何类型的唯一值，无论是(原始值或者对象引用)。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set


// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map


// 一个TypedArray 对象描述一个底层的二进制数据缓存区的一个类似数组(array-like)视图。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray








*/


/*

// Object.keys() 方法返回一个给定对象自己的枚举属性的数组，其顺序与 for...in 循环(区别在于，for-in 循环也枚举原型链中的属性)。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// for...in 语句以原始插入顺序迭代一个对象的可枚举属性。 对于每个不同的属性，可以执行语句

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in




数组索引仅是可枚举的整数名，其他方面和别的普通对象属性没有什么区别。
for...in 并不能够保证返回的是按一定顺序的索引，但是它会返回所有可枚举属性，包括非整数名称的和继承的。

因为迭代的顺序是依赖于执行环境的，所以数组遍历不一定按次序访问元素。 
因此当迭代那些访问次序重要的 arrays 时用整数索引去进行 for 循环 (或者使用 Array.prototype.forEach() 或 for...of 循环) 。





// 下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。

var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


// 下面的函数阐述了 hasOwnProperty() 的用法: 隐藏的继承属性将不会被显示。

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
    this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
    if( obj.hasOwnProperty( prop ) ) {
        console.log("o." + prop + " = " + obj[prop]);
    } 
}

// Output:
// "o.color = red"


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


array.forEach(callback(currentValue, index, array){
    //do something
}, this)

array.forEach(callback[, thisArg])

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of



*/




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys


/*

var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


*/
