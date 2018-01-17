// autoMaxHeight.js

// view-source:http://music.163.com/#/album?id=42967

//fix ipad下的一个bug
if (navigator.userAgent.indexOf('iPad') != -1) {
    iframeHeight = Math.max(
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
        Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
        Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    );
    top.document.body.style.height = iframeHeight + 20 + 'px';
}

const autoMaxHeight = () => {
    let result = ``;
    result = Math.max(
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
        Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
        Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    );
    // top ? iframe
    top.document.body.style.height = result + 20 + 'px';
};
