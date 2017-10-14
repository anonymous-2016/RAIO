
/**
 * xgqfrms
 * created 2017/10/13
 * @param {* Aray} arr 
 * @param {* Number} size 
 */

const Mutations = (arr = [], debug = false) => {
    // debug = true;
    let result = true;
    let al_first = arr[0].length,
        al_second = arr[1].length,// enum all value
        arr_first = arr[0].toLowerCase(),// ignore Capital Case
        arr_second = arr[1].toLowerCase();// ? regex /()/ig
    for (let i = 0; i < al_second; i++) {
        let value = arr_first.indexOf(arr_second[i]);
        // `===` is much better than `!==`, in this case / situation
        if (value === -1) {
            result = false;
            if (debug) {
                console.log(`value = -1 \n`, i, arr_second[i]);
            }
            break;
        }else{
            // do nothing!
        }
    }
    if (debug) {
        console.log(`result = `, result);
    }
    copy(result);
    return result;
};


// test 

let arr = ["hello", "Hello"], debug = true;
Mutations(arr, debug);



Mutations(["hello", "hey"]);
// should return false.
Mutations(["hello", "Hello"]);
// should return true.
Mutations(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// should return true.
Mutations(["Mary", "Army"]);
// should return true.
Mutations(["Mary", "Aarmy"]);
// should return true.
Mutations(["Alien", "line"]);
// should return true.
Mutations(["floor", "for"]);
// should return true.
Mutations(["hello", "neo"]);
// should return false.
Mutations(["voodoo", "no"]);
// should return false.











