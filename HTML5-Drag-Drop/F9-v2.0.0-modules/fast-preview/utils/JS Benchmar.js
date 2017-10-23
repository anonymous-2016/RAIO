// JS Benchmark


// https://jsperf.com/fast-array-foreach


// Populate the base array
const arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = i;
}

const someFn = (i) => {
    let result = i * 3 * 8;
    console.log(`result = ${result}`);
    return result;
};


console.time(`forEach 计时器`);
arr.forEach((item) => {
    someFn(item);
})
console.timeEnd(`forEach 计时器`);
// forEach 计时器: 2481.920166015625ms


let len = arr.length;
console.time(`for 计时器`);
for (let i = 0; i < len; i++) {
    someFn(arr[i]);
}
console.timeEnd(`for 计时器`);
// for 计时器: 2143.621826171875ms



/* 


// OK
// console.time('计时器');
// console.timeEnd('计时器');



// Bad
// console.time('计时器 begin');
// console.timeEnd('计时器 end');


*/








// avarage ???



console.time(`for 计时器`);
for (let i = 0; i < 10000; i++) {
    let result = i ** 3;
    console.log(`result = ${result}`);
}
console.timeEnd(`for 计时器`);
// for 计时器: 1744.241943359375ms




const a = [];
for (let i = 0; i < 10000; i++) {
    a[i] = i;
}
console.time(`forEach 计时器`);
a.forEach((i) => {
    let result = i ** 3;
    console.log(`result = ${result}`);
})
console.timeEnd(`forEach 计时器`);
// forEach 计时器: 2139.04296875ms








// js console 性能测试

/* 


http://www.jb51.net/article/64971.htm

console.trace()用来追踪函数的调用过程。

对于前端开发人员，在开发过程中经常需要监控某些表达式或变量的值，如果使用用 debugger 会显得过于笨重，最常用的方法是会将值输出到控制台上方便调试。


console.table(people);


console.time()和console.timeEnd()

console.time('计时器');
for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {}
}
console.timeEnd('计时器');



console.profile()
借助控制台以及console.profile()方法我们可以很方便地监控运行性能。

console.profile('性能分析');
// parent();
console.profileEnd();

*/















