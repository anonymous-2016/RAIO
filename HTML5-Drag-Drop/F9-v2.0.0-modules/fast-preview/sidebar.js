// h5-dnd-nav-box




let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);

let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);

// divs[0].attributes;

// NamedNodeMap {0: class, length: 1}
// lis.map((i) => console.log(`i`, i));
// Uncaught TypeError: lis.map is not a function

lis.forEach(function(obj, i, arr) {
    console.log(`obj = `, obj);
    console.log(`i = `, i);
    if (i === 0) {
        console.log(`arr = \n`, arr);
    }
    // e === a ???
    // screenX: 67, screenY: 76, clientX: 67, clientY: 10
    lis[i].addEventListener(`click`, (e) => {
        console.log(`e = `, e);
        console.log(`typeof e = `, typeof e);
        let e_classes = e.target.classList;
        let e_datas = e.target.dataset;
        console.log(`e classes= `, e_classes);
        console.log(`e datas= `, e_datas);
        // divs[0].getAttribute()
        // divs[0].setAttribute()
        // Uncaught TypeError: Cannot read property 'hasAttribute' of undefined
        console.log(`divs[i] = `, divs[i]);
        console.log(`divs[i].classList = `, divs[i].classList);
        console.log(`divs[i].hasAttribute("show") = `, divs[i].hasAttribute("show"));
        // divs[0].attributes.class
        // "h5-dnd-nav-box h5-dnd-nav-box-active show"
        if (divs[i].hasAttribute("show")) {
            divs[i].classList.remove("show");
            divs[i].classList.add("hide");
        }else{
            divs[i].classList.add("show");
            divs[i].classList.remove("hide");
        }
    });
}, this);// this ???


/* 

arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);

*/


// data-nav-li="nav-li"
// data-nav-box="nav-box"





// JS Benchmark


var arr = [];
for (var i = 0; i < 1000; i++) {
    arr[i] = i;
}

function someFn(i) {
    return i * 3 * 8;
}





