/**
 * Utils & Invalid_Value_Checker.js
 */


const Invalid_Value_Checker = (key = ``) => {
    let result = ``;
    switch (key) {
        // Number Invalid Value
        case undefined:
            result = null;
            break;
        case null:
        case -1.7976931348623157e+308:
            result = null;
            break;
        // String Invalid Value
        case "--":
            result = `--`;
            break;
        default:
            break;
    }
    return result;
};

// test & examples
// let key1 = undefined,// bad & you should not make undefined as an value, and assign it to a variable
let key1,// not assign value, means variable === undefined
    key2 = null,
    key3 = -1.7976931348623157e+308,
    key4 = `--`;
// Invalid_Value_Checker(key1);// ""
// Invalid_Value_Checker(key1);// still bug ???
window.keyX;
// undefined
Invalid_Value_Checker(keyX);
// Uncaught ReferenceError: keyX is not defined
Invalid_Value_Checker(key2);// null
Invalid_Value_Checker(key3);// null
Invalid_Value_Checker(key4);// "--"

// bug ???
Invalid_Value_Checker(undefined);
// undefined = undefined; // it maybe means (undefined) === (undefined = undefined;)
// key = value;
// ""
undefined = undefined;
// undefined



/**
 * @author xgqfrms
 *
 * @description emptyChcker();
 *
 * @param {String} key
 *
 */
const emptyChecker = (key = ``) => {
    let result = true;
    if (key === undefined) {
        console.log(`key === undefined`, key);
        // no value
        // result = false;
    }else{
        // Invalid Value
        console.log(`key !== undefined`, key);
    }
    switch (key) {
        case undefined:
            result = false;
            break;
        case null:
            result = false;
            break;
        case -1.7976931348623157e+308:
            result = false;// Number Invalid Value
            break;
        default:
            break;
    }
    return result;
};

// test & examples
// let key1 = undefined,// bad & you should not make undefined as an value, and assign it to a variable
let key1,// not assign value, means variable === undefined
    key2 = null,
    key3 = -1.7976931348623157e+308;
// emptyChecker(key1);// true
emptyChecker(key1);// still bug ???
emptyChecker(key2);
emptyChecker(key3);

emptyChecker(undefined);
// true
emptyChecker(null);
// false
emptyChecker(-1.7976931348623157e+308);
// false




/* undefined bug ??? */

let obj = {a: 1, c: 3};
obj.b;
// undefined
emptyChecker(obj.b);
// true
emptyChecker(undefined);
// true

obj.b === undefined;
true

undefined === undefined;
// true

if (obj.b === undefined) {
    console.log(`key === undefined`, obj.b);
}


// 1. `undefined` cannot be as a value assigned to a key!
// 2. `undefined` means, the key doesn't exist at all!
// 3. if make `undefined` as a value, and assign it to a variable, the variable will never be `undefined`!


if (obj.b === undefined) {
    console.log(`key === undefined`, obj.b);
}
// key === undefined undefined
// undefined


let result = true,
    // key = undefined;// bad & you should not make undefined as an value, and assign it to a variable
    key;// not assign value, means variable === undefined
if (undefined === undefined) {
    result = false;
}
// false
if (key === undefined) {
    result = false;
}
// false
