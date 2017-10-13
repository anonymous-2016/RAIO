# important-infos




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



```css


/* tr:nth-child(even) === tr:nth-child(2n+1) & tr:nth-child(odd) === tr:nth-child(2n)*/


/*

.fv-important-infos-table-tbody>tr:nth-of-type(2n) {
    background-color: #f5f5f5;
}

// reset color OR just after it

.fv-important-infos-table-td-key {
    background: #e8eefa;
}


??? all in one ???

.fv-important-infos-table-tbody>tr:nth-of-type(2n+1)>td:last-child {
    color: #0f0;
}

.fv-important-infos-table-tbody>tr:nth-of-type(2n+1)>td:nth-last-of-type(0) {
    color: #0f0;
}

.fv-important-infos-table-tr>td:nth-last-of-type(0) {
    color: #F306F3;
}

.fv-important-infos-table-td-value:nth-child(2n) {
    background: #fff;
}

.fv-important-infos-table-td-value:nth-child(2n+1) {
    background: #e9e9e9;
}

*/

```

