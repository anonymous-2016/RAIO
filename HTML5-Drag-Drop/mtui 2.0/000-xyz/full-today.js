"use strict";

/**
 * @name get-full-today-date-with-format
 * @author xgqfrms
 * creadted 2018.02.01
 * @param {Boolean} debug
 */

// Utils
const getFullTodayDate = (debug = false) => {
    const date = new Date();
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
        // week_daya = date.getDay();
    // 0 padding
    month = (month > 9) ? month : `0${month}`;
    day = (day > 9) ? day : `0${day}`;
    let today = `${year}-${month}-${day}`;
    if (debug) {
        console.log(`today =`, today, typeof(today));
        if (window.copy) {
            copy(today);
        }else{
            console.log(`Your poor browser doesn't support \`copy()\`, please download Google Chrome! \nhttps://www.google.com/intl/en/chrome/browser/\n`, window.copy);
        }
    }
    return today;
};

export default getFullTodayDate;
export {getFullTodayDate};


/*

getFullTodayDate(true);
// today = 2018-2-1 string
// "2018-2-1"
getFullTodayDate();
// "2018-2-1"

*/
