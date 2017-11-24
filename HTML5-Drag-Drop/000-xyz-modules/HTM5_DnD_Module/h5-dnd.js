let idExist = false;

const dragStart = (e) => {
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

const dragLeave = (e) => {
    console.log(`dragLeave = `, e.target.id);
    // dragLeave = boxA
    return true;
}

const dragEnd = (e) => {
    console.log(`dragEnd = `, e.target.id);
    // dragEnd = boxA
    console.log(`\n `);
    return true;
}


const dragEnter = (e) => {
    console.log(`dragEnter = `, e.target.id);
    event.preventDefault();
    return true;
}

const dragOver = (e) => {
    console.log(`dragOver = `, e.target.id);
    event.preventDefault();
    return true;
}

// ondragexit="dragExit(event)"
const dragExit = (e) => {
    console.log(`dragExit = `, e.target.id);
    event.preventDefault();
    return true;
}

// ondrag="drag(event)"
const drag = (e) => {
    console.log(`%c drag .............................`, `color: red`);
    console.log(`drag = `, e.target.id);
    event.preventDefault();
    return true;
}


const dragDrop = (e) => {
    // console.log(`%c dragDrop .............................`, `color: red`);
    const id = e.target.id || undefined;
    // console.log(`e.target.id = `, e.target.id);
    console.log(`dragDrop = `, e.target.id);
    // idBox
    let data = e.dataTransfer.getData("xtext");
    console.log(`data / id = `, data);
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
        // alert(`can not duplicate drop it again!`);
    }else{
        // console.log(`data = \n`, data);
        // boxA
        let nid = data.toLowerCase();
        console.log(`nid = \n`, nid);
        // e.target.insertAdjacentHTML(`beforeend`, `<div data-${nid}="${data}"><h3>${data}</h3>😃 🙌 🎉 Tada/Hooray!</div>`);
        // const url = `https://cdn.xgqfrms.xyz/json/xgqfrms.json?q=${data}`;
        let url = ``;
        switch (nid) {
            case "boxa":
                url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
                break;
            case "boxb":
                url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;
                break;
            case "boxc":
                url = `http://10.1.5.202/webservice/fastview/stock/stockfast03/600570.SH`;
                break;
            default:
                break;
        }
        // const url = `./data.json?q=${data}`;
        // http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH?q=stockfast01
        // firebase
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                // console.log(`json datas = \n`, JSON.stringify(json, null, 4));
                let nd = JSON.stringify(json, null, 4);
                // map() array
                e.target.insertAdjacentHTML(
                    `beforeend`,
                    `<div data-${nid}="${data}" id="${data}" draggable="true" ondragstart="dragStart(event)" ondragover="dragOver(event)" >
                        <img src="./img/${data.substr(3).toLowerCase()}.png" />
                        <pre>${nd}</pre>
                    </div>`
                    // <img src="${json.courses.completed[0].badge}" />
                );
                // e.target.insertAdjacentHTML(`beforeend`,`<pre>${JSON.stringify(json, null, 4)}</pre>`);
            }
        )
        .catch(err => console.log(`err`, err));
    }
    // console.log(`\n \n`);
    e.stopPropagation();
    // in case open new browser tab ???
    return false;// over
}



// ondragDelete

const dragDelete = (e) => {
    e.preventDefault();
    console.log(`dragDelete = `, e.target.id);
    // idBox
    // dragLeave = boxA
    // console.log(`%c dragStart ................................`, `color: #f0f`);
    // console.log(`e.target.id = `, e.target.id);
    // boxA
    // let dielete_id = e.target.id;
    let idBox = document.querySelector(`#idBox`);
    let key = e.target.id.toLowerCase();
    let removeDiv = idBox.querySelector(`div#key`);
    return true;
}

/* const dragLeave = (e) => {
    console.log(`dragLeave = `, e.target.id);
    // dragLeave = boxA
    return true;
} */
