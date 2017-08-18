// URLs

/**
 * xgqfrms
 * 2017.08.03
 * 
 * @class urls
 * @extends {utils}
 */

// GetAllLoadSearch 

export const init = `http://10.1.5.203/http-manage/admin`;
// http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetAllLoad%22,%22WriteType%22:%22json%22}
export const search = `http://10.1.5.203/http-manage/admin`;
export const input = `http://10.1.5.203/http-manage/admin`;
export const output = `http://10.1.5.203/http-manage/admin`;
// http://10.1.5.31:8080/http/manage/admin?

export const test = `http://10.1.5.203/http-report/query`;
// http://10.1.5.31:8080/http/report/query?



// local JSON sever

export const ljs_info = `http://localhost:7777/info/`;
export const ljs_input = `http://localhost:7777/input/`;
export const ljs_output = `http://localhost:7777/output/`;
export const ljs_datas = `http://localhost:7777/datas/`;



export const ljs_urls = {
    ljs_info,
    ljs_input,
    ljs_output,
    ljs_datas
};


export const urls = {
    init,
    search,
    input,
    output,
    test,
    ljs_urls
};

export default urls;






































