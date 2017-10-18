// all urls ip

export const stockfasturl = `http://10.1.5.202/webservice/fastview/stock/`;
// export const stockfasturl = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;


// ES6 auto assignment (destructuring assignment)
export const FS = {
    stockfasturl,
    // stockfasturl,
};

export const urls = {
    FS,
    // 
};

export default urls;


/* 


import {urls} from `./urls.js`;


// `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;

const sf_test = `${urls.FS.stockfasturl}/stockfast${db_id}/${stock_uid}.SH`;

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


*/