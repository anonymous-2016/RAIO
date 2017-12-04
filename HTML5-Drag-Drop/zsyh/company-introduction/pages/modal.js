// data-uid="modal"


/*

<button data-datas="this is modal content datas." data-title="this is modal title!" data-uid="modal">
    show modal & data
</button>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

*/


// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Summary = STOCK_F9.Summary || {};




STOCK_F9.Summary.ModalTest = STOCK_F9.Summary.ModalTest  || ((cell_uid = ``, id, debug = false) => {
    let modal = document.querySelector(`[data-modal="modal"]`),
        close = document.querySelector(`[data-modal="close"]`),
        // btn = document.querySelector(`[data-uid="modal"]`);
        btn = document.querySelector(cell_uid),
        uid = `#${id}`;
    // $("#modal_uid").draggable();
    if (debug) {
        console.log(`modal = \n`, modal);
        console.log(`btn = \n`, btn);
    }
    close.addEventListener(`click`, (e) => {
        if (debug) {
            console.log(`e = \n`, e);
            console.log(`e.target = \n`, e.target);
            console.log(`e.target.dataset = \n`, e.target.dataset);
        }
        modal.classList.add(`modal-box-hidden`);
        modal.classList.remove(`modal-box-show`);
    });
    btn.addEventListener(`click`, (e) => {
        if (debug) {
            console.log(`e = \n`, e);
            console.log(`e.target = \n`, e.target);
            console.log(`e.target.dataset = \n`, e.target.dataset);
        }
        modal.classList.add(`modal-box-show`);
        modal.classList.remove(`modal-box-hidden`);
        let data = btn.dataset.datas,
            title = btn.dataset.title;
        if (debug) {
            console.log(`data = \n`, data);
            console.log(`title = \n`, title);
        }
        // modal.children[0].innerHTML = `<h1 class="code-style">${title}</h1>`;
        modal.children[0].innerHTML = `<span class="code-style">图形</span>`;
        modal.children[1].innerHTML = `<div class="code-style">${data}</div>`;
        // modal.insertAdjacentElement
        // modal.insertAdjacentHTML
        // modal.insertAdjacentText
    });
    // $(uid).draggable();
    /*
    window.onload = () => {
        // STOCK_F9.Summary.ModalTest(true);
        STOCK_F9.Summary.ModalTest();
    };
    */
    modal.addEventListener(`drag`, (e) => {
        console.log(`e = \n`, e);
        // console.log(`e.target = \n`, e.target);
        // console.log(`e.target.dataset = \n`, e.target.dataset);
        console.log(`e.pageX = \n`, e.pageX);
        console.log(`e.pageY = \n`, e.pageY);
    });
    modal.addEventListener("dragstart", function(event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = 0.5;
    }, false);
    modal.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "";
    }, false);
    // modal.parent ??? parentNode
    let box = document.querySelector(`[data-modal-box="modal-box"]`);
    /* events fired on the drop targets */
    box.addEventListener("dragover", function(event) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    box.addEventListener("dragenter", function(event) {
    }, false);

    box.addEventListener("dragleave", function(event) {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.className == "dropzone") {
            event.target.style.background = "";
        }
    }, false);
    box.addEventListener("drop", function(e) {
        e.preventDefault();
        console.log(`e = \n`, e);
        console.log(`e.pageX = \n`, e.pageX);
        console.log(`e.pageY = \n`, e.pageY);
        console.log(`dragged = `, dragged);
        event.target.style.opacity = 1;
        event.target.style.top = e.pageY;
        event.target.style.left = e.pageX;
    }, false);
    // modal.style.top = pageX,  modal.style.left = pageY;
});

STOCK_F9.Summary.ModalTest.dragableModal = STOCK_F9.Summary.ModalTest.dragableModal || ((modal_uid = ``, debug = false) => {
    $(function() {
        if (!debug) {
            console.log(`$ = `, $);
        }
        let id = `#${modal_uid}`;
        // $("#modal_uid").draggable();
        $(id).draggable();
        $(id).mousedown(function(e) {
            console.log(`e = `, e);
            // $(this).css("cursor", "pointer");
        });
    });
});


/*


// STOCK_F9.Summary.ModalTest(cell_uid, true);
// STOCK_F9.Summary.ModalTest.dragableModal(cell_uid, true);

// dataset.datas & dataset.title
STOCK_F9.Summary.ModalTest(cell_uid);
STOCK_F9.Summary.ModalTest.dragableModal(modal_uid);



*/
