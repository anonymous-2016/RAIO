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
        // console.log(`divs[i].hasAttribute("show") = `, divs[i].hasAttribute("show"));
        // console.log(`divs[i].classList.contains(\`show\`) = `, divs[i].classList.contains(`show`));
        // divs[0].attributes.class
        // "h5-dnd-nav-box h5-dnd-nav-box-active show"
        // divs[i].hasAttribute("show")
        // h5-dnd-nav-box-hidden
        console.log(`i = `, i);
        console.log(`show ${divs[i].classList.contains(`h5-dnd-nav-box-hidden`)}`);
        if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
            // divs[i].classList.add("h5-dnd-nav-box-hidden");
            // divs[i].classList.remove("h5-dnd-nav-box-active");
        }else{
            divs[i].classList.add("h5-dnd-nav-box-active");
            divs[i].classList.remove("h5-dnd-nav-box-hidden");
            let arr = [0,1,2];
            // arr rempove i
            arr.map(
                (item, index) =>{
                    console.log(`item = ${item}`);
                    console.log(`index = ${index}`);
                    if(item !== i){
                        if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                            divs[item].classList.remove("h5-dnd-nav-box-active");
                            divs[item].classList.add("h5-dnd-nav-box-hidden");
                        }
                    }
                }
            );
        };
    });
}, this);// this ???

/* 


const arr = [3,4];
// (2) [3, 4]
arr.map((i) => console.log(`i = ${i}`));
// i = 3
// i = 4



    if (divs[i].classList.contains(`show`)) {
        divs[i].classList.remove("show");
        divs[i].classList.add("hide");
    }else{
        divs[i].classList.add("show");
        divs[i].classList.remove("hide");
    }
    

divs[0].classList.contains(`show`);
// true

divs[0].classList.value;
// "h5-dnd-nav-box h5-dnd-nav-box-active show"


// 在为属性设置新值前检测该属性是否存在
var d = document.getElementById("div1"); 

if (d.hasAttribute("align")) { 
    d.setAttribute("align", "center"); 
}


if (d.hasAttribute("class")) { 
    d.setAttribute("class", "show"); 
}



*/


/* 

arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);

*/


// data-nav-li="nav-li"
// data-nav-box="nav-box"








