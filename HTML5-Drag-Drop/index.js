let idExist = false;

function dragStart(ev) {
    // console.log(`%c dragStart ................................`, `color: #f0f`);
    // console.log(`ev.target.id = `, ev.target.id);
    // boxA
    let unique_name = `data-${ev.target.id}`;
    let unique_value = `${ev.target.id}001`;
    ev.target.setAttribute(unique_name, unique_value);
    ev.dataTransfer.effectAllowed = 'move';
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer#effectAllowed.28.29
    // copy, move ,link ,copyLink, copyMove, linkMove, all, none, or uninitialized.
    ev.dataTransfer.setData("xtext", ev.target.getAttribute('id'));
    // id ??? xtext
    // ev.dataTransfer.setDragImage(ev.target, 100, 100);
    // console.log(`\n \n`);
    return true;
}



function dragEnd(ev) {
    console.log(`dragEnd = `, ev.target.id);
    // dragEnd = boxA
    return true;
}


function dragDrop(ev) {
    console.log(`%c dragDrop .............................`, `color: red`);
    const id = ev.target.id || undefined;
    // console.log(`ev.target.id = \n`, ev.target.id);
    // idBox
    let data = ev.dataTransfer.getData("xtext");
    console.log(`data / id = `, data);
    let unique_name = `data-${ev.target.id}`;
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
        console.log(`arr = `, arr, typeof arr);
        // object
        console.log(`array ??? = `, Array.isArray(arr));
        // array ??? =  false
        for (let i = 0; i < arr.length; i++) {
            console.log(`arr[i] = `, arr[i]);
            idTest = arr[i].dataset[`${key}`];
            // 
            if (idTest) {
                break;
            }
            console.log(`idTest key = `, key);
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
    console.log(`idTest = `, idTest);
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
        ev.target.insertAdjacentHTML(`beforeend`, `<div data-${nid}="${data}"><h3>${data}</h3>😃 🙌 🎉 Tada/Hooray!</div>`);
    }
    console.log(`\n \n`);
    ev.stopPropagation();
    return false;
}

function dragEnter(ev) {
    event.preventDefault();
    return true;
}

function dragOver(ev) {
    event.preventDefault();
    // return true;
}




