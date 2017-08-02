# Form







'form.validateFields' is missing in props validation (react/prop-types)




```jsx



e.preventDefault();
e.stopPropagation();
e.nativeEvent.stopImmediatePropagation();



```

# Object.keys()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

> Object.keys(obj) / Object.keys(arr)

```js


let abc = {a: "a", b: "b", c: "c"};
console.log(Object.keys(abc));
// (3) ["a", "b", "c"]

let xyz = {x: "xxx", y: "yyy", z: "zzz"};
console.log(Object.keys(xyz));
// (3) ["x", "y", "z"]


// array like object with random key ordering
let anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); 
// ['2', '7', '100']


// 类数组 对象, 随机 key 排序 
let anObj = { 100: 'a', 2: 'b', 7: 'c' }; 

console.log(Object.keys(anObj)); 
// ['2', '7', '100']


/* getFoo 是个不可枚举的属性 */ 

let my_obj = Object.create(
    {}, 
    {
        getFoo: {
            value: function() {return this.foo;}
        }
    }
);

my_obj.foo = 1;

console.log(Object.keys(my_obj)); 
// ["foo"]

console.log(my_obj);
// {foo: 1, getFoo: ƒ}

``` 


# Array.some()

> arr.some(callback[, thisArg])

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some

```jsx
// testing function
const isBiggerThan10 = (element, index, array) => {
    let result = false;
    // console.log(array);
    if(element > 10){
        console.log(array);
        console.log(`index`, index);
        console.log(`element`, element);
        result = true;
    }
    if(!result){
        console.log(`this array has no true result! \n`, array);
    }
    // map
    return result;
};

let arr1 = [2, 5, 8, 1, 4];
arr1.some(isBiggerThan10);  
// false

let arr2 = [12, 5, 8, 1, 4];
arr2.some(isBiggerThan10); 
// true


let arr3 = [12, 5, 18, 1, 14];
arr3.some(isBiggerThan10); 
// index 0
// element 12
// true


let arr4 = [2, 5, 18, 1, 14];
arr3.some(isBiggerThan10); 
// index 0
// element 12
// true

// this array has no true result! 
// (5) [2, 5, 18, 1, 14]
// this array has no true result! 
// (5) [2, 5, 18, 1, 14]

// index 2
// element 18
// true
```

# Array.some() 实现的是非贪心算法(Regex: Regular Expression)，只要找到一个 true 就立即返回，不再向后面搜索了！

