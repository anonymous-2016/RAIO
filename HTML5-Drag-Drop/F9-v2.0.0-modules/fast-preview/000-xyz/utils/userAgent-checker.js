/**
 * @description UA_Checker: navigator userAgent Checker Utils
 * @author xgqfrms
 * 
 */
const UA_Checker = ((win = (window ? window : this)) => {
    let userAgent = (win.navigator && win.navigator.userAgent) || '',
        isChrome = /Chrome/i.test(userAgent) && !win.opera,
        isEdge = /Edge/i.test(userAgent) && !win.opera,
        isIE = /(msie|trident)/i.test(userAgent) && !win.opera,
        isWebKit = /Safari/i.test(userAgent),
        isFirefox = /Firefox/i.test(userAgent),
        isTouchDevice = /(Mobile|Android|Windows Phone)/i.test(userAgent);
    return {
        isChrome,
        isWebKit: ((isChrome ? false : true) && isWebKit),
        isFirefox,
        isEdge,
        isIE,
        isTouchDevice
    };
})(window || this);
// {isChrome: true, isWebKit: true, isFirefox: false, isEdge: false, isIE: false, …}


/* 

# navigator.userAgent

Chrome
Safari ???
Firefox
Edge
Trident

// Chrome Canary
window.navigator.userAgent;
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3246.2 Safari/537.36"


// Chrome
window.navigator.userAgent;
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"

// Firefox
window.navigator.userAgent;
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0) Gecko/20100101 Firefox/56.0"

// Edge
window.navigator.userAgent;
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063"

// IE 11
window.navigator.userAgent;
// "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"

*/