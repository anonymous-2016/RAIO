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
                }else{
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
                }else{
                    // initial faild
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

const updateModules = (options = {}, modules = {left: [], right: []}, id = ``, name = ``, debug = false) => {
    const {
        uip,
        path,
        type,
        pid,
        ucode,
        update_type,
        dafault_name
    } = options;
    let update_name = name ? name : dafault_name,
        update_values = encodeBase64(modules);
    const url = `${uip}${path}?type=${update_type}&pid=${pid}&ucode=${ucode}&id=${id}&name=${update_name}&value=${update_values}`;
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

// ucode=4300000003 ??? write id

// getModules(options, true);
// updateModules(options, modules, 18109, `name = 默认配置`, true);






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




