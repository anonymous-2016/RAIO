"use strict";

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
    formatArray.map((key, i) => (i < 2) ? formatResult += `${key}-` : formatResult += `${key}`);
    // formatArray.map(
    //     (key, i) => {
    //         (i < 2) ? formatResult += `${key}-` : formatResult += `${key}`;
    //         // "2018-02-24-" => "2018-02-24"
    //     }
    // );
    if (debug) {
        console.log(`formatResult =`, formatResult);
    }
    return formatResult;
};

getCustomizeFormatDate();
// "2018-02-24"
getCustomizeFormatDate(true);
// formatResult = 2018-02-24

export default getCustomizeFormatDate;

export {getCustomizeFormatDate};
