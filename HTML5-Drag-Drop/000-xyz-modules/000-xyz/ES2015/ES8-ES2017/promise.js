/**
 * 
 * @param {* Object} params 
 */
const FetchDatas = (params) => {
    // fetch json
    const url = `https://cdn.xgqfrms.xyz/json/data.json`;
    let data = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            console.log(`json = \n`, JSON.stringify(json, null, 4));
            data = json;
            // return json;
        }
    )
    .catch(err => console.log(`Error = \n`, err));
    return new Promise(
        (resolve, reject) => {
            console.log(`data = \n`, data);
            // resolved / fulfilled
            resolve(data);
            // rejected
            reject(data);
        }
    );
};


// outter return ??? 
// Error = TypeError: res.json is not a function


const FetchDatas = (params) => {
    // fetch json
    const url = `https://cdn.xgqfrms.xyz/json/data.json`;
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            console.log(`json = \n`, JSON.stringify(json, null, 4));
            let data = json || {};
            return new Promise(
                (resolve, reject) => {
                    console.log(`data = \n`, data);
                    // resolved
                    resolve(data);
                    // 
                    reject(data);
                }
            );
        }
    )
    .catch(err => console.log(`Error = \n`, err));
};

// inner return ??? 
// Uncaught TypeError: Cannot read property 'then' of undefined
FetchDatas()
.then(res => res.json())
.then((json) => {
    console.log(`json = \n`, JSON.stringify(json, null, 4));
})
.catch(err => console.log(`Error = \n`, err));




const XHRFetch = (url = `https://cdn.xgqfrms.xyz/json/data.json`) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        // resolve(xhr.responseText) ??? shaped json
        //JSON.stringify(json, null, 4)
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
};

XHRFetch()// .then(res => res.json())
.then((json) => {
    console.log(`json = \n`, json);
    // console.log(`json = \n`, JSON.stringify(json, null, 4));
    if (copy !== undefined) {
        copy(json);
        // ??? 
    }else{
        console.log(`Chrome 'copy(json);' is no supported in Promise!`);
    }
    return {
        json
        // json: json
    };
})
.catch(err => console.log(`Error = \n`, err));

