/**
 * stringToArray & arrayToString
 * xgqfrms
 * created 2017.10.20
 * @param {Boolean} debug 
 */



const stringToArray = (str) => {
    return str.split(``).reverse(); 
};

let str = "StackOverflow";
stringToArray(str);
// ["w", "o", "l", "f", "r", "e", "v", "O", "k", "c", "a", "t", "S"]


const arrayToString = (arr) => {
    // return arr.reverse().toString().replace(/,/g, ``);
    return arr.reverse().join(``);
};

let arr = ["w", "o", "l", "f", "r", "e", "v", "O", "k", "c", "a", "t", "S"];
arrayToString(arr);
// "StackOverflow"


// arr.reverse().join(``);


// a.join(``); === toString().replace(/,/g, ``);

