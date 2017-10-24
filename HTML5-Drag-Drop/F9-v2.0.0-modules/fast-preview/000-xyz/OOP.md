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







https://jingyan.baidu.com/article/63f236280a56680209ab3d58.html


```js

// Object

// data-obj="{uid: `007`, name: `hacker`, age: `unkown`, address: `UFO`}"

```


