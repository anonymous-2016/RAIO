/*

1. get DOM

2. Print DOM & css

???

1. get data

2. create DOM

3. Print DOM & css


.table-company-status




*/

let tables = document.getElementsByClassName(`table-company-status`);
// copy(tables[0]);


let table = document.querySelector(`.table-company-status`);

window.print(tables[0]);

// let print_btn = document.querySelector(`.print .default`);// BAD
let print_btn = document.querySelector(`.print.default`);// OK
print_btn.click();
// onPrintButtonClick_();

/*

chrome://resources/js/util.js

chrome://print/print_preview.js

*/



const AutoPrintPDF = (debug = false) => {
    let table = document.querySelector(`.table-company-status`),
        print_btn = document.querySelector(`.print.default`);
    window.print(table);
    // ???
    if (print_btn !== null) {
        print_btn.click();
    }else{
        alert(`failed get print_btn!`);
    }
    // Uncaught TypeError: Cannot read property 'click' of null
    // return ???;
    if (debug) {
        console.log(`table`, table);
        console.log(`print_btn`, print_btn);
    }
};

AutoPrintPDF(true);
AutoPrintPDF();

