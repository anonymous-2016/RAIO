let elem1 = document.getElementById("elemId");

let style = window.getComputedStyle(elem1, null);

// 它等价于

let styles = document.defaultView.getComputedStyle(elem1, null);

