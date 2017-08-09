// search module


import {debug} from '../../app/debug.jsx';

import {color} from '../../app/color.jsx';


// api url
const url = `http://localhost:7777/datas/`;

export const getUserId = (uid) => {
    let new_url = `${url}?uid=${uid}`;
    return fetch(new_url, {
        method: 'GET'
    }).then(
        (response) => response.json()
    ).then(
        (json) => {
            if(debug){
                console.log(`get id data`, json);
                console.log(`get id data json[0]`, json[0]);
                // maps array data
                console.log(`get id data, json.length`, json.length);
            }
            return json;
        }
    );
};

export const getAll = () => {
    return fetch(url, {
        method: 'GET'
    }).then(
        (response) => response.json()
    ).then(
        (json) => {
            if(debug){
                console.log(`get id data`, json);
                // array objects
                console.log(`get id data, json.length`, json.length);
                return json;
                // ??? Promise
            }
        }
    );
};


// test

/* 

getid(17);
getAll();

*/


/*

const search_obj = {uid, uname, lname, utype, email, pnum, vdate, activation};

// 解构赋值 ({a, b, ...rest} = {a:1, b:2, c:3, d:4});

let values = {
    loginName: "undefined",
    userId: "undefined",
    userName: "undefined",
    phoneNumber: "undefined",
    email: "undefined",
    validDate: "undefined"
};

const search_obj = {
    loginName,
    userId,
    userName,
    phoneNumber,
    email,
    validDate
};

const search_obj = values;

const test = (...search_obj) => {
    console.log(`userId`, userId);
    console.log(`userName`, userName);
    console.log(`email`, email);
};

// 从作为函数实参的对象中提取数据


const user = { 
    id: 42, 
    displayName: "jdoe",
    fullName: { 
        firstName: "John",
        lastName: "Doe"
    }
};

// Object same key name, auto match value
const userId(
    {
        id
    }
) => id;

console.log("userId: " + userId(user));
// "userId: 42"

// customized Object keys names
const whois = (
    {
        displayName: dName, 
        fullName: {
            firstName: fName
        }
    }
) => {
    // console.log(displayName + " is " + firstName);
    // Uncaught ReferenceError: displayName is not defined
    console.log(dName + " is " + fName);
};

whois(user); 
// "jdoe is John"


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment




let values = {
    loginName: "undefined",
    userId: "undefined",
    userName: "undefined",
    phoneNumber: "undefined",
    email: "undefined",
    validDate: "undefined"
};

const search_obj = Object.assign({}, values);

const test = (...search_obj) => {
    console.log(`userId`, userId);
    console.log(`userName`, userName);
    console.log(`email`, email);
};


*/

const color_css = `
    color: #f0f;
    font-size: 23px;
`;

export const getUserInfos = (uid, uname, lname, utype, email, pnum, vdate, activation) => {
/*     let new_url = `
        ${url}
        ?uid=${uid}&uname=${uname}&lname=${lname}&utype=${utype}
        &email=${email}&pnum=${pnum}&vdate=${vdate}&activation=${activation}
    `; */
    /* 
    let arr = [];
    let obj = {};
    if(uid){
        // arr.push();
        Object.assign(obj, {uid: uid});
    }
    if(uname){
        Object.assign(obj, {uname});
    }
    if(utype){
        Object.assign(obj, {utype});
    }
    // obj === Object {uid: "123", uname: "uname", utype: "utype"}
    // url?obj
    // http://localhost:3000/item1?{uid:%20%22123%22,%20uname:%20%22uname%22,%20utype:%20%22utype%22}
    // url?JSON.stringify(obj) ???
    // http://localhost:3000/item1?%22{%22uid%22:%22123%22,%22uname%22:%22uname%22,%22utype%22:%22utype%22}%22
    */
    let new_url = url;
    // all
    if(uid){
        new_url = `${url}?uid=${uid}`;
    }else if(uname){
        new_url = `${url}?uname=${uname}`;
    }else if(lname){
        new_url = `${url}?lname=${lname}`;
    }else if(utype){
        let new_utype = "";
        (utype === "innerUser") ? (new_utype="内部用户") : (new_utype="外部用户");
        new_url = `${url}?utype=${new_utype}`;
    }else if(lname){
        new_url = `${url}?lname=${lname}`;
    }else if(email){
        new_url = `${url}?email=${email}`;
    }else if(pnum){
        new_url = `${url}?pnum=${pnum}`;
    }else if(vdate){
        new_url = `${url}?vdate=${vdate}`;
    }else if(activation){
        let new_activation = "";
        (activation === "yes") ? (new_activation="是") : (new_activation="否");
        new_url = `${url}?activation=${new_activation}`;
    }
    // 如果用户什么都不输入， 传递后端一个空对象 {}；
    // 如果某个字段有值，才把该字段封装到对象中，{key1: "value1", key2: "value2"}
    return fetch(new_url, {
        method: 'GET'
    }).then(
        (response) => response.json()
    ).then(
        (json) => {
            if(debug){
                console.log(`%c get getUserInfos data`, color_css, json);
                console.log(`get getUserInfos data json[0]`, json[0]);
                // maps array data
                console.log(`get getUserInfos data, json.length`, json.length);
            }
            return json;
        }
    );
};

/* 
    undefined == false;
    // false
    x = undefined;
    if(x){
        console.log(`bad`);
    }else{
        console.log(`false`);
    }
    // false
    if(!x){
        console.log(`bad`);
    }
    // bad
*/

/* 
// from 字段对应 error

Object {
    loginName: undefined,
    userId: undefined,
    userName: undefined,
    phoneNumber: undefined,
    email: undefined,
    validDate: undefined
}

const search_obj = {
    uid, 
    uname, 
    lname, 
    utype, 
    email, 
    pnum, 
    vdate, 
    activation
};

const search_obj = {uid, uname, lname, utype, email, pnum, vdate, activation};



*/

/* 

const search_obj = {uid, uname, lname, utype, email, pnum, vdate, activation};


({uid, uname, lname, utype, email, pnum, vdate, activation} = values)


const search_obj = {
    uid, 
    uname, 
    lname, 
    utype, 
    email, 
    pnum, 
    vdate, 
    activation
};

{
    "key": "1",
    "uname": "xray",
    "utype": "内部用户",
    "uid": 17,
    "lname": "西湖区",
    "pnum": "18123456789",
    "email": "clarence.gray@example.com",
    "vdate": "2017-01-01~2017-12-31",
    "activation": "是"
}

*/


export const getUserName = (uname) => {
    // 
};

const fetchSearch = {
    getUserId,
    getUserName,
    getAll,
    getUserInfos
};

export {fetchSearch};
export default fetchSearch;

/* 

{
    "key": "1",
    "uname": "xray",
    "utype": "内部用户",
    "uid": 17,
    "lname": "西湖区",
    "pnum": "18123456789",
    "email": "clarence.gray@example.com",
    "vdate": "2017-01-01~2017-12-31",
    "activation": "是"
},

*/




/* 


PromiseValue


data = fetchSearch.getUserId(17).PromiseValue;


let data = fetchSearch.getAll();

let data = [];
fetchSearch
.getAll()
.then((json) => (data = json));

fetchSearch.getAll().then(
    (json) => {
        data = json;
        return data;
    }
);

*/

