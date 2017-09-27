
const getApiDatas = (url = `https://cdn.xgqfrms.xyz/json/app.json`, opts = {}) => {
    console.log('Posting request to APIs ...');
    const datas = JSON.stringify(opts);
    fetch(
        url,
        {
            method: `POST`,
            body: datas
        }
    ).then(
        (response) => {
            return response.json();
        }
    ).then(
        (json) => {
            console.log('fetched datas: \n', JSON.stringify(json, null, 4));
        }
    );
};

const url = `http://10.1.5.203/wts/apiList.json`;
const opts = {
    "pageIndex":1,
    "pageSize":50,
    "_tt":1506422545456,
    "":"",
    "ApiCategory":"-1",
    "t":1506422545458
};

// {"pageIndex":1,"pageSize":50,"_tt":1506422545456,"":"","ApiCategory":"-1","t":1506422545458}: ???

getApiDatas(url, opts);

