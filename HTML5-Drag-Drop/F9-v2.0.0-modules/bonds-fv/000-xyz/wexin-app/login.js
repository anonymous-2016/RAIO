"use strict";

/**
 * @name login.js
 * @author xgqfrms
 * creadted 2018.02.02
 * @param {String} url
 * @param {Boolean} debug
 */

$("#submit").click(function() {
    // username
    var code = $("#code").val();
    if (code === null || code.length === 0 || code.length > 5) {
        $("#coderow").addClass("weui-cell_warn");
        $("#coderow i").addClass("weui-icon-warn");
        $.toptip('工号填写错误', 'error');
        return;
    }
    $("#coderow").removeClass("weui-cell_warn");
    $("#coderow i").removeClass("weui-icon-warn");
    // password
    var pswd = $("#pswd").val();
    if (pswd === null || pswd.length === 0) {
        $("#pswdrow").addClass("weui-cell_warn");
        $("#pswdrow i").addClass("weui-icon-warn");
        $.toptip('未填写密码', 'error');
        return;
    }
    $("#pswdrow").removeClass("weui-cell_warn");
    $("#pswdrow i").removeClass("weui-icon-warn");
    // Verification Code
    var vcode = $("#vcode").val();
    if (vcode === null || vcode.length === 0) {
        $("#vcoderow").addClass("weui-cell_warn");
        $("#vcoderow i").addClass("weui-icon-warn");
        $.toptip('未填写验证码', 'error');
        return;
    }
    $("#vcoderow").removeClass("weui-cell_warn");
    $("#vcoderow i").removeClass("weui-icon-warn");
    // login ??? encode username/pwd & MD5
    $.post(
        'http://nh.gildata.com/login2.php',
        {
            code: code,
            pswd: pswd,
            vcode: vcode
        },
        function(msg) {
            if (msg.match('error')) {
                var errcode = msg.replace(/_error/, '');
                $("#vcodepic").click();
                if (errcode === '1') {
                    $.toptip('无此用户', 'error');
                    $("#code").focus();
                }
                if (errcode === '2') {
                    $.toptip('密码错误', 'error');
                    $("#pswd").val('');
                    $("#pswd").focus();
                }
                if (errcode === '3') {
                    $.toptip('验证码错误', 'error');
                    $("#vcode").val('');
                    $("#vcode").focus();
                }
            } else {
                // window.location = "index.php";
                // window.location = "http://nh.gildata.com/index.php";
                // window.location = "./me.html";
                window.location = "http://127.0.0.1:8888/me.html";
            }
        }
    );
});
