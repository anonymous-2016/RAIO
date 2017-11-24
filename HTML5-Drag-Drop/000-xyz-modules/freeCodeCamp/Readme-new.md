# free code camp


https://www.freecodecamp.org/challenges/

https://ide.c9.io/xgqfrms/freecodecamp







https://github.com/freeCodeCamp
https://github.com/freeCodeCamp/testable-projects-fcc

https://codepen.io/freeCodeCamp/full/rLJZrA
https://codepen.io/freeCodeCamp/full/eZGMjp
https://codepen.io/freeCodeCamp/full/aNyxXR




https://www.bing.com/
https://www.bing.com/?intlF=


https://babeljs.io/repl/

https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyA&debug=true&circleciRepo=&evaluate=true&lineWrap=true&presets=es2015%2Creact%2Cstage-0%2Cenv&targets=Electron-1.5%252CNode-7.4&version=6.26.0


# java

https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html

```java

public class Echo {
    public static void main (String[] args) {
        for (String s: args) {
            System.out.println(s);
        }
    }
}

```









## arguments & Array methods

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_.E6.96.B9.E6.B3.95


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find

> find() 方法返回数组中满足提供的`测试函数`的第一个元素的值。否则返回 undefined。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

> indexOf()方法返回在数组中可以找到一个给定元素的`第一个索引`，如果不存在，则返回-1。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

> includes() 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true 或 false。



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

## [begin, end)

> The slice() method returns a `shallow copy` of a portion of an array into a new array object selected from begin to end (end not included). 
> The original array will not be modified.

```js

nums = [1, 2, 3, 1, 2, 3];
// (6) [1, 2, 3, 1, 2, 3]
nums = nums.slice(2);
// (4) [3, 1, 2, 3]


```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

> The Array.from() method creates a new Array instance from an array-like or iterable object.

```js

obj = {
    key1: 111,
    key2: 222,
    key3: 333
};
arr = Array.from(obj);
// []

str = `key1, key2, key3`;
arr = Array.from(str);
// (16) ["k", "e", "y", "1", ",", " ", "k", "e", "y", "2", ",", " ", "k", "e", "y", "3"]


str_arr = [`key1`, `key2`, `key3`];
arr = Array.from(str);
// (3) ["key1", "key2", "key3"]

```





# OK

```js


/**

 * @description destroye
 * @author xgqfrms
 * @param {any} arr 
 * @param {any} args 
 * @returns  
 */

function destroyer(arr, ...args) {
    let result = [];
    let nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    // let params = arguments[1];
    let params = Array.prototype.slice.call(arguments, 1);
    nums.filter(
        (num, i) => {
            let finded = params.includes(num);
            if (!finded) {
                // num not in args
                result.push(num);
            } else {
                // num in args
            }
        }
    );
    return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


```































































