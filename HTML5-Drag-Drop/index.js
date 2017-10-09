let idExist = false;

function dragStart(e) {
    console.log(`dragStart = `, e.target.id);
    // dragLeave = boxA
    // console.log(`%c dragStart ................................`, `color: #f0f`);
    // console.log(`e.target.id = `, e.target.id);
    // boxA
    let unique_name = `data-${e.target.id}`;
    let unique_value = `${e.target.id}001`;
    e.target.setAttribute(unique_name, unique_value);
    e.dataTransfer.effectAllowed = 'move';
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer#effectAllowed.28.29
    // copy, move ,link ,copyLink, copyMove, linkMove, all, none, or uninitialized.
    e.dataTransfer.setData("xtext", e.target.getAttribute('id'));
    // id ??? xtext
    // e.dataTransfer.setDragImage(e.target, 100, 100);
    // console.log(`\n \n`);
    return true;
}

function dragLeave(e) {
    console.log(`dragLeave = `, e.target.id);
    // dragLeave = boxA
    return true;
}

function dragEnd(e) {
    console.log(`dragEnd = `, e.target.id);
    // dragEnd = boxA
    console.log(`\n `);
    return true;
}


function dragEnter(e) {
    console.log(`dragEnter = `, e.target.id);
    event.preventDefault();
    return true;
}

function dragOver(e) {
    console.log(`dragOver = `, e.target.id);
    event.preventDefault();
    return true;
}


function dragDrop(e) {
    // console.log(`%c dragDrop .............................`, `color: red`);
    const id = e.target.id || undefined;
    // console.log(`e.target.id = `, e.target.id);
    console.log(`dragDrop = `, e.target.id);
    // idBox
    let data = e.dataTransfer.getData("xtext");
    // console.log(`data / id = `, data);
    let unique_name = `data-${e.target.id}`;
    let low_unique_name = unique_name.substr(5).toLowerCase();
    // the attribute name after data- (note that dashes are converted to camelCase).
    // ??? camelCase ??? dashTocamelCase.js
    let idBox = document.querySelector(`#idBox`);

    let key = data.toLowerCase();
    let hasDiv = idBox.querySelector(`div`);
    let idTest = ``;
    // null
    if (hasDiv !== null) {
        // ??? map() 
        let arr = idBox.querySelectorAll(`div`);
        // console.log(`arr = `, arr, typeof arr);
        // object
        // console.log(`array ??? = `, Array.isArray(arr));
        // array ??? =  false
        for (let i = 0; i < arr.length; i++) {
            // console.log(`arr[i] = `, arr[i]);
            idTest = arr[i].dataset[`${key}`];
            // 
            if (idTest) {
                break;
            }
            // console.log(`idTest key = `, key);
        }
        /* arr.map(
            (div, index) => {
                idTest = div.dataset[`${key}`];
            }
        ); */
        // idTest = idBox.querySelector(`div`).dataset[`${key}`];
        // first div
        // undefined / "boxA"
        // boxb
    }
    // console.log(`idTest = `, idTest);
    // undefined
    if(idTest !== null && idTest !== undefined && idTest !== ``){
        idExist = true;
    }else{
        idExist = false;
    }
    if (idExist) {
        // do not drop
        alert(`can not duplicate drop it again!`);
    }else{
        // console.log(`data = \n`, data);
        // boxA
        let nid = data.toLowerCase();
        e.target.insertAdjacentHTML(`beforeend`, `<div data-${nid}="${data}"><h3>${data}</h3>😃 🙌 🎉 Tada/Hooray!</div>`);
    }
    // console.log(`\n \n`);
    e.stopPropagation();
    // in case open new browser tab ???
    return false;// over
}






