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
