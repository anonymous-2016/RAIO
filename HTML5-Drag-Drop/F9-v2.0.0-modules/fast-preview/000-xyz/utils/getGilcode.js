

/* 



let url_params = decodeURIComponent(window.location.search);
// "?gilcode=600570.SH&skin=white&type=4&name=恒生电子"
let url_params = window.location.search;
// "?gilcode=600570.SH&skin=white&type=4&name=%E6%81%92%E7%94%9F%E7%94%B5%E5%AD%90"

let gilcode = url_params.substr(url_params.indexOf(`=`)+1, url_params.indexOf(`.SH`) - url_params.indexOf(`=`) -1);
// "600570"

gilcode = url_params.substr(url_params.indexOf(`=`)+1, 6);
// "600570"

gilcode = url_params.slice(url_params.indexOf(`=`)+1, url_params.indexOf(`.SH`));
// "600570"

*/

// get Gilcode
const getGilcode = (query_str = `?gilcode=600570.SH`) => {
    let default_url_params = `?gilcode=600570.SH`;
    let url_params = (query_str.length >= 18 && query_str.indexOf(`?gilcode=`) !== -1) ? query_str : default_url_params;
    let gilcode = url_params.substr(url_params.indexOf(`=`)+1, 6);
    // "600570"
    copy(gilcode);
    return gilcode;
};

// IIFE
const gilcode = (
    (query_str = `?gilcode=600570.SH`, debug = false) => {
        let default_url_params = `?gilcode=600570.SH`;
        let url_params = (query_str.length >= 18 && query_str.indexOf(`?gilcode=`) !== -1) ? query_str : default_url_params;
        let result = url_params.substr(url_params.indexOf(`=`)+1, 6);
        // "600570"
        if (debug) {
            console.log(`gilcode =`, result);
        }
        copy(result);
        return result;
    }
)(this.window.location.search, true);


// how to check when the url change?


