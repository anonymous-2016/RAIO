const emptyChecker = (key = ``) => {
    let result = true;
    switch (key) {
        case undefined:
            result = false;
            break;
        case null:
            result = false;
            break;
        default:
            break;
    }
    return result;
};

// no -, only --

const newEmptyChecker = (key = ``) => {
    let result = true;
    switch (key) {
        case undefined:
            result = false;
            break;
        case null:
            result = false;
            break;
        case "--":
            result = false;
            break;
        default:
            break;
    }
    return result;
};


const shitAPI = () => {
    // `暂无数据` & no data!
    console.log(`json is empty! = \n`, json);
    const arr_obj = {};
    arr_obj.industry_average = [];
    arr_obj.market_average = [];
    arr_obj.code = [];
    arr_obj.change_rate = [];
    OTC_F9_FV.Modules.companyPerformanceMarket.drawHS2(arr_obj, hsc_uid2);
};



