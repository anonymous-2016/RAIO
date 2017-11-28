# Stock F9 速览

```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

http://10.1.5.202/stock/f9/fastview/sidebar.html



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









