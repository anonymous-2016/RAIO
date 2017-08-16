/**
 * debug module
 * xgqfrms
 * 2017.08.08
 */

const xyz_debug = (value=true) => {
    if(value !== true){
        return false; 
    }
    return value;
};


/* 
TODO: process.env.NODE_ENV

https://nodejs.org/api/process.html

// Windows:
SET NODE_ENV=development

// Linux:
export NODE_ENV=development

*/
// Dev: open debug
const debug = true;

// Prod: close debug
// const debug = false;

export {debug, xyz_debug};
export default debug;

