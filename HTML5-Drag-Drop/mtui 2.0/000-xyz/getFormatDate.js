"use strict";

/**
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms.xyz
 * @description zero padding problems & getFormatDate
 *
 * @param {Boolean} debug
 */

const getFormatDate = (debug = false) => {
    let todayDate = new Date(),
        // Sat Feb 24 2018 09:24:46 GMT+0800 (中国标准时间)
        formatYear = ``,
        formatMonth = ``,
        formatDate = ``,
        formatDay = ``,
        formatResult = ``;
    formatYear = todayDate.getFullYear();
    // 2018 (no thousand years bug!)
    //Year 2000 Problem /  Millennium Bug & Year 2000 === Y2K
    // 世纪/千禧年
    formatMonth = todayDate.getMonth() < 9 ? `0${todayDate.getMonth() + 1}` : todayDate.getMonth() + 1;
    // 1 (need + 1)
    formatDay = todayDate.getDay();
    // 6 (week)
    formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
    // 24 (zero padding ???)
    formatResult = `${formatYear}-${formatMonth}-${formatDate}`;
    return formatResult;
};

getFormatDatex();
// "2018-02-24"


// "use strict";

/**
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms.xyz
 * @description zero padding problems & getCustomizeFormatDate
 *
 * @param {Boolean} debug
 */

const getCustomizeFormatDate = (debug = false) => {
    let formatDate = new Date(),
        formatArray = [],
        formatResult = ``;
    formatArray = formatDate.toLocaleDateString().split(`/`).map(
        (key, index) => {
            if (key.length < 2) {
                console.log(`key = `, key);
                switch (index) {
                    case 1:
                        console.log(`Month = `, key);
                        break;
                    case 2:
                        console.log(`Date = `, key);
                        break;
                    default:
                        break;
                }
                key = key.toString().padStart(2, "0");
                // key = `0${key}`;
            } else{
                key = key.toString().padStart(2, "0");
                // key = key.toString();
                // key = `${key}`;
            }
            return key;
        }
    );
    // ["2018", "02", "24"]
    formatArray.map((key, i) => (i < 2) ? formatResult+= `${key}-` : formatResult+= `${key}`);
    // formatArray.map(
    //     (key, i) => {
    //         (i < 2) ? formatResult+= `${key}-` : formatResult+= `${key}`;
    //         // "2018-02-24-" => "2018-02-24"
    //     }
    // );
    if (debug) {
        console.log(`formatResult =`, formatResult);
    }
    return formatResult;
};

getCustomiseFormatDate();
// "2018-02-24"
getCustomiseFormatDate(true);
// formatResult = 2018-02-24










// *********************************************************************************************************


let formatDate = new Date();

formatDate.toLocaleDateString(); //获取当前日期
// "2018/2/24"

formatDate.toLocaleTimeString(); //获取当前时间
// "上午9:24:46"

formatDate.toDateString();
// "Sat Feb 24 2018"

formatDate.toLocaleDateString().replace(/\//ig,`-`);// format date
// "2018-2-24"

// "2018-2-24" => "2018-02-24" ??? zero padding problems






let formatDate = new Date();

formatDate.toLocaleDateString().replace(/\//ig,`-`);
// "2018-2-24"
formatDate.toLocaleDateString().split(`/`);
// (3) ["2018", "2", "24"]

formatDate.toLocaleDateString().split(`/`).map(
    (key, index) => {
        if (key.length < 2) {
            console.log(`key = `, key);
            switch (index) {
                case 1:
                    console.log(`Month = `, key);
                    break;
                case 2:
                    console.log(`Date = `, key);
                    break;
                default:
                    break;
            }
            key = key.toString().padStart(2, "0");
            // key = `0${key}`;
        } else{
            key = key.toString().padStart(2, "0");
            // key = key.toString();
            // key = `${key}`;
        }
        return key;
    }
);

// ["2018", "02", "24"]


s = ``;
["2018", "02", "24"].map(
    (k, i) => {
        i < 2 ? s+= `${k}-` : s+= `${k}`;
    }
);
// "2018-02-24-" => "2018-02-24"

let formatResult = ``;

formatResult = `${formatYear}-${formatMonth}-${formatDate}`;


// string to array & str.split(" ");

"2018,2,24".split(`,`);
// (3) ["2018", "2", "24"]

"2018/2/24".split(`/`);
// (3) ["2018", "2", "24"]
"2018/2/24".split(`\/`);
// (3) ["2018", "2", "24"]


/*

    str.padStart(targetLength [, padString])

    str.padEnd(targetLength [, padString])

*/

'7'.padStart(2, "0");
// "07"
'10'.padStart(2, "0");
// "10"

'7'.padEnd(2, "0");
// "70"
'12'.padEnd(2, "0");
// "12"


/*


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat



*/
