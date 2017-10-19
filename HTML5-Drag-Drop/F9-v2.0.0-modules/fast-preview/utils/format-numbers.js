// format numbers




/**
 * @author xgqfrms
 * @description formatNumbersWithTitle
 * 
 * @param {*} num 
 * @param {*} uid 
 * @param {*} debug 
 */

const formatNumbersWithTitle = (num = 1234567890.001, uid = `[data-uid="fn-num"]`, debug = false) => {
    let fn_str = ``;
    let num_str = num.toString();
    //
    return fn_str;
};







let x = "202000.00";

x = x.slice(0, 3) + "," + x.slice(4);
// "202,00.00"

parseInt(x);
// 202



let x = "1234567890.001";
// "1,234,567,890.001"

x.indexOf(`.`);
// 10

x.slice(10);
// ".001"

x.slice(0, 10);
// "1234567890"





let x = 1234567890.001;
x = x.toString();
// "1234567890.001"


// reverse 反向

// inverse 逆


let a = ['one', 'two', 'three'];
a.reverse(); 

console.log(a); 
// ['three', 'two', 'one']


// String to Array

// slice
// form


var name = "StackOverflow";

function reverseString(str) {
    if(!str.trim() || 'string' !== typeof str) {
        return;
    }
    let l=str.length, s='';
    while(l > 0) {
        l--;
        s+= str[l];
    }
    return s;
}
reverseString(name);


let str = "StackOverflow";

const reverse = (str) => {
    let sl = str.length;
        result = ``;
    for (let i = 0; i <= sl; i++ ){
        result += str.substr(sl-i, 1);
    }
    return result;
};

reverse(str);







let str = "StackOverflow";

const stringToArray = (str) => {
    return str.split(``).reverse(); 
};

stringToArray(str);
// ["w", "o", "l", "f", "r", "e", "v", "O", "k", "c", "a", "t", "S"]

let arr = ["w", "o", "l", "f", "r", "e", "v", "O", "k", "c", "a", "t", "S"];

const arrayToString = (arr) => {
    return arr.reverse().toString().replace(/,/g, ``);
};

arrayToString(arr);
// "StackOverflow"



arr.toString();
// "S,t,a,c,k,O,v,e,r,f,l,o,w"
"S,t,a,c,k,O,v,e,r,f,l,o,w".replace(/,/g, ``);
// "StackOverflow"

/* 

https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript



https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

> str.split([separator[, limit]])


https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Freverse


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

str.substr(start, [length])



*/





