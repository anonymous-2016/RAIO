/**
 * @author xgqfrms
 * @namespace STOCK_F9_FV
 * @subnamespace STOCK_F9_FV.Utils
 * @name getURL
 * @created 2017.11.12
 * 
 * @description 
 * @param {* Object} gil_obj 
 * @param {* Boolean} debug 
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.getURL = STOCK_F9_FV.Utils.getURL || ((gil_obj = {
    protocol: "",
    ip: "",
    gil_path: "",
    gil_uid: "",
    gil_code: "",
}, debug = false) => {
    if (debug) {
        console.log(`gil_obj = \n`, JSON.stringify(gil_obj, null, 4));
    }
    const init_keys = ["protocol", "ip", "gil_path", "gil_uid"];
    if(Object.keys(gil_obj).length === 5){
        // ??? gil_code
        init_keys.push("gil_code");
        // const init_keys = ["protocol", "ip", "gil_path", "gil_uid", "gil_code"];
    }
    const {
        protocol,
        ip,
        gil_path,
        gil_uid,
        gil_code
    } = gil_obj;
    // {...gil_obj}
    let keys = Object.keys(gil_obj);
    // let values = Object.values(gil_obj);
    init_keys.forEach(
        (key, i) => {
            // console.log(`index = ${i}`, `key = ${key}`, `value = ${gil_obj[key]}!`);
            if (keys.includes(key)) {
                if (gil_obj[key] === undefined || gil_obj[key] === "" ) {
                    if (gil_obj[key] === "") {
                        console.log(`%c You passed the ${i+1} param ${key}'s value is `, `color: red`, `""!`);
                    } else {
                        console.log(`%c You passed the ${i+1} param ${key}'s value is`, `color: red`, `${gil_obj[key]}!`);
                    }
                }else{
                    // 
                }
            }else{
                // let index = init_keys.indexOf(key);
                console.log(`%c You missed the ${i+1} param `, `color: red`, `${key}!`);
            }
        }
    );
    let url = `${protocol}://${ip}/${gil_path}/${gil_uid}`;
    if (gil_code !== undefined) {
        // url = `${protocol}://${ip}/${gil_path}/${gil_uid}/${gil_code}`;
        url += `/${gil_code}`;
    }
    if (debug) {
        console.log(`url =`, url);
    }
    return url;
});


// url

/* 
// http://localhost:3000/fast-preview/json/datas/2.json
const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;

const gil_obj = {
    protocol: "http",// "https"
    ip: "10.1.5.202",
    gil_path: "webservice/fastview/stock",
    gil_uid: "stockfast01",
    gil_code: "600570.SH", // no ???
};

const {protocol, ip, gil_path, gil_uid, gil_code} = {
    protocol: "http",
    ip: "10.1.5.202",
    gil_path: "webservice/fastview/stock",
    gil_uid: "stockfast01",
    gil_code: "600570.SH"
};
const gil_obj = {
    protocol,
    ip,
    gil_path,
    gil_uid,
    gil_code
};

const url = STOCK_F9_FV.Utils.getURL(gil_obj, true);
// const url = STOCK_F9_FV.Utils.getURL({protocol, ip, gil_path, gil_uid, gil_code});


*/



// export STOCK_F9_FV.Utils.getURL;
// module.exports = STOCK_F9_FV.Utils.getURL;

/* 

    $(".figcaption").each(function(i){
        var divH = $(this).height();
        var $p = $("p", $(this)).eq(0);
        while ($p.outerHeight() > divH) {
            $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        };
    });

    let mds = document.querySelectorAll(`[data-fv-td="fv-td-figcaption"]`);
    mds.forEach(
        (md, i) => {
            let divH = mds[0].lastChild.data.length;
            // 68
            // ??? max - length  & repalce
            // ??? zh-Hans & en-US
        }
    );


*/