"use strict";

/**
 * @author xgqfrms 2017-12-13
 * @license MIT
 * @description UserConsoleError
 *
 * @param {*Object } error
 *
 */

import * as CSS from "./console_css";


const UserConsoleError = (error = {}, url = ``) => {
    console.log(`%ccatch error = \n`, CSS.css0, JSON.stringify(error, null, 4));
    console.log(`%ccatch error.name = \n`, CSS.css1, error.name);
    console.log(`%ccatch error.message = \n`, CSS.css2, error.message);
    console.log(`%ccatch error.fileName = \n`, CSS.css3, error.fileName, url);
    console.log(`%ccatch error.lineNumber = \n`, CSS.css4, error.lineNumber);
};

export default UserConsoleError;
export {UserConsoleError};


/*

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";


try {
    let message = `handle json error!`,
        fileName = `latest-transaction-data.js`,
        lineNumber = 29;
    throw new UserException(message, fileName, lineNumber)
} catch (error) {
    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/latest-transaction-data.js`;
    ConsoleError(err, url);;
}


*/

