/* var table = document.getElementsByTagName("table")[0];
var tbody = table.getElementsByTagName("tbody")[0];


tbody.onclick = function (e) {
    e = e || window.event;
    var data = [];
    var target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        target = target.parentNode;
    }
    if (target) {
        var cells = target.getElementsByTagName("td");
        for (var i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
        }
    }
    alert(data);
};
 */

let tables = document.querySelectorAll(".table"),
    table = tables[0];

let tbodys = table.querySelectorAll(".tbody"),
    tbody = tbodys[0];

tbody.onclick = (e) => {
    e = e || window.event;
    let data = [],
        target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        // 
        target = target.parentNode;
    }
    if (target) {
        let cells = target.getElementsByTagName("td");
        for (let i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
        }
    }
    console.log(`data = \n`, data);
};


/* 

https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement

> Event.srcElement是标准Event.target属性的专有别名。
它是特定于旧版本的Microsoft Internet Explorer。

*/
