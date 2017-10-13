# CORS ???

```js

/* 

No 'Access-Control-Allow-Origin' header is present on the requested resource. 
Origin 'null' is therefore not allowed access. 
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


let corsHeaders = new Headers();
const options = {
    method: 'GET',// `POST`
    headers: corsHeaders,
    mode: 'no-cors',
    cache: 'default'
};

fetch(
    'flowers.jpg',
    options
).then(
    function(response) {
        return response.blob();
    }
).then(
    function(myBlob) {
        let objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
        // `<img src="${objectURL}" />`
    }
);



*/






/* 


arr = [];

for(let key in obj){
    arr.push(key);
}

// (11) ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"]

// shit api
// UI-Array




let keys = arr.map(
    obj => obj.key
);

// ["涉及概念", "概念"]

// "sjgn": "涉及概念"
// "bdl": "52周波动率"
// 机构持股占比(%) cgzb


let ui = ["概念", "涉及概念"];
let table = [];
ui.map(
    (k, i) => {
        arr.map(
            (obj) => {
                if(k === obj.key){
                    table.push(obj.value);
                }
            }
        );
    }
);


*/


```

