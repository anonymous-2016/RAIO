// JavaScript 蜘蛛


// https://rollbar.com/docs/

const links = document.querySelectorAll(`ul.image-list a`);

let svg_name_arr = [],
    svg_url_obj = {};

for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('class')) {
        let x = links[i].getAttribute('class');
        let y = links[i].setAttribute('download', `${i}-${x}`.svg)
        svg_name_arr.push(x);
        let img = getComputedStyle(links[i], '::before').getPropertyValue('background-image');
        let newImage = img.replace(/(url\(")|("\))/g,'');
        svg_url_obj[i] = newImage;
    }
}

console.log(`svg_name_arr = \n`, svg_name_arr);

console.log(`svg_url_obj = \n`, svg_url_obj);

/*

https://gist.github.com/xgqfrms-GitHub/3db8891c7ef6f79ea1996f2a4d29f499

#  TODO 

> dynamically create `a/img` & set url & `download` link auto click

```js

// todo
```



*/

/*
add new key to object javascript

https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object

https://stackoverflow.com/questions/11057802/add-new-element-to-an-existing-object

http://pietschsoft.com/post/2015/09/05/JavaScript-Basics-How-to-create-a-Dictionary-with-KeyValue-pairs


https://javascript.info/object
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object



*/










