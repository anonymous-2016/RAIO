/**
 * Created by lianghj on 2017/11/9.
 */
var uri = {
    pager: "pager.html",
    keyghost: "http://10.10.1.102/keyghost",
    queryservice: "/queryservice202/",
    reportinfo: "/reportinfo202/research/",
    reportquery: "/reportquery/query/"
    //queryservice:"http://192.168.31.221/queryservicemain/"
};

//注册键盘精灵毁掉事件
function registKeyGhostCallBack(callback) {
    var jsec = $("#sh_name");
    $.fnKeyGhost({
        jinput: jsec,
        url: uri.keyghost,
        params: {
            zip: true,
            size: 10,
            key: ""
        },
        callback: function(detail) {
            jsec.val('');
            if (callback) {
                callback(detail);
            }
        },
        emptyCallback: function() {
            jsec.val('');
        },
        width: 300,
        sThead: '<thead><tr><th>选项</th><th class="u_s">代码</th><th>简称</th></tr></thead>',
        aFilter: [1]
    });
}

/*获取数组第一个数值*/
function getFirseCel(data, j) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        //!isEmpty(data[i].vList[j])?data[i].vList[j]:"--"
        if (!isEmpty(data[i][j])) {
            arr.push(data[i][j]);
        } else {
            arr.push(null);
            //false;
        }
    }
    return arr;
}

function delRowCell(data) {
    var rows = [];
    for (var i = 0; i < data.length; i++) {
        rows.push(new newObject(i, data[i]));
    }
    return rows;
}
function newObject(id, name) {
    this.id = id;
    this.name = name;
}

/*控制左边部分伸缩 ---start*/
window.onresize = function() {
    document.getElementById("autoLeft").style.bottom = $(window).height() - 527 + "px";
};
//document.getElementById("autoLeft").style.bottom = $(window).height() - 527 + "px";
$("#autoLeft").click(function() {
    $(".left").toggle();
    $("#autoLeft").toggleClass('autoclose10');
    //$("#autoLeft").css("left","10px");
    $(".right").toggleClass('autoright');
    $(".arrow").toggleClass("arrowclose");
    //$(".right").css("margin-left","10px");
});
/*控制左边部分伸缩---- end*/

/*Ztree初始化。。。。。*/

var setting = {
    view: {
        showIcon: showIconForTree
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        //onAsyncSuccess: selectNodes,
        onClick: onClick
    }
};

/**
 *  单独选中根节点中第一个节点
 */
function selectNodes() {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    //获取节点
    var nodes = treeObj.getNodes();
    if (nodes.length > 0) {
        var node = treeObj.selectNode(nodes[0]);
    }
}

function beforeClick(treeId, treeNode, clickFlag) {
    //        className = (className === "dark" ? "":"dark");
    //        showLog("[ "+getTime()+" beforeClick ]&nbsp;&nbsp;" + treeNode.name );
    return (treeNode.click != false);
}

/*节点单击事件 回调*/

function onClick(event, treeId, treeNode, clickFlag) {
    //console.log(treeNode.id + "," + treeNode.pId + "," + treeNode.name);
    $("#treeDemo").attr('type', treeNode.html);
    var nodetype = treeNode.nodetype;
    nodetype != 0 ? setIframe(treeNode.html) : false;

}

function SetCwinHeight(iframe) {
    var iframeid = document.getElementById(iframe); //iframe id
    if (document.getElementById) {

        //alert($(window).height());
        $("#myiframe").css("height", $(window).height()-43 + "px");
        $("#myiframe").css("width", $(window).width() - 220 + "px");
    }
}

function showIconForTree(treeId, treeNode) {
    return ! treeNode.isParent;
}
function nodeObject(id, pId, name, open, html, nodetype) {
    this.id = id;
    this.pId = pId;
    this.name = name;
    this.open = open;
    this.html = html;
    this.nodetype = nodetype;
}

function setIframe(src) {
    var f = document.getElementById("myiframe");

    var SecuCode = getParam('SecuCode');
    var innercode = getParam('innercode');
    if (isEmpty(SecuCode)) {
        //初始化时方式恒生电子
        SecuCode = '600570';
    }
    if (isEmpty(innercode)) {
        //初始化时方式恒生电子
        innercode = '1752';
    }
    $("#sh_name").attr('SecuCode', SecuCode);
    $("#sh_name").attr('innercode', innercode);

    //f.style.display="inline";
    f.src = "templates/" + src + ".html?SecuCode="+SecuCode+"&innercode="+innercode;
}

/*共用js功能----*/

function getClientWidth() {
    if (navigator.userAgent.indexOf("MSIE 6.0") != -1) {
        return document.body.clientWidth;
    }
    return document.documentElement.clientWidth;
}

function getClientHeight() {
    if (navigator.userAgent.indexOf("MSIE 6.0") != -1) {
        return document.body.clientHeight;
    }
    return document.documentElement.clientHeight;
}

function isEmpty(source) {
    return source == undefined || source == null || source == '' || source == 0;
}

function getParam(name) {
    var str = decodeURIComponent(window.location.search);

    var start = str.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }

    var value = "";
    var queryString = str.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        var eindex = paraNames[i].indexOf("=");

        if (eindex > 0) {
            pname = paraNames[i].substring(0, eindex);
            pvalue = paraNames[i].substring(eindex + 1);

            if (name == pname) {
                return pvalue;
            }
        }
    }
    return value;
}

(function($) {
    $.extend(String.prototype, {
        format: function() {
            var args = arguments;
            return this.replace(/\{(\d+)\}/g,
                function(m, i) {
                    return args[i];
                });
        }
    });
})(jQuery);

/*查看原文链接*/
$("#linkyuanwen").live("click",
    function() {
        var url = $(this).attr("value");
        window.open(url, "_blank");
    });

//ajax请求，成功，失败，完成等状态。。。
function loaddate(url, param, callback, beforeback) {
    $.ajax({
        url: url,
        type: 'GET',
        data: param,
        timeout: 60000,
        // 请求发送之前（发送请求前可修改XMLHttpRequest对象的函数，如添加自定义HTTP头。）。
        beforeSend: function(XMLHttpRequest) {
            beforeback();
        },
        // 请求成功后的回调函数
        success: function(data) {
            callback(data);
        },
        // 请求完成后的回调函数 (请求成功或失败之后均调用)
        complete: function(XMLHttpRequest, textStatus) {
            $("#loadingHide").empty().css("display", 'none');
        },
        // 请求失败时调用此函数。
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#loadingHide").empty().html("请求网络超时！");
        }
    });
}

function getparentParam(name) {
    var str = decodeURIComponent(window.parent.location.search);
    //var url = parent.main.location.href;
    var start = str.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }

    var value = "";
    var queryString = str.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        var eindex = paraNames[i].indexOf("=");

        if (eindex > 0) {
            pname = paraNames[i].substring(0, eindex);
            pvalue = paraNames[i].substring(eindex + 1);

            if (name == pname) {
                return pvalue;
            }
        }
    }
    return value;
}

$(document).ready(function() {

    //document.querySelector("#treeDemo_2_span").click();
    window.onload=SetCwinHeight("myiframe");

    $.getJSON('data/node-temp.json',
        function(data) {
            var arr = [];
            var result = data.data[0].rows;
            for (var i = 0; i < result.length; i++) {
                i == 0 ? arr.push(new nodeObject(result[i][0], result[i][1], result[i][2], 'true', result[i][10], result[i][8])) : arr.push(new nodeObject(result[i][0], result[i][1], result[i][2], 'false', result[i][10], result[i][8]));
            }
            $.fn.zTree.init($("#treeDemo"), setting, arr);

            /*默认展开第一个节点*/
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            var nodes = zTree.getNodes();

            var nodesd = zTree.getSelectedNodes();

            zTree.selectNode(nodes[0].children[0]); //选中第一个子节点
            /*默认加载第一个页面*/

            setIframe('gsjj');

        });

});
