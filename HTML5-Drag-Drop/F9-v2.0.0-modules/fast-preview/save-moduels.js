// serialization encodeURIComponent Base64
const encodeBase64 = (modules = {}) => {
    let serialize = ``;
    serialize = encodeURIComponent(JSON.stringify(modules));
    return window.btoa(`${serialize}`);
};

const decodeBase64 = (serialize = ``) => {
    let unserialize = ``;
    unserialize = window.atob(`${serialize}`);
    return JSON.parse(decodeURIComponent(unserialize));
};


window.STOCK_UCODE = "43003";
window.STOCK_UCODE = parseInt(window.STOCK_UCODE);

// counter = 0;

window.STOCK_ModuleID = ``;

// common config
const options = {
    uip: `http://222.73.146.144`,// IP ??? CORS
    path: `/user/manager`,
    type: 1,
    get_type: 1,
    update_type: 3,
    init_type: 4,
    pid: 10005,// stock f9
    ucode: window.STOCK_UCODE,
    dafault_name: `默认配置`,
    // dafault_value: ``,
};

const getModules = (options = {}, debug = false) => {
    const {uip, path, type, pid, ucode} = options;
    const url = `${uip}${path}?type=${type}&pid=${pid}&ucode=${ucode}`;
    if (debug) {
        console.log(`get url =`, url);
    }
    // initial get
    let result = {};
    fetch(url)
    .then(res => res.json())
    .then(json => {
        try {
            if (debug) {
                console.log(`fetch json =`, json);
            }
            if (json && json.items) {
                if (json.items.length > 0) {
                    const {id, pid, name, value} = json.items[0];
                    result = {id, pid, name, value};
                    window.STOCK_ModuleID = id;
                    console.log(`getModules OK`);
                }else{
                    console.log(`getModules bad`);
                    // initial
                    const initial_type = 4;
                    const initial_name = `默认配置`;
                    const initial_modules = {
                        left: [],
                        right: []
                    };
                    let initial_values = encodeBase64(initial_modules);
                    // "JTdCJTIybGVmdCUyMiUzQSU1QiU1RCUyQyUyMnJpZ2h0JTIyJTNBJTVCJTVEJTdE"
                    let set_url = `${uip}${path}?type=${initial_type}&pid=${pid}&ucode=${ucode}&name=${initial_name}&value=${initial_values}`;
                    result = setModules(set_url, debug);
                    // true /false
                }
            }else{
                // no json.items
            }
            if (debug) {
                console.log(`get result =`, result);
            }
            return result;
        } catch (error) {
            console.log(`json error =`, error)
        }
    })
    .catch(err => console.log(`fetch error =`, err));
};


const setModules = (url = {}, debug = false) => {
    if (debug) {
        console.log(`set url =`, url);
    }
    let result = `false`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        try {
            if (debug) {
                console.log(`fetch json =`, json);
            }
            if (json) {
                if (json.flag && json.msg) {
                    const {flag, msg} = json;
                    result = flag;
                    window.STOCK_ModuleID = msg;
                }else{
                    // initial faild
                }
            }else{
                // faild
            }
            if (debug) {
                console.log(`set result =`, result);
            }
            return result;
        } catch (error) {
            console.log(`json error =`, error)
        }
    })
    .catch(err => console.log(`fetch error =`, err));
};

const updateModules = (options = {}, modules = {left: [], right: []}, name = ``, id = ``, debug = false) => {
    const {
        uip,
        path,
        type,
        pid,
        ucode,
        update_type,
        dafault_name
    } = options;
    let update_id = id ? id : window.STOCK_ModuleID,
        update_name = name ? name : dafault_name,
        update_values = encodeBase64(modules);
    const url = `${uip}${path}?type=${update_type}&pid=${pid}&ucode=${ucode}&id=${update_id}&name=${update_name}&value=${update_values}`;
    if (debug) {
        console.log(`update url =`, url);
    }
    let result = `false`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        try {
            if (debug) {
                console.log(`fetch json =`, json);
            }
            if (json) {
                if (json.flag && json.msg) {
                    const {flag, msg} = json;
                    result = flag;
                }else{
                    // update faild
                }
            }else{
                // faild
            }
            return result;
        } catch (error) {
            console.log(`json error =`, error)
        }
    })
    .catch(err => console.log(`fetch error =`, err));
};



let modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};
// serialize / serialization 序列化



// getModules(options, true);
// updateModules(options, modules, `name666默认配置`, window.STOCK_ModuleID, true);

// params order

// http://222.73.146.144/user/manager?type=3&pid=10005&ucode=43003&id=18094&name=name666默认配置&value=JTdCJTIybGVmdCUyMiUzQSU1QiUyMnN0b2NrZmFzdDAxJTIyJTJDJTIyc3RvY2tmYXN0MDQlMjIlMkMlMjJzdG9ja2Zhc3QwNyUyMiUyQyUyMmJ1bGxldGlvbiUyMiUyQyUyMnJlc2VhcmNoJTIyJTJDJTIyc3RvY2tmYXN0MDglMjIlMkMlMjJzdG9ja2Zhc3QwOSUyMiUyQyUyMnN0b2NrZmFzdDExJTIyJTVEJTJDJTIycmlnaHQlMjIlM0ElNUIlMjJzdG9ja2Zhc3QwMSUyMiUyQyUyMnN0b2NrZmFzdDA0JTIyJTJDJTIyc3RvY2tmYXN0MDclMjIlMkMlMjJidWxsZXRpb24lMjIlMkMlMjJyZXNlYXJjaCUyMiUyQyUyMnN0b2NrZmFzdDA4JTIyJTJDJTIyc3RvY2tmYXN0MDklMjIlMkMlMjJzdG9ja2Zhc3QxMSUyMiU1RCU3RA==


/*



// initial get
http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003


{
    "eid": 10005,
    "items": [

    ]
}


// create

http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43003&name=默认配置&value=

{
    "flag": "true",
    "msg": "18094"
}

// get

http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003

{
    "eid": 10005,
    "items": [
        {
            "id": "18094",
            "pid": "10005",
            "name": "默认配置",
            "value": "test",
            "child": [

            ]
        }
    ]
}


// update

http://222.73.146.144/user/manager?type=3&pid=10005&ucode=43003&name=default&value=test
http://222.73.146.144/user/manager?type=3&pid=10005&ucode=43003&name=默认配置&value=test&id=12345

{
    "flag": "false",
    "msg": "must contains item id"
}

{
    "flag": "false",
    "msg": "does't contains the item"
}


http://222.73.146.144/user/manager?type=3&pid=10005&ucode=43003&name=默认配置&value=test&id=18094
http://222.73.146.144/user/manager?type=3&pid=10005&ucode=43003&name=default&value=test&id=18094

{
    "eid": 10005,
    "items": [
        {
            "id": "18094",
            "pid": "10005",
            "name": "default",
            "value": "test",
            "child": [

            ]
        }
    ]
}

*/




