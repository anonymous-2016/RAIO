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




STOCK_F9.Summary.ModalTest = STOCK_F9.Summary.ModalTest  || ((cell_uid = ``, debug = false) => {
    let modal = document.querySelector(`[data-modal="modal"]`),
        close = document.querySelector(`[data-modal="close"]`),
        // btn = document.querySelector(`[data-uid="modal"]`);
        btn = document.querySelector(cell_uid);
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
});

STOCK_F9.Summary.ModalTest.dragableModal = STOCK_F9.Summary.ModalTest.dragableModal || ((modal_uid = ``, debug = false) => {
    if (debug) {
        console.log(`$ = `, $);
    }
    // $("#modal_uid").draggable();
    let id = `#${modal_uid}`;
    $(id).draggable();
});


/*


// STOCK_F9.Summary.ModalTest(cell_uid, true);
// STOCK_F9.Summary.ModalTest.dragableModal(cell_uid, true);

// dataset.datas & dataset.title
STOCK_F9.Summary.ModalTest(cell_uid);
STOCK_F9.Summary.ModalTest.dragableModal(modal_uid);



*/
