// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modal = STOCK_F9_FV.Modal || {};

// Modal && IIFE === Closure!
STOCK_F9_FV.Modal.Public = STOCK_F9_FV.Modal.Public  || ((debug = false) => {
    return {
        view: () => {
            const w = document.documentElement.clientWidth;
            const h = document.documentElement.clientHeight;
            if (!debug) {
                console.log(`clientHeight = `, h);
                console.log(`clientWidth = `, w);
            }
            //w:可视区域的宽度
            // h:可视区域的高度
            return {
                w,
                h
            };
        },
    }
});

/* 

window.innerHeight & window.innerWidth

The browser window (the browser viewport) is NOT including toolbars and scrollbars.

https://www.w3schools.com/js/js_window.asp?output=print


*/


STOCK_F9_FV.Modal.getClientWidthHeight = STOCK_F9_FV.Modal.getClientWidthHeight  || ((debug = false) => {
    let width = 0,
        height = 0,
        isIE = navigator.userAgent.indexOf("MSIE 6.0") !== -1 ? true : false;
    if(!isIE){
        width = document.body.clientWidth;
        // height = document.body.clientHeight;
        height = document.documentElement.clientHeight;
        if (!debug) {
            console.log(`document.body.clientHeight = `, height);
            // 50px ??? bug
            console.log(`document.body.clientWidth = `, width);
        }
    }else{
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        if (!debug) {
            console.log(`document.documentElement.clientHeight = `, height);
            console.log(`document.documentElement.clientWidth = `, width);
        }
    }
    if (!debug) {
        console.log(`isIE = `, isIE);
        console.log(`clientHeight = `, height);
        console.log(`clientWidth = `, width);
    }
    return {
        w: width,
        h: height
    };
});


(function (win) {
    if(win["UDP"]){
        win["UDP"].Public = STOCK_F9_FV.Modal.Public();
    }else{
        win.UDP = {
            Public: STOCK_F9_FV.Modal.Public(),
            // getClientWidth: STOCK_F9_FV.Modal.getClientWidth(),
            // getClientHeight: STOCK_F9_FV.Modal.getClientHeight(),
            getClientWidthHeight: STOCK_F9_FV.Modal.getClientWidthHeight()
        };
    }
})(window);


/* 

STOCK_F9_FV.Modal.getClientWidth = STOCK_F9_FV.Modal.getClientWidth  || ((debug = false) => {
    let width = 0;
    let isIE = navigator.userAgent.indexOf("MSIE 6.0") !== -1 ? true : false;
    if(!isIE){
        width = document.body.clientWidth;
    }else{
        width = document.documentElement.clientWidth;
    }
    return {
        // width: width,
        width 
    };
});

STOCK_F9_FV.Modal.getClientHeight = STOCK_F9_FV.Modal.getClientHeight  || ((debug = false) => {
    let height = 0;
    let isIE = navigator.userAgent.indexOf("MSIE 6.0") !== -1 ? true : false;
    if(!isIE){
        height = document.body.clientHeight;
    }else{
        height = document.documentElement.clientHeight;
    }
    return {
        // width: width,
        height 
    };
});


function getClientWidth() {
    if(navigator.userAgent.indexOf("MSIE 6.0")!=-1){
        return document.body.clientWidth;
    }
    return document.documentElement.clientWidth;
}

function getClientHeight() {
    if(navigator.userAgent.indexOf("MSIE 6.0")!=-1){
        return document.body.clientHeight;
    }
    return document.documentElement.clientHeight;
}


*/







































