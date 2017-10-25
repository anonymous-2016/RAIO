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