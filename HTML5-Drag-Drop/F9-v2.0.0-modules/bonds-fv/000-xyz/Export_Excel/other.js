 //获取当前浏览器类型
 function getExplorer() {
    var explorer = window.navigator.userAgent;
    // Chrome & 版本 63.0.3239.132（正式版本） （64 位）
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    // Microsoft Edge 41.16299.15.0 & Microsoft EdgeHTML 16.16299
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    // IE 版本: 11.192.16299.0 & 更新版本 11.0.50
    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"
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


//获取到类型需要判断当前浏览器需要调用的方法，目前项目中火狐，谷歌，360没有问题; Win10自带的IE无法导出
function exportExcel(tableid) {
    if(getExplorer()=='ie'){
        var curTbl = document.getElementById(tableid);
        var oXL = new ActiveXObject("Excel.Application");
        var oWB = oXL.Workbooks.Add();
        var xlsheet = oWB.Worksheets(1);
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand("Copy");
        xlsheet.Paste();
        oXL.Visible = true;
        try {
            var fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
        } catch (e) {
            print("Nested catch caught " + e);
        } finally {
            oWB.SaveAs(fname);
            oWB.Close(savechanges = false);
            oXL.Quit();
            oXL = null;
            idTmr = window.setInterval("Cleanup();", 1);
        }
    }else {
        tableToExcel(tableid);
    }
}

function Cleanup() {
    window.clearInterval(idTmr);
    CollectGarbage();
}

//判断浏览器后调用的方法，把table的id传入即可
var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
    template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',
    base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function(s, c) {
        return s.replace(/{(\w+)}/g,
        function(m, p) {
            return c[p];
        })
    };
    return function(table, name) {
        if (!table.nodeType) {
            table = document.getElementById(table);
        }
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        };
        window.location.href = uri + base64(format(template, ctx));
    }
})();
