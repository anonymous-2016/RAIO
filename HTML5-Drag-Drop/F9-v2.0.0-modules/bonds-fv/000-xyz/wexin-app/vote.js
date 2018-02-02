String.format = function() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};
var list = [];
$(document).ready(function() {
    $.getJSON('http://nh.gildata.com/money.php?action=actlist', function(json) {
        var option = '<label class="weui-cell weui-check__label"><div class="weui-cell__hd"><input type="checkbox" class="weui-check" id="{0}"><i class="weui-icon-checked"></i></div><div class="weui-cell__bd"><p>{1}</p></div></label><div class="weui-cells__tips">部门：{2}</div>';
        if (json) {
            obj = eval(json); //将JSON字符串转化为对象
            var len = obj.length;
            for (var i = 0; i < len; i++) {
                var name = obj[i]['actname'];
                var part = obj[i]['part'];
                $('#checkbox').append(String.format(option, i.toString(), name, part));
                list[i] = name.split('：')[1];
            }
        }
    });
});
$("#pay").click(function() {
    var selected = [];
    var j = 0;
    for (var i = 0; i < list.length; i++) {
        var act = $('#' + i.toString());
        if (act.is(':checked')) {
            selected[j] = list[i];
            j++;
        }
    }
    if (j === 0) {
        $.toptip('请选择要投票的节目', 'error');
        return;
    }
    if (j > 3) {
        $.toptip('不能选择太多节目哦', 'error');
        return;
    }
    var confirm = selected.join('，');
    $.confirm({
        title: '投票',
        text: '确定给：' + confirm + '投票吗？',
        onOK: function() {
            $.post('http://nh.gildata.com/money.php?action=pay', {
                act: confirm
            }, function(data) {
                if (data.match('error')) {
                    $.toptip(data.replace(/_error/, ''), 'error');
                } else {
                    $.toptip(data.replace(/_success/, ''), 'success');
                    setTimeout("history.go(0)", 2 * 1000);
                }
            });
        },
        onCancel: function() {}
    });
});
$("#info").click(function() {
    $.alert("<p>1. 每人最多可以投三个节目</p><p>2. 主持人说开始才能投</p><p>3. 票数最多的节目获最高人气奖</p>", "投票说明");
})


/*



http://nh.gildata.com/money.php?action=actlist


[
    {
        "actname": "：节目先保密",
        "part": ""
    },
    {
        "actname": "：到时候你就知道了",
        "part": ""
    },
    {
        "actname": "：刘老师真帅",
        "part": ""
    }
]

http://nh.gildata.com/money.php?action=pay

POST

投票还未开始_error

act:节目先保密，到时候你就知道了，刘老师真帅


*/
