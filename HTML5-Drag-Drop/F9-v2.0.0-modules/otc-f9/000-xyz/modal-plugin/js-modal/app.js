"use strict";



// modal & data
var myContent = document.getElementById('content');

// instance
var myModal = new Modal({
    // modal node
    content: myContent,
});

// var triggerButton = document.getElementById('trigger');

// triggerButton.addEventListener('click', function() {
//     myModal.open();
// });


// links

const links = document.querySelectorAll(`[data-modal="modal-link"]`);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        myModal.open();
    });
}

// font buttons

const font = document.querySelector(`[data-modal="modal-font"]`);
// proxy
font.addEventListener('click', function(e) {

// const fonts = document.querySelectorAll(`[data-modal="modal-font"]`);
// fonts[1].addEventListener('click', function(e) {
    // myModal.open();
    console.log(`e.target.dataset.modalFont =`, e.target.dataset.modalFont);
    // if data-modal="data-font-big"
    let key = e.target.dataset.modalFont.substr(10),
        value = ``;
    switch (key) {
        case `big`:
        case `middle`:
        case `small`:
            value = `fontsize-${key}`;
            break;
        default:
            break;
    }
    console.log(`key =`, key);
    console.log(`value =`, value);
    // this.content.classList.add(value);
    // let content = document.querySelector(`[data-modal="content"]`);
    // let content = font.parentElement.nextElementSibling;
    let content = this.parentElement.nextElementSibling;
    // let content = fonts[1].parentElement.nextElementSibling;
    content.className = ``;
    console.log(`content =`, content, content.classList);
    content.classList.add(value);
    console.log(`content =`, content, content.classList);
    // content.classList.toggle(`fontsize-big`);
});


