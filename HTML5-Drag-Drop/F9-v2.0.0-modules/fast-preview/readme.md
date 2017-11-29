# Stock F9 速览

```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!
$ cd ../

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://jira.gildata.com:8888/secure/RapidBoard.jspa?rapidView=29&projectKey=GFT&view=planning&selectedIssue=GFT-1494&quickFilter=57



# webpack

ES6 => ES5



# data-*

> bug ???

```js

document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);


```

title(active highlight)
#2e2f33
title()
#56575b

text
#4d4d4d

    navigator: {
        height: 20,
        margin: 10
    },
    scrollbar: {
        enabled: false,
        // no scrollbar, only using rangeSelector
    },


/* svg style */


/*
rect {
    x: 0;
    y: 5;
    width: 17;
    height: 10;
    fill: rgb(255, 25, 25);
    rx: 0;
    ry: 0;
}
*/



border: 1px solid #d7dbe0;



## web server

> Apache & Nginx

/usr/local/apache2/webapps/



http://10.1.5.203/webtool/apitool/

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://10.1.5.202/xsb/ntb-zs/index.html
http://10.1.5.202/xsb/f9/index.html


/usr/local/apache2/webapps/stock/f9/fastview

/usr/local/apache2/webapps/xsb/ntb-zs
/usr/local/apache2/webapps/xsb/f9




http://jira.gildata.com:8888/secure/attachment/28925/Api1.txt

http://10.1.5.202/stock/f9/fastview/sidebar.html







```js

swal("你确定要删除此模块?", {
    buttons: {
        cancel: {
            text: "确定",
            value: "cancel",
        },
        ok: {
            text: "取消",
            value: "ok",
        }
    },
})
.then((value) => {
    switch (value) {
        case "cancel":
            swal("已取消删除此模块!", "success");
            break;
        case "ok":
            swal("你确定要删除此模块?", "warning");
            break;
        default:
            swal("Got away safely!");
    }
});

```









