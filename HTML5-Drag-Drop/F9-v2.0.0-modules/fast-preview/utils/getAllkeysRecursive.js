// getAllkeysRecursive.js




const data = {
    "zd": "-2.41",
    "zdf": "-4.47",
    "jnzdf": "9.79",
    "zdf3": "20.81",
    "zdf12": "-9.20",
    "beta": "1.69",
    "details": [
        {
            "sjz": "2017-02-15",
            "gj": 45.05,
            "cjl": 18049212,
            "szzs": 3421.71
        },
        {
            "sjz": "2017-02-08",
            "gj": 44.59,
            "cjl": 12570233,
            "szzs": 3383.29
        },
        {
            "sjz": "2017-03-08",
            "gj": 45.86,
            "cjl": 7564004,
            "szzs": 3448.73
        },
        {
            "sjz": "2016-12-26",
            "gj": 47.65,
            "cjl": 10543532,
            "szzs": 3322.4
        }
    ]
};

// getAllkeysRecursive

/**
 * 
 * @param {* Array / Object} any 
 * @param {* boolean} debug 
 */

const getAllkeysRecursive = (any = {}, debug = false, id = `body`) => {
    // fetch data
    const url = this.window.location.href;
    // http://10.1.5.202/webservice/fastview/stock/stockfast06/600570.SH
    /* 
        this === window;
        // true
        this.window.location.href;
        window.location.href;
        this.location.href;
    */
    let data = {};
    let uid = (id === `body` ? document.querySelector(`body`) : document.querySelector(`#${id}`));
    // let uid = document.querySelector(`#id`);
    fetch(url)
    .then(
        res => res.json()
    )
    .then(
        (json) => {
            // shapde data
            const data = JSON.stringify(json, null, 4);
            return data;
        }
    )
    .catch(
        err => console.log(`An Error Occurred!`, err)
    );
    // handle data
    // return result;
};


// IIFE

(() => {
    // getAllkeysRecursive(obj, true);
})();
















