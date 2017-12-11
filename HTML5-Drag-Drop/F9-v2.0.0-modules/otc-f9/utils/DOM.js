// "use-strict";
// webapck & auto add "use-strict";

const DOM_queryAll = (str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
    let results = document.querySelectorAll(str);
    if (debug) {
        if (results) {
            console.log(`result = `, results);
        }else{
            console.log(`Error: result = `, results);
            // []
        }
    }
    return results ? results : ``;
};

const DOM_query = (str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
    let result = document.querySelector(str);
    if (debug) {
        if (result) {
            console.log(`result = `, result);
        }else{
            console.log(`Error: result = `, result);
            // []
        }
    }
    return result ? result : ``;
};

const DOM = (window.DOM ? window.DOM : {
    DOM_query,
    DOM_queryAll
});

/*

    window.DOM;
    // undefined

    var DOM = DOM || {};

*/


export default DOM;
export {DOM_queryAll, DOM_query};

// import {DOM_queryAll, DOM_query} from "./utils/DOM";


