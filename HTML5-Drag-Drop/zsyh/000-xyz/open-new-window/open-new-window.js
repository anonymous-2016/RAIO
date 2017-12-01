// window.onload !== document.onload

window.onload = function(){
    TestModal(true);
    openNewWindow(true);
};

const TestModal = (debug = false) => {
    let hash = document.querySelector(`[data-hash="modal"]`);
    hash.addEventListener(`click`, (e) => {
        // e.preventDefault();
        if (debug) {
            console.log(`e`, e);
            console.log(`e.target`, e.target);
            console.log(`e.target.dataset`, e.target.dataset);
            console.log(` %c e.target.dataset.hash =`, `color: #f0f;`, e.target.dataset.hash);
        }
    });
};


const openNewWindow = (debug = false) => {
    let open = document.querySelector(`[data-open="window"]`);
    let new_window = ``;
    open.addEventListener(`click`, (e) => {
        // e.preventDefault();
        let options = {
            // url: `./new-window.html`,
            url: `./window.html`,
            name: "new window title",
            features: `
                width=800,
                height=600,
                menubar=yes,
                location=yes,
                resizable=yes,
                scrollbars=yes,
                status=yes
            `
            // options
        };
        if (debug) {
            console.log(`e`, e);
            console.log(`e.target`, e.target);
            console.log(`e.target.dataset`, e.target.dataset);
            console.log(`\n%c e.target.dataset.open =`, `color: #f0f;`, e.target.dataset.open);
        }
        let uid = e.target.dataset.open || ``;
        if (uid === "window") {
            let isExist = windowExistChecker(true);
            if (debug) {
                console.log(`uid = `, uid, typeof uid);
                console.log(`isExist = `, isExist, typeof isExist);
            }
            if (!isExist) {
                new_window = window.open(options.url, options.name, options.features);
                if (debug) {
                    console.log(`new_window = `, new_window, typeof new_window);
                }
            }
        }
        return false;
    });
};


// data-uid="new-window"

const windowExistChecker = (debug = false) => {
    let new_window_uid = document.querySelector(`[data-uid="new-window"]`);
    if (debug) {
        console.log(`\n%c new_window_uid = `, `color: #0f0;`, new_window_uid, typeof new_window_uid);
    }
    let result = false;
    if (new_window_uid !== null) {
        result = true;
    }
    return result;
};

let new_window = ``;

// , debug = false
const TestWindow = (e) => {
    const debug = true;
    if (debug) {
        console.log(`e`, e);
        console.log(`e.target`, e.target);
        // <a href="./new-window.html" name="windowName" onclick="TestWindow(event);return false;">Test Window</a>
        console.log(`e.target.dataset`, e.target.dataset);
        console.log(`e.target.name`, e.target.name);
        // windowName
        // console.log(` %c e.target.dataset.name =`, `color: #f0f;`, e.target.dataset.name);
    }
    if (debug) {
        console.log(`before & new_window =\n`, new_window, typeof new_window);
        // string
    }
    // window.open(e.target.href, e.target.name,'width=800,height=600');
    new_window = window.open(e.target.href, e.target.name,'width=800,height=600');
    // return value ???
    if (debug) {
        console.log(`after & new_window =\n`, new_window, typeof new_window);
        // object
        console.log(`new_window.document.body =\n`, new_window.document.body);
    }
    // return false;
    new_window.document.body.innerText = `holy shit!`;
    if (debug) {
        console.log(`modified & new_window.document.body =\n`, new_window.document.body);
        // <body>holy shit!</body>
    }
};


/*

(
    function (event){
        TestWindow();
        return false;
    }
)

*/
