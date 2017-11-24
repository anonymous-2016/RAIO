/**
 * SeekDestroy
 * xgqfrms
 * created 2017.10.14
 * 
 * @param {Array} [arr=[]] 
 * @param {Boolean} [debug=false] 
 * @param {any} args 
 * @returns {Array} [result=[]] 
 */

const SeekDestroy = (arr = [], debug = false, ...params) => {
    let result = [];
    let nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    // arguments ??? & ES2015
    const args = Array.from(...params).slice(2);
    // args = Array.prototype.slice.call(arguments, 0);
    // copy(args);
    if (debug) {
        // console.log(`arguments = `, arguments);
        // VM5141:10 Uncaught ReferenceError: arguments is not defined
        console.log(`nums = `, nums);
        console.log(`...params = `, ...params);
        console.log(`Array.from(...params) = `, Array.from(...params));
        console.log(`args = `, args);
    }
    nums.filter(
        (num, i) => {
            // let finded = args.find((num) => num);
            // find === first_value / undefined
            // let finded = args.indexOf(num);
            // finded === index / -1
            let finded = args.includes(num);
            // true / false
            if (debug) {
                console.log(`num = `, num);
                console.log(`args[${i}] = `, args[i]);
            }
            /*
                finded === undefined
                finded === -1
                finded === false
            */
            if (!finded) {
                // num not in args
                result.push(num);
                // return num;
            } else {
                // num in args
                // return;
                // return null;
            }
            return result;
        }
    );
    return result;
};

// test
SeekDestroy([1, 2, 3, 1, 2, 3], true, [2, 3]);

let debug = true,
    arr = [1, 2, 3, 1, 2, 3],
    args = [2, 3];

SeekDestroy(arr, debug, ...args);



// test
// destroyer(arr, debug, ...args);

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// should return [1].
destroyer([2, 3, 2, 3], 2, 3);
// should return [].
destroyer(["tree", "hamburger", 53], "tree", 53);
// should return ["hamburger"].







let args = [2, 3];
args.includes(1);
// false
args.includes(2);
// true

function func(arr = [], debug = false, ...args) {
    let result = [];
    let nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    // let params = Array.prototype.slice.call(arguments, func.length);
    // func.length === 0 ???
    // let params = Array.prototype.slice.call(arguments, 2);
    // [[2, 3]]
    let params = arguments[2];
    if (debug) {
        console.log(`func.length = `, func.length);
        console.log(`...args = `, ...args);
        console.log(`params = `, params);
        console.log(`arguments = `, arguments);
    }
    nums.filter(
        (num, i) => {
            // let finded = args.find((num) => num);
            // find === first_value / undefined
            // let finded = args.indexOf(num);
            // finded === index / -1
            let finded = params.includes(num);
            // true / false
            if (debug) {
                console.log(`num = `, num);
                console.log(`params = `, params);
                console.log(`params.indexOf(${num}) = `, params[params.indexOf(num)]);
                // console.log(`args[${i}] = `, params[i]);
            }
            /*
                finded === undefined
                finded === -1
                finded === false
            */
            if (!finded) {
                // num not in args
                result.push(num);
                // return num;
            } else {
                // num in args
                // return;
                // return null;
            }
            // return result;
        }
    );
    return result;
}

func(...args);
// [2, 3]



arr = [1, 2, 3, 4, 5];
debug = true;
args = [2, 3];

func([1, 2, 3, 4, 5], true, [2, 3]);
func(arr, debug, ...args);





function destroyer(arr = [], ...args) {
    let result = [];
    let nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    let params = arguments[1];
    nums.filter(
        (num, i) => {
            let finded = params.includes(num);
            if (!finded) {
                // num not in args
                result.push(num);
            } else {
                // num in args
            }
        }
    );
    return result;
}



function destroyer() {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var result = [];
    var nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    var params = arguments[1];
    nums.filter(function(num, i) {
        var finded = params.includes(num);
        if (!finded) {
            // num not in args
            result.push(num);
        } else {
            // num in args
        }
    });
    return result;
}