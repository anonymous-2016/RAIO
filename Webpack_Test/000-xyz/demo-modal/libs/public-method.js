function getClientWidth() {
    if(navigator.userAgent.indexOf("MSIE 6.0")!=-1)
    {
        return document.body.clientWidth;
    }
    return document.documentElement.clientWidth;
}

function getClientHeight() {
    if(navigator.userAgent.indexOf("MSIE 6.0")!=-1)
    {
        return document.body.clientHeight;
    }
    return document.documentElement.clientHeight;
}


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modal = STOCK_F9_FV.Modal || {};
// Modal && IIFE === Closure!
STOCK_F9_FV.Modal.Public = STOCK_F9_FV.Modal.Public  || ((debug = false) => {
    return {
        view: () => {
            //w:可视区域的宽度
            // h:可视区域的高度
            return{
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            };
        },
    }
});

/* 

function Public(){
    return {
        view:function(){
            return{
                //w:可视区域的宽度    h:可视区域的高度
                w:document.documentElement.clientWidth,
                h:document.documentElement.clientHeight
            }
        }
    }
}


*/


(function (win) {
    if(win["UDP"]){
        win["UDP"].Public = STOCK_F9_FV.Modal.Public();
    }else{
        win.UDP = {
            Public: STOCK_F9_FV.Modal.Public()
        };
    }
})(window);








































