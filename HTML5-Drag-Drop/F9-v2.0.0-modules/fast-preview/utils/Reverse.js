

/**
 * @description Reverse 逆序 / recurve 反
 * @author xgqfrms
 * 
 * 
 */
let a = [1,2,3,4,5,6,7,8,9],
    l = a.length,
    aa = a.map(
        (key, index) => {
            console.log(`key, index = \n`, key, index);
            let ni = l - 1 - index;
            console.log(`new index = \n`, ni);
            return a[ni];
        }
    );
console.log(`aa = \n`, aa);
// [9, 8, 7, 6, 5, 4, 3, 2, 1]
// aa = a.map((k, i) => a[a.length - 1 - i]);