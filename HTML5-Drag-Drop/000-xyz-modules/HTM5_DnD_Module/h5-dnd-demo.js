var $ = function(selector) {
    if (!selector) { return []; }
    var arrEle = [];
    if (document.querySelectorAll) {
        arrEle = document.querySelectorAll(selector);
    } else {
        var oAll = document.getElementsByTagName("div"), lAll = oAll.length;
        if (lAll) {
            var i = 0;
            for (i; i<lAll; i+=1) {
                if (/^\./.test(selector)) {
                    if (oAll[i].className === selector.replace(".", "")) {
                        arrEle.push(oAll[i]);
                    }
                } else if(/^#/.test(selector)) {
                    if (oAll[i].id === selector.replace("#", "")) {
                        arrEle.push(oAll[i]);
                    }
                }
            }
        }
    }
    return arrEle;
};

var eleDustbin = $(".dustbin")[0], eleDrags = $(".draglist"), lDrags = eleDrags.length, eleRemind = $(".dragremind")[0], eleDrag = null;
for (var i=0; i<lDrags; i+=1) {
    eleDrags[i].onselectstart = function() {
        return false;
    };
    eleDrags[i].ondragstart = function(ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target, 0, 0);
        eleDrag = ev.target;
        return true;
    };
    eleDrags[i].ondragend = function(ev) {
        ev.dataTransfer.clearData("text");
        eleDrag = null;
        return false
    };
}
eleDustbin.ondragover = function(ev) {
    ev.preventDefault();
    return true;
};

eleDustbin.ondragenter = function(ev) {
    this.style.color = "#ffffff";
    return true;
};
eleDustbin.ondrop = function(ev) {
    if (eleDrag) {
        eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
        eleDrag.parentNode.removeChild(eleDrag);
    }
    this.style.color = "#000000";
    return false;
};
