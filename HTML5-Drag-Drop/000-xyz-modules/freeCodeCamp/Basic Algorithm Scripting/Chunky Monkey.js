/**
 * xgqfrms
 * created 2017/10/13
 * @param {* Aray} arr 
 * @param {* Number} size 
 */

const chunkArrayInGroups = (arr=[], size=1) => {
    let result = [];
    let al = arr.length;
    let k = Math.ceil(al/size);
    for (let i = 0; i < k; i++) {
        let a = arr.slice(0, size);
        arr = arr.slice(size);
        console.log(`a = `, a);
        console.log(`arr = `, arr);
        result.push(a);
    }
    console.log(`result = `, result);
    return result;
};


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8], size = 4;

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].






