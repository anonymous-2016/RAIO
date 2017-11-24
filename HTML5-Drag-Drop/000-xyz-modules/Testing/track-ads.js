// push.js
/* shit api bug */
!function(){
    var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.xgqfrms\.xyz)/gi, 
        r=window.location.href,
        o=document.referrer;
    if(!e.test(r)){
        var n="//cdn.xgqfrms.xyz/xyz.gif";
        o?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);
        var t=new Image;
        t.src=n
    }
}(window);


// !function(){console.log(`smg!`);}(window);
// smg! // true
!function(){
    var reg=/([htps]:\/\/[\w\.]+\.xgqfrms\.xyz)/i, 
        url=window.location.href,
        ref=document.referrer;// ""
        // 如果用户直接打开了这个页面（不是通过页面跳转，而是通过地址栏或者书签等打开的），则该属性为空字符串。
        // "https://developer.mozilla.org/zh-CN/search?q=document.referrer"
    if(!reg.test(url)){
        // false & redirect
        var gif="https://cdn.xgqfrms.xyz/xyz.gif";
        ref ? (gif+="?r="+encodeURIComponent(document.referrer),url&&(gif+="&l="+url)):url&&(gif+="?l="+url);
        // "https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fsearch%3Fq%3Ddocument.referrer"
        // gif += "?r=" + encodeURIComponent(document.referrer), url &&(gif+="&l="+url)
        // "https://cdn.xgqfrms.xyz/xyz.gif?r=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fsearch%3Fq%3Ddocument.referrer&l=https://developer.mozilla.org/zh-CN/docs/Web/API/Document"
        // ?r &l
        // "https://cdn.xgqfrms.xyz/xyz.gif?l=https://developer.mozilla.org/zh-CN/docs/Web/API/Document"
        // ?l 
        var img=new Image;
        img.src=gif;
    }
}(window);



/* 

// https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140
// https://developer.mozilla.org/zh-CN/docs/Web/API/Document
// https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer




// https://regexper.com/#%2F(%5Bhtps%5D%3A%5C%2F%5C%2F%5B%5Cw%5C.%5D%2B%5C.xgqfrms%5C.xyz)%2Fig

// https://regexper.com/#%2F(%5Bhtps%5D*%3A%5C%2F%5C%2F%5B%5Cw%5C.%5D%2B%5C.xgqfrms%5C.xyz)%2Fi

const reg = /([htps]:\/\/[\w\.]+\.xgqfrms\.xyz)/i;

reg.test(`https://track.xgqfrms.xyz/xyz`);
reg.test(`http://track.xgqfrms.xyz/abc`);

[http|https]

[\w\.]

*/