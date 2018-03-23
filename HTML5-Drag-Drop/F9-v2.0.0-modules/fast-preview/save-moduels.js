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
// window.STOCK_UCODE = 43003;

// string is OK
// url = `http://222.73.146.144/user/manager?type=1&pid=10005&ucode=${window.STOCK_UCODE}`;
// "http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003"

// common config
const options = {
    uip: `http://222.73.146.144`,// IP ??? CORS
    path: `/user/manager`,
    type: 1,
    pid: 10005,// stock f9
    ucode: window.STOCK_UCODE,
};

const getModules = (options = {}) => {
    const {uip, path, type, pid} = options;
    const url = `${uip}${path}?type=${type}&pid=${pid}&ucode=${ucode}`;
    // initial get
    // http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003
    let result = {};
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(`fetch json =`, json);
        try {
            if (json && json.items) {
                if (json.items.length > 0) {
                    // result.id = json.items[0].id;
                    // result.pid = json.items[0].pid;
                    // result.name = json.items[0].name;
                    // result.value = json.items[0].value;
                    const {id, pid, name, value} = json.items[0];
                    result = {id, pid, name, value};
                }else{
                    // initial
                    // this.setModules();
                    const initial_modules = {
                        left: [],
                        right: []
                    };
                    let initial_values = encodeBase64(initial_modules);
                    let set_url = `${url}&${initial_values}`;
                    // http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003
                    // http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43003&name=默认配置&value=test
                    setModules(set_url);
                }
            }else{
                // no items
            }
        } catch (error) {
            console.log(`json error =`, error)
        }
    })
    .catch(err => console.log(`fetch error =`, err));
    return result;
};


// http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43003
                    // http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43003&name=默认配置&value=test
const setModules = (url = {}) => {
    result = ``;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(`fetch json =`, json);
        // {
        //     "flag": "true",
        //     "msg": "18094"
        // }
        try {
            if (json) {
                if (json.flag && json.msg) {
                    const {flag, msg} = json;
                    result = msg;
                }else{
                    // initial faild
                }
            }else{
                // faild
            }
        } catch (error) {
            console.log(`json error =`, error)
        }
    })
    .catch(err => console.log(`fetch error =`, err));
    return result;
};

// const setModules = (options = {}) => {
//     const {uip, path, type, pid} = options;
//     const url = `${uip}${path}?type=${type}&pid=${pid}&ucode=${ucode}`;
//     // http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43003&name=default&value=test
//     // http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43003&name=默认配置&value=test
//     // {
//     //     "flag": "true",
//     //     "msg": "18094"// id
//     // }
// };

const updateModules = (options = {}) => {
    const {uip, path, type, pid} = options;
    const url = `${uip}${path}?type=${type}&pid=${pid}&ucode=${ucode}`;
};



let modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};
// serialize / serialization 序列化







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




