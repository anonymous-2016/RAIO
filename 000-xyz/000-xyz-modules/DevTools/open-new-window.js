/**
 * @description open a new window with fetch's data!
 * @author xgqfrms
 * @license MIT
 * @argument
 */


/* 

<div data-uid="NewWindowHTMLContent">
    <p>Your content here</p>
</div>

<a href="#" data-uid="open_new_window">Open</a>

*/

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM fully loaded and parsed");
    const ONW = () => {
        const w = window.open();
        let html = `<p>HTML Content</p>`;
        w.document.head.innerHTML = `<title>公司新闻</title>`;
        w.document.body.innerHTML = html;
        setTimeout(() => {
            alert(`Warning: closing new window!`);
            w.close();
        }, 3000);
    };
    (() => {
        let uid = document.querySelector(`[data-uid="open_new_window"]`);
        uid.addEventListener(`click`, (e) => {
            e.preventDefault();
            ONW();
        });
    })();
});






window.onload = (() => {
    let uid = document.querySelector(`[data-uid="open_new_window"]`);
    uid.addEventListener(`click`, (e) => {
        e.preventDefault();
        ONW();
    });
})();
const ONW = () => {
    const w = window.open();
    let html = `<p>HTML Content</p>`;
    w.document.head.innerHTML = `<title>公司新闻</title>`;
    w.document.body.innerHTML = html;
    setTimeout(() => {
        alert(`Warning: closing new window!`);
        w.close();
    }, 3000);
};


















// namespace
var ABC_XYZ = ABC_XYZ = {};
// in case of const/let bug!

// sub namespace
ABC_XYZ.Utils = ABC_XYZ.Utils = {};

ABC_XYZ.Utils.ONW = ABC_XYZ.Utils.ONW || (
    (data = ``) => {
        // 
        const init = () => {
            console.log(`initialing...`);
        };
        return {
            init
        };
    }
);

/* 

ABC_XYZ.Utils.ONW = ABC_XYZ.Utils.ONW || (
    (data = ``) => {
        // 
        ABC_XYZ.Utils.ONW.init = ABC_XYZ.Utils.ONW.init || (() => {
            console.log(`initialing...`);
        });
    }
);

*/

ABC_XYZ.Utils.ONW().init();
// ABC_XYZ.Utils.ONW.init();



// namespace
var ABC_XYZ = ABC_XYZ = {};
// in case of const/let bug!

// sub namespace
ABC_XYZ.Utils = ABC_XYZ.Utils = {};


ABC_XYZ.Utils.ONW = ABC_XYZ.Utils.ONW || (
    (data = ``) => {
        console.log(`ABC_XYZ.Utils.ONW`);
    }
);
ABC_XYZ.Utils.ONW.init = ABC_XYZ.Utils.ONW.init || (() => {
    console.log(`initialing...`);
});

ABC_XYZ.Utils.ONW.init();
// ABC_XYZ.Utils.ONW().init();






















