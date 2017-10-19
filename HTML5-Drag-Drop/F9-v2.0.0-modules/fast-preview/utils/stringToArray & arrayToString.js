

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

