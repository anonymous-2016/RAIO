// h5-dnd-nav-box


let lis = document.querySelectorAll(`.h5-dnd-nav-box`);

let divs = document.querySelectorAll(`.h5-dnd-nav-box`);

// divs[0].attributes;

// NamedNodeMap {0: class, length: 1}

lis[i].addEventListener(`click`, (i) => {
    // divs[0].getAttribute()
    // divs[0].setAttribute()
    if (divs[i].hasAttribute("show")) {
        divs[i].classList.remove("show");
        divs[i].classList.add("hide");
    }else{
        ivs[i].classList.add("show");
        divs[i].classList.remove("hide");
    }
});





