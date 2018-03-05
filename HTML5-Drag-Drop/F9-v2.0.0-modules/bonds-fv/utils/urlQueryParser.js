

// urlQueryParser

/**
 * @author xgqfrms
 * @description URL Query Parser
 * @param {String} url
 * @param {Boolean} debug
 */
const urlQueryParser = (url = ``, debug = false) => {
    // const queryString = url.query;
    // const queryString = url;
    const result = {};
    const queryString = url.substr(url.indexOf(`?`) + 1);
    if (debug) {
        console.log(`url =`, url);
        console.log(`queryString =`, queryString);
    }
    let arr = queryString.split(`&`),
        keys = [],
        values = [];
    arr.map(
        (item, i) => {
            let temp_obj = {};
            let key_index = item.indexOf(`=`),
                // item_length = item.length,
                // value = item.substr(item_length - key_index),
                key = item.substr(0, key_index),
                value = item.substr(key_index + 1);
            keys.push(key);
            values.push(values);
            temp_obj[key] = value;
            Object.assign(result, temp_obj);
        }
    );
    if (debug) {
        console.log(`keys =`, keys);
        console.log(`values =`, values);
        console.log(`result =`, JSON.stringify(result, null, 4));
    }
    return result;
};

const url = `http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666`;

// window.parent.location;

// window.parent.location.href;
// "http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666"

// window.parent.location.search;
// "?skin=black&gilcode=600570&uid=666"

urlQueryParser(url);


// urlQueryParser(`http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666`);




