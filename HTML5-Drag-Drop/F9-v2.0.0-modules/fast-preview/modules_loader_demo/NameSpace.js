
// namespace
var Stock_F9 = Stock_F9 || {};

// sub namespace
Stock_F9.Modules = Stock_F9.Modules || {};


/**
 * @description Stock_F9 Modules infos
 * @author xgqfrms
 * @created 2017.11.03
 * 
 * @copyright https://www.gildata.com
 * @license MIT
 * @namespace NS_Stock_F9.Modules.infos
 *
 * @param {String} constainer_uid (Required)
 * @param {String} files_path (Required)
 * @param {String} api_path (Required)
 * @param {String} api_uid (Required)
 * @param {Number} sh_code (Required)
 * @param {String} layout (Optional)
 * @param {Boolean} debug (Optional)
 * @example let args = [`#constainer_uid`, `https://cdn.gildata.xyz/files/fastview/stock/F9/`, `http://10.1.5.202/webservice/fastview/stock/`, `stockfast07`, `600570`, true];
 * @example Stock_F9.Modules.infos.init(args);
 * @argument 
 */

// http://10.1.5.202/webservice/fastview/stock/stockfast07/600570.SH




// infos module
Stock_F9.Modules.infos = Stock_F9.Modules.infos || (
    // IIFE
    function(url = ``, uid = ``, sh_code = ``, debug = `false`){
        let args = (arguments && arguments.length > 0) ? arguments : [];
        if (debug) {
            console.log(`args = \n`, JSON.stringify(args, null, 4));
            // console.log(`this.name = \n`, this.name);
            // ??? function name
        }
        const argsChecker = (...args) => {
            if (requiredArgsIsMissing) {
                throw new Error(`required Args Is Missing`);
                if (condition) {
                    args.length === 5 && debug === undefined;
                    // Required.length & first.Optional undefined ???
                    // All.length - Optional.length === Required.length ??? which missing
                }
                switch (undefinded) {
                    case args[0]:
                        // 
                        break;
                    case args[1]:
                        // 
                        break;
                    default:
                        break;
                }
            }
        };
        const tester = (...args) => {
            args.forEach(
                (arg, i) => {
                    console.log(`arr[${i}] =`, arg, `\ni = ${i}`);
                }
            );
        };
        const CSSLoader = () => {
            // 
        };
        const HTMLLoader = () => {
            // 
        };
        const JSLoader = () => {
            // 
        };
        const demo = (constainer_uid = `body`) => {
            // let args = [`#constainer_uid`, `https://cdn.gildata.xyz/files/fastview/stock/F9/`, `http://10.1.5.202/webservice/fastview/stock/`, `stockfast07`, `600570`, true];
            // Stock_F9.Modules.infos.init(args);
            let obj = {
                step1: `let arr = ['#constainer_uid', 'https://cdn.gildata.xyz/files/fastview/stock/F9/', 'http://10.1.5.202/webservice/fastview/stock/', 'stockfast07', '600570', true];`,
                step2: `Stock_F9.Modules.infos.init(args);`
            };
            console.table(obj);
            let arr = ["#constainer_uid", "https://cdn.gildata.xyz/files/fastview/stock/F9/", "http://10.1.5.202/webservice/fastview/stock/", "stockfast07", "600570", true];
            console.table(arr);
            console.log(`let arr = [\n\t"#constainer_uid", \n\t"https://cdn.gildata.xyz/files/fastview/stock/F9/", \n\t"http://10.1.5.202/webservice/fastview/stock/", \n\t"stockfast07", \t\n\t"600570", \n\ttrue\n]; \nStock_F9.Modules.infos.init(args);`);
            let app_root = constainer_uid,
                target_dom = ``;
            if (app_root !== `body`) {
                if (app_root.includes(`#`)) {
                    target_dom = document.querySelector(app_root);
                }else{
                    target_dom = document.querySelector(`#${app_root}`);
                }
            }else{
                target_dom = document.querySelector(`body`);
            }
            let pre = document.createElement(`pre`);
            pre.innerHTML = `${JSON.stringify(obj, null, 4)}`;
            target_dom.insertAdjacentElement(`afterbegin`, pre);
            // let str = `let arr = [\n\t"#constainer_uid", \n\t"https://cdn.gildata.xyz/files/fastview/stock/F9/", \n\t"http://10.1.5.202/webservice/fastview/stock/", \n\t"stockfast07", \t\n\t"600570", \n\ttrue\n]; \nStock_F9.Modules.infos.init(args);`;
            // target_dom.insertAdjacentHTML(`beforeend`, `<div>${str}</div>`);
            // append / appendChild
        };
        const init = (arr = []) => {
            // this.tester(...args);
            // Uncaught TypeError: this.tester is not a function at Object.init
            // Stock_F9.Modules.infos.tester(...args);
            // console.log(`this.name = \n`, this.name);
            tester(...((arr.length > 0) ? arr : args));
        };
        return {
            init,
            tester,
            demo
        }
    }
)(`https://cdn.gildata.xyz/`, `stockfast07`, `600570`, true);

