// var uri = {     pager:"pager.html",     doMain:"/",     f10data:"/f10/data/",
//     queryservice:"/queryservice/" };

$(window)
    .scroll(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 100) {
            $("#toTop").fadeIn(1000)
        } else {
            $("#toTop").fadeOut(1000)
        }
    });
$('#toTop').click(function () {
    $("body,html").animate({"scrollTop": 0})
});
var widegilcode = '';
var zxdt_top = Getoffset('menuNav') + parseFloat($("h4").css("height"));
function addCssByLink(url, id) {
    document.write('<link rel="stylesheet" type="text/css" id=' + id + '');
    document.write(' href="' + url + '">')
}
function openF10bulletin(msg) {
    var test = window.location.host;
    var bulleOrreport = {
        "gg": 'bulletin/attachment/company/',
        "yb": 'research/attachment/'
    };
    try {
        var downloadname = "" + test + uri.queryservice + bulleOrreport[msg.isreport] + msg.id + "." + msg.type + "\\" + msg.title + "." + msg.type;
        ChromeExternal.Execute("OpenFile", downloadname)
    } catch (e) {
        try {
            window
                .external
                .OpenFile(test + uri.queryservice + bulleOrreport[msg.isreport] + msg.id, msg.title + "." + msg.type)
        } catch (e) {
            window.open(uri.queryservice + bulleOrreport[msg.isreport] + msg.id)
        }
    }
}
function Getoffset(el) {
    var posY = 0;
    var ylyctop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if ($.browser.msie && (($.browser.version == "6.0") || ($.browser.version == "8.0"))) {
        posY = ($('#' + el).offset().top)
    } else {
        posY = $('#' + el)
            .offset()
            .top
    }
    return posY
}
function my_scroll(id, div) {
    $(window)
        .scroll(function () {
            var ylyctop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var ylyct = Getoffset(id + "_div");
            var ylycheight = -(parseFloat($('#' + id + "_div").height()));
            if ((parseFloat(ylyct) - parseFloat(ylyctop) - parseFloat(zxdt_top) < 80) && (parseFloat(ylyct) - parseFloat(ylyctop) - parseFloat(zxdt_top) > ylycheight)) {
                $("#" + div + " li").removeClass("zxdt_active");
                $("#" + id)
                    .parent()
                    .addClass("zxdt_active")
            }
        })
}
function click_scroll(arr, div) {
    var li = $("#" + div + " li");
    for (var i = 0; i < li.length; i++) {
        (function (x) {
            li[x].onclick = function () {
                $(this)
                    .addClass('zxdt_active')
                    .siblings()
                    .removeClass('zxdt_active');
                var t = Getoffset(arr[x]);
                $(window).scrollTop(t - zxdt_top)
            }
        })(i)
    }
}
$(document)
    .on("click", '#linkyuanwen', function () {
        var url = $(this).attr("value");
        window.open(url, "_blank")
    });
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true
        }
        return false
    }
})(jQuery);
function formatTo2(num) {
    if (isNaN(num) || num == null || num == -1.7976931348623157E308) {
        return "--"
    } else {
        return num.toFixed(2)
    }
}
function format2(num) {
    return num.toFixed(2)
}
function showdate(date) {
    if (null == date || '' == date) {
        return date
    } else {
        var temp_year = new Date().getFullYear();
        var year = date.substring(0, 4);
        if (year == temp_year) {
            return date.substring(5, 7) + "/" + date.substring(8, 10)
        } else {
            return date.substring(0, 4) + "/" + date.substring(5, 7) + "/" + date.substring(8, 10)
        }
    }
}
function formatStr(str) {
    str = str.replace(/\r\n/ig, "<br/>");
    return str
}
function isNotEmpty(source) {
    return source && source != '' && source != ' '
}
function isie6() {
    if ($.browser.msie) {
        if ($.browser.version == "6.0")
            return true
    }
    return false
}
function fnJSON(sJson) {
    if (typeof sJson == 'object') {
        return sJson
    } else if ($ && $.parseJSON) {
        return $.parseJSON(sJson)
    } else if (sJson == "") {
        return null
    } else {
        return eval("(" + sJson + ")")
    }
}
function getParam(name) {
    var str = decodeURIComponent(window.location.search);
    var start = str.indexOf("?") + 1;
    if (start == 0) {
        return ""
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
                return pvalue
            }
        }
    }
    return value
}(function ($) {
    $.extend(String.prototype, {
        format: function () {
            var args = arguments;
            return this.replace(/\{(\d+)\}/g, function (m, i) {
                return args[i]
            })
        }
    })
})(jQuery);
function getClientWidth() {
    if (navigator.userAgent.indexOf("MSIE 6.0") != -1) {
        return document.body.clientWidth
    }
    return document.documentElement.clientWidth
}
function getClientHeight() {
    if (navigator.userAgent.indexOf("MSIE 6.0") != -1) {
        return document.body.clientHeight
    }
    return document.documentElement.clientHeight
}
function fillSECUINFO(data) {
    if (!isEmpty(data)) {
        if (isEmpty(getParam("type"))) {
            switch (parseInt(data.type)) {
                case 1:
                    $(".SH").text("深股通");
                    break;
                case 2:
                    $(".SH").text("沪股通");
                    break;
                case 3:
                    $(".SH").text("深股通(融)");
                    break;
                case 4:
                    $(".SH").text("沪股通(融)");
                    break;
                default:
                    $(".SH").text("");
                    break
            }
            $('#stockCode').text(data.secucode)
        }
        if (isEmpty(getParam("name"))) {
            $('#stockName').text(data.name);
            $('#stockCode').text(data.secucode)
        }
        $("#sh_name").attr('gilcode', data.secucode);
        $("#stockCode").attr('gilcode', data.gilCode);
        $("#stockCode").attr('type', data.type);
        $("#stockName").attr('name', data.name)
    } else {}
}
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length))
        }
    }
    return format
};
function isEmpty(source) {
    return source == undefined || source == null || source == '' || source == '--' || source == -1.7976931348623157e + 308 || source == -2147483648
}
function fnDate(type, n, date) {
    var aDate = [];
    date = date || new Date();
    aDate[0] = date.format('yyyy-MM-dd');
    switch (type) {
        case 'y':
            date.setYear(date.getYear() + n);
            aDate[1] = date.format('yyyy-MM-dd');
            break;
        case 'M':
            date.setMonth(date.getMonth() + n);
            aDate[1] = date.format('yyyy-MM-dd');
            break;
        case 'd':
            date.setDate(date.getDate() + n);
            aDate[1] = date.format('yyyy-MM-dd');
            break
    }
    return aDate
}
function getJsonData(data) {
    var result = "";
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var c = data.charAt(i);
        if (c == '"') {
            var netC = data.charAt(i + 1);
            index++;
            if (index % 2 == 0) {
                if ((i + 1) < data.length && !(netC == "," || netC == ":" || netC == "}" || netC == "]")) {
                    result = result + "\\";
                    index--
                }
            }
        }
        result += c
    }
    return result
}
$(document)
    .ready(function () {
        var gilcode = getParam('gilcode');
        var type = getParam('type');
        var name = getParam('name').replace(/\+/g, "");
        var color = getParam('skin') || "white";
        switch (STOCK_SKIN) {
            case "white":
                STOCK_SKIN = STOCK_SKIN;
                break;
            case "black":
                STOCK_SKIN = STOCK_SKIN;
                break;
            default:
                STOCK_SKIN = "white";
                break
        }
        if (isEmpty(gilcode)) {
            gilcode = '600570.SH'
        }
        if (isEmpty(name)) {
            name = '恒生电子'
        }
        if (isEmpty(type)) {
            type = '4'
        }
        $("#sh_name").attr('gilcode', gilcode.split(".")[0]);
        $("#stockCode").attr('gilcode', gilcode);
        $("#stockCode").attr('type', type);
        $("#stockName").attr('name', name);
        $(document).on("click", '#stock', function () {
            window.location.href = "index.html?gilcode=" + $('#stockCode').attr('gilcode') + "&skin=" + color
        });
        $(document).on('click', '#menu_id a', function () {
            window.location.href = $(this).attr('category') + "?gilcode=" + $('#stockCode').attr('gilcode') + "&skin=" + color + "&type=" + $('#stockCode').attr('type') + "&name=" + $('#stockName').attr('name')
        })
    });
