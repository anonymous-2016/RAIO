/**
 * Today & AutoCopy
 * xgqfrms
 * created 2017/10/13
 * @param {Boolean} debug 
 */


const Today = (debug = false) => {
    let date = new Date().toLocaleString();
    // "2017/10/13 下午2:34:02"
    let today = date.substr(0,10);
    // "2017/10/13"
    if (debug) {
        console.log(`date = \n`, date);
        console.log(`today = \n`, today);
    }
    // Chrome auto copy
    copy(today);
    return today;
};

// test
(() => Today())();


