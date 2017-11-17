/* 

??? UDP

http://www.networkinghowtos.com/howto/view-listening-udp-ports-on-windows/


*/

/* AMD / CommonJS / UMD / CMD / ES2015 Module */

// UDP ??? namespace 

(function (win) {
    function Public(){
        return {
            view:function(){
                return{
                    //w:可视区域的宽度    h:可视区域的高度
                    w:document.documentElement.clientWidth,
                    h:document.documentElement.clientHeight
                };
            }
        }
    }
    if(win["UDP"]){
        win["UDP"].Public = Public();
        // this expression will never excuted!
    }else{
        win.UDP = {Public:Public()};
        // this expression will always excuted!
        // window.UDP.Public === Object
        // UDP.Public.view();
        // {w: 880, h: 662}
    }
})(window);







(function (win) {
    if(win["UDP"]){
        win["UDP"].Public = Public();
        // this expression will never excuted!
    }else{
        win.UDP = {
            Public:Public()
        };
    }
})(window, function (params = {kay: `value`}, debug = false, css = `color: #f0f; font-size: 23px;`) {
    console.log(`this is an anonymous function!`);
    const {key: k} = {...params};
    console.log(`%c params's key as k = ${k}!`, css);
});



































