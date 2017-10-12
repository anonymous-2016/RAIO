// excel (.xls) 2007


let tb = document.querySelector('.fv-important-infos-table');

let arr = [];
//let arr = ['<a id="a"><b id="b">hey!</b></a>'];

arr.push(tb);

let blob = new Blob(arr, {type: 'application/vnd.ms-excel'});



