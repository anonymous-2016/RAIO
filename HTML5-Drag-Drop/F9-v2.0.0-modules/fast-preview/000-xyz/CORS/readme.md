# CORS


error = TypeError: Failed to fetch!


index.html:1 Failed to load http://10.1.5.202/webservice/fastview/stock/stockfast03/600570.SH:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
Origin 'null' is therefore not allowed access.
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

opaque 透明

## fetch & no-cors


```js

// fetch & no-cors

const myAPIKey = `YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`;
const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={}&apiKey=${myAPIKey}`;
// collection === test
// q={} === all


// const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`

const getdata = () => {
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    }).then(
        (response) => {
            console.log(`fetch response`, response);
            return response.json();
        }
    ).then(
        (json) => {
            console.log(`fetch json`, json);
            let data = JSON.stringify(json);
            return data;
        }
    ).catch(
        (err) => {
            const color = `
                color: red;
                background: rgba(125, 125, 125, 0.7);
                font-size: 23px;
            `;
            console.log(`%c Whoops, An Error occurred!`, color, err);
            throw new Error("Whoops, An Error occurred!", err);
        }
    );
};


```

















