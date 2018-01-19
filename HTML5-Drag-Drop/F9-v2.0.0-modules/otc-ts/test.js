"use strict";

require("babel-polyfill");
// import "babel-polyfill";

const json = {
    "id872352": {
        "gpjs": "12",
        "zqdm": "872352",
        "zqjc": "开元新材",
        "sshy": "非金属矿物制品业",
        "zbqs": "长江证券",
        "mgsy": "0.03",
        "mgjzc": "1.07",
        "jlrtbzz": "0",
        "jzcsyl": "0.03",
        "zgb": "27000000",
        "ltgb": "0"
    },
    "id872379": {
        "gpjs": "12",
        "zqdm": "872379",
        "zqjc": "网域科技",
        "sshy": "软件和信息技术服务业",
        "zbqs": "开源证券",
        "mgsy": "--",
        "mgjzc": "--",
        "jlrtbzz": "--",
        "jzcsyl": "--",
        "zgb": "--",
        "ltgb": "--"
    }
};
const debug = true;
let json_keys = [],
    json_values = [];
alert("es5");
json_keys = Object.keys(json).sort();
json_values = Object.values(json);
alert(`es6`);
if (debug) {
    console.log(`json = \n`, json);
    console.log(`json_keys = \n`, json_keys);
    console.log(`json_values = \n`, json_values);
}
