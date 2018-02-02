var wsServer = 'ws://nh.gildata.com:9505';
var websocket = new WebSocket(wsServer);
websocket.onopen = function(evt) {
    console.log("Connected to WebSocket server.");
};
$("#danmu").bind("input propertychange change", function(event) {
    var count = $("#danmucount");
    var num = $("#danmu").val().length;
    count.html(num);
    if (num > 50) {
        count.css("color", "red");
    } else {
        count.css("color", "");
    }
});
$("#send").click(function() {
    var text = $("#danmu").val();
    var color = $('#color').val();
    var position = $('#position').val();
    var size = $('#size').val();
    var num = text.length;
    if (num > 50) {
        $.toptip("弹幕长度太长啦", "error");
        return;
    }
    if (num === 0) {
        $.toptip("还没输入弹幕呢", "error");
        return;
    }
    text = text.replace(/\"/g, "\\\"");
    var text_obj = '{ "text":"' + text + '","color":"' + color + '","size":"' + size + '","position":"' + position + '"';
    websocket.send(text_obj);
    $("#danmu").val('');
    $("#danmucount").html('0');
    $.toptip("发送成功", "success");
});
