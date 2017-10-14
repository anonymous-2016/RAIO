
/**
 * Base64HashGenerator
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} str 
 * @param {Boolean} debug 
 */

const Base64HashGenerator = (str = `Base64HashGenerator`, debug = false) => {
    // debug = true;
    if (debug) {
        console.log(`str = `, str);
    }
    if(typeof str === `string`){
        // do nothing!
    }else{
        str = `xgqfrms is the author!`;
        if (debug) {
            console.log(`shaped str = `, str);
        }
    }
    let new_str = ``;
    if (str.length === 0) {
        new_str = `Base64HashGenerator`;
    }else if(str.length >= 100){
        new_str = str.substr(0,100);
    }else if(str.length >= 1 && str.length < 10){
        new_str = str.repeat(10);
    }else{
        new_str = str;
    }
    if (debug) {
        console.log(`new_str = `, new_str);
    }
    let Float_num = Math.random()*10;// [0, 1)
    let Int_num = Math.ceil(Float_num);// [1, 10]
    // Math.ceil(Math.random()*100);
    // Math.pow(2, 3); === 2**3;
    let begin_num = Math.ceil(Math.random()*3);// [1, 4)
    const hash = window.btoa(new_str.slice(begin_num, ((Int_num > 7) ? Int_num : 7)));
    // auto copy
    copy(hash);
    return hash;
};


// test

Base64HashGenerator();
Base64HashGenerator({});
Base64HashGenerator([]);
Base64HashGenerator(`hello world!`);

const str = `
    this is a very very very long string!
`;
Base64HashGenerator(str, true);


/* 

let weight = ``;

let S = 0, M = 50, L = 100;

switch (weight) {
    case S:
        // new_str = `Base64HashGenerator`;
        break;
    case M:
        // new_str = new_str.repeat();
        break;
    case L:
        // new_str = new_str.substr(0,100);
        break;
    default:
        break;
}

*/
// IIFE

