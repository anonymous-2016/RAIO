





/*

let str = window.navigator.userAgent;

Google Chrome & 版本 63.0.3239.132（正式版本） （64 位）
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"

Mozilla Firefox 57.0.4 (64-bit)
"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0"

Microsoft Edge 41.16299.15.0 & Microsoft EdgeHTML 16.16299
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"

Microsoft IE 版本: 11.192.16299.0 & 更新版本 11.0.50
"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"




*/

/**
 * @author xgqfrms
 * @param {Bolean} debug
 * @description 获取当前浏览器类型
 *
 */
const explorerChecker = (debug = false) => {
    const explorer = window.navigator.userAgent;
    let result = ``;
    const keys = ["Edge", "Trident", "Firefox", "Chrome"];
    switch (key) {
        case "Edge":// Edge & Chrome
            // explorer.includes(key);
            value = `Edge`;
            break;
        case "Trident":
            value = `IE`;
            break;
        case "Firefox":
            value = `Firefox`;
            break;
        case "Chrome":// no Edge, only Chrome
            value = `Chrome`;
            break;
        default:
            break;
    }
    return result;
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if(explorer.indexOf("Chrome") >= 0){
        return 'Chrome';
    }
    //Opera
    else if(explorer.indexOf("Opera") >= 0){
        return 'Opera';
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0){
        return 'Safari';
    }
}
