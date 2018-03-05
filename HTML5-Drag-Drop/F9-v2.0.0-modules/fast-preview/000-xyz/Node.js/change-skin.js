// http://10.1.5.202/stock/f9/fastview/index.html?gilcode=600570.SH&skin=black
// http://10.1.5.202/stock/f9/fastview/index.html?gilcode=600570.SH&skin=white

// 前端判断，根据 URL skin 参数，加载不同 skin 的 css files!


// 终端判断，根据 UI skin 参数，动态加载不同 skin 的页面!
if(skin === white){
    // http://10.1.5.202/stock/f9/fastview/white-index.html?gilcode=600570.SH
}else{
    // http://10.1.5.202/stock/f9/fastview/black-index.html?gilcode=600570.SH
}

// express static web server & proxy 判断
