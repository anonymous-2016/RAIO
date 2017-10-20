// format numbers



/**
 * @author xgqfrms
 * @description formatNumbersWithTitle
 * @created 2017.10.20
 * @param {* Number} num 
 * @param {* Boolean} debug 
 */


const formatNumbersWithTitle = (num = 1234567890.001, debug = false) => {
    let fn_str = ``,
        num_str = num.toString(),
        len = num_str.length,
        nl = Math.floor(len/3),
        dot = num_str.indexOf(`.`),
        // -1 ???
        float = num_str.slice(dot !== -1 ? dot : len),
        int = num_str.slice(0, (dot !== -1 ? dot : len)),
        int_len = int.length,
        inl = Math.floor(int_len/3),
        result = `${int.substr(0, (int_len % 3 === 0) ? 3 : (int_len % 3))}`,// "12"
        temp = `${int.substr((int_len % 3 === 0 ? 3 : (int_len % 3)), int_len)}`;
        // len % 3 === 0 ??? special case
    if (debug) {
        console.log(`result = `, result);
        console.log(`int = `, int);
        console.log(`float = `, float);
        console.log(`temp = `, temp);
    }
    for (var i = 0; i < inl; i++) {
        if (i !== inl - 1) {
                result += `,${temp.slice(0,3)}`;
        }else{
                result += `,${temp.slice(0,3)}`;
        }
        temp = temp.slice(3);
    }
    fn_str = result + float;
    if (debug) {
        console.log(`result = `, result);
        console.log(`fn_str = `, fn_str);
        // "1,234,567,890.001"
    }
    copy(fn_str);
    return fn_str;
};



/**
 * string to format number ???
 * #TODO
 * 
 * 
 * 
 */




// IIFE
const formatNumber = (
    (num = 1234567890.001, debug = false) => {
        let fn_str = ``,
            num_str = num.toString(),
            len = num_str.length,
            nl = Math.floor(len/3),
            dot = num_str.indexOf(`.`),
            // -1 ???
            float = num_str.slice(dot !== -1 ? dot : len),
            int = num_str.slice(0, (dot !== -1 ? dot : len)),
            int_len = int.length,
            inl = Math.floor(int_len/3),
            result = `${int.substr(0, (int_len % 3 === 0) ? 3 : (int_len % 3))}`,// "12"
            temp = `${int.substr((int_len % 3 === 0 ? 3 : (int_len % 3)), int_len)}`;
            // len % 3 === 0 ??? special case
        if (debug) {
            console.log(`result = `, result);
            console.log(`int = `, int);
            console.log(`float = `, float);
            console.log(`temp = `, temp);
        }
        for (var i = 0; i < inl; i++) {
            if (i !== inl - 1) {
                    result += `,${temp.slice(0,3)}`;
            }else{
                    result += `,${temp.slice(0,3)}`;
            }
            temp = temp.slice(3);
        }
        fn_str = result + float;
        if (debug) {
            console.log(`result = `, result);
            console.log(`fn_str = `, fn_str);
            // "1,234,567,890.001"
        }
        copy(fn_str);
        return fn_str;
    }
)(num = 1234567890.001);




/* 


<div data-uid="fn-num">
        data-uid="fn-num"
</div>

*/










/**
 * @author xgqfrms
 * @description formatNumbersWithTitle
 * @created 2017.10.20
 * 
 * @param {* Number} num 
 * @param {* data-*} uid 
 * @param {* Boolean} debug 
 */

const formatNumbersWithTitle = (num = 1234567890.001, uid = `[data-uid="fn-num"]`, debug = false) => {
    let fn_str = ``,
    num_str = num.toString(),
    len = num_str.length,
    nl = Math.floor(len/3),
    dot = num_str.indexOf(`.`),
    // -1 ???
    float = num_str.slice(dot !== -1 ? dot : len),
    int = num_str.slice(0, (dot !== -1 ? dot : len)),
    int_len = int.length,
    inl = Math.floor(int_len/3),
    result = `${int.substr(0, (int_len % 3 === 0) ? 3 : (int_len % 3))}`,// "12"
    temp = `${int.substr((int_len % 3 === 0 ? 3 : (int_len % 3)), int_len)}`;
    // len % 3 === 0 ??? special case
    if (debug) {
        console.log(`result = `, result);
        console.log(`int = `, int);
        console.log(`float = `, float);
        console.log(`temp = `, temp);
    }
    for (var i = 0; i < inl; i++) {
        result += `,${temp.slice(0,3)}`;
        temp = temp.slice(3);
    }
    fn_str = result + float;
    if (debug) {
        console.log(`result = `, result);
        console.log(`fn_str = `, fn_str);
        // "1,234,567,890.001"
    }
    copy(fn_str);
    return fn_str;
    /* 
        let fn_data = document.querySelector(uid);
        fn_data.setAttribute(`title`, fn_str);
        // undefined
        fn_data.attributes;
        // NamedNodeMap {0: data-uid, 1: title, length: 2}
        fn_data.hasAttribute(`title`);
        // true
        fn_data.getAttribute(`title`);
        // "1,234,567,890,.001"
        fn_data.removeAttribute(`title`);
        // undefined

    */
};






/* 

formatNumbersWithTitle();
result =  1,234,567,890,
float =  .001
fn_str =  1,234,567,890,.001
// "1,234,567,890,.001"

"123456789".indexOf(`.`);
// -1


formatNumbersWithTitle(123456789);
result =  1,234,567,89
float =  
fn_str =  1,234,567,89
// "1,234,567,89"


parseFloat("12,345,678,90.001");
// 12

*/

















let x = "202000.00";

x = x.slice(0, 3) + "," + x.slice(4);
// "202,00.00"
parseInt(x);
// 202


let x = "1234567890.001";
// "1,234,567,890.001"

let dot = x.indexOf(`.`);
// 10
let float = x.slice(10);
// ".001"
let int = x.slice(0, 10);
// "1234567890"


let x = "1234567890.001",
    dot = x.indexOf(`.`),
    float = x.slice(10),
    int = x.slice(0, 10);


let s = "1234567890",// "1,234,567,890"
    l = s.length,
    nl = Math.floor(l/3),// 3
    result = `${s.substr(0, (l % 3 === 0) ? 3 : (l % 3))}`,// "1"
    // temp = `${s.substr((l - nl*3)-1, l)}`;// "234567890"
    temp = `${s.substr((l % 3 === 0 ? 3 : (l % 3)), l)}`;// ??? special case

for (var i = 0; i < nl; i++) {
    result += `,${temp.slice(0,3)}`;
    // "234"
    temp = temp.slice(3);
    // "567890"
}

console.log(`result = `, result);



s = "1234567890",
    l = s.length,
    nl = Math.floor(l/3),
    temp = `${s.substr((l % 3), l)}`;
// -1 ???

s = "1234567890x",
    l = s.length,
    nl = Math.floor(l/3),
    temp = `${s.substr((l % 3), l)}`;

s = "1234567890xy",
    l = s.length,
    nl = Math.floor(l/3),
    temp = `${s.substr((l % 3 === 0 ? 3 : (l % 3)), l)}`;// ??? special case

s = "1234567890xyz",
    l = s.length,
    nl = Math.floor(l/3),
    temp = `${s.substr((l % 3), l)}`;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()


12 % 5 // 2
-1 % 2 // -1
NaN % 2 // NaN
1 % 2 // 1
2 % 3 // 2
-4 % 2 // -0
5.5 % 2 // 1.5






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





