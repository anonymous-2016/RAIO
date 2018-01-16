# Math


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
https://en.wikipedia.org/wiki/Single-precision_floating-point_format




## round & fround

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround


## float & ceil

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil


```js

Math.fround(68.5500000000002);
// 68.55000305175781
Math.fround(68.5500000000002).toFixed(2);
// "68.55"
(68.5500000000002).toFixed(2);
// "68.55"
(68.9900000000002).toFixed(2);
// "68.99"
(68.4900000000002).toFixed(2);
// "68.49"
(68.5100000000002).toFixed(2);
// "68.51"
Math.floor(68.5100000000002);
// 68
Math.floor(68.4900000000002);
// 68
Math.ceil(68.4900000000002);
// 69
Math.ceil(68.5100000000002);
// 69
Math.round(68.5100000000002);
// 69
Math.round(68.4900000000002);
// 68

```




***


# toFixed()

> Number.toFixed()

> `numObj.toFixed([digits])`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed


```js

(68.5500000000002).toFixed(2);
// "68.55"
(68.9900000000002).toFixed(2);
// "68.99"
(68.4900000000002).toFixed(2);
// "68.49"
(68.5100000000002).toFixed(2);
// "68.51"

```

https://stackoverflow.com/questions/11695618/dealing-with-float-precision-in-javascript

```js

shares = (obj.bl !== undefined) ? parseFloat((obj.bl).toFixed(2)) : `😟 暂无数据`;

```


***


# `parseFloat()` & `parseInt()`

> Global_Objects/parseFloat & Global_Objects/parseInt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt


```js

Math.fround(68.5500000000002).toFixed(2);
// "68.55"

parseFloat(68.5500000000002);
//68.5500000000002


```











