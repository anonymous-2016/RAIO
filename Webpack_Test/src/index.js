import { Module1 as M1 } from "./modules/module1";
import { Module2 as M2 } from "./modules/module2";


const AppModule = () => {
    console.log(`Waiting, initializing the App ...`);
    M1();
    M2();
};


document.addEventListener(`DOMContentLoaded`, () => {
    AppModule();
    setTimeout(() => {
        STOCK_F9_FV.Modules.companyNews.init(`http://10.1.5.202/webservice/fastview/stock/news/600570.SH`);
        // call global function!
        /* 
            Failed to load http://10.1.5.202/webservice/fastview/stock/news/600570.SH: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3002' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
        */
    }, 0);
});


/* 


https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded

https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload


const FT_code_data = [
    {"k":"110000","v":"农林牧渔"},
    {"k":"210000","v":"采掘"},
    {"k":"220000","v":"化工"},
    {"k":"230000","v":"钢铁"},
    {"k":"240000","v":"有色金属"},
    {"k":"270000","v":"电子"},
    {"k":"280000","v":"汽车"},
    {"k":"330000","v":"家用电器"},
    {"k":"340000","v":"食品饮料"},
    {"k":"350000","v":"纺织服装"},
    {"k":"360000","v":"轻工制造"},
    {"k":"370000","v":"医药生物"},
    {"k":"410000","v":"公用事业"},
    {"k":"420000","v":"交通运输"},
    {"k":"430000","v":"房地产"},
    {"k":"450000","v":"商业贸易"},
    {"k":"460000","v":"休闲服务"},
    {"k":"480000","v":"银行"},
    {"k":"490000","v":"非银金融"},
    {"k":"510000","v":"综合"},
    {"k":"610000","v":"建筑材料"},
    {"k":"620000","v":"建筑装饰"},
    {"k":"630000","v":"电气设备"},
    {"k":"640000","v":"机械设备"},
    {"k":"650000","v":"国防军工"},
    {"k":"710000","v":"计算机"},
    {"k":"720000","v":"传媒"},
    {"k":"730000","v":"通信"}
];



*/


