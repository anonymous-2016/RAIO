//  random RGBA color generator

/**
 * random RGBA Color Generator & AutoCopy
 * xgqfrms
 * created 2017.10.23
 * @param {* uid} id 
 * @param {Boolean} debug 
 */

const randomRGBAColorGenerator = (id = ``, debug = false) => {
    // 16 进制 // [0-f]/[0-15]
    let range = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`,`f`];
    // let range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];// .toUpperCase();
    let rv = Math.random()*15,// [0, 15) => [0, 15]
        rsv = rv > 7.5 ? Math.ceil(rv) : parseInt(rv),// [0, 15) => [0, 15]
        gv = Math.random()*15,
        gsv = gv > 7.5 ? Math.ceil(gv) : parseInt(gv),
        bv = Math.random()*15,
        bsv = bv > 7.5 ? Math.ceil(bv) : parseInt(bv);
    let xrv = Math.random()*15,// [0, 15) => [0, 15]
        xrsv = xrv > 7.5 ? Math.ceil(xrv) : parseInt(xrv),// [0, 15) => [0, 15]
        xgv = Math.random()*15,
        xgsv = xgv > 7.5 ? Math.ceil(xgv) : parseInt(xgv),
        xbv = Math.random()*15,
        xbsv = xbv > 7.5 ? Math.ceil(xbv) : parseInt(xbv);
    let random_value = Math.random();// [0, 1) => [0, 1]
    let random_shaped_value = random_value > 0.99 ? Math.ceil(random_value) : (random_value < 0.01 ? 0 : (parseFloat(random_value > 0.9 ? random_value : random_value + 0.1).toFixed(2)));// [0, 1) => [0, 1]
    // ??? + 0.1
    // parseFloat & toFixed(2) ??? string
    // parseFloat(0.344546375703495);// 0.344546375703495
    // parseFloat(0.344546375703495).toFixed(2);//"0.34"
    // let random_shaped_value = random_value > 0.99 ? 1 : random_value;// [0, 1) => [0, 1]
    if (debug) {
        console.log(`rv = ${rv}, rsv = ${rsv} \n`);
        console.log(`gv = ${gv}, gsv = ${gsv} \n`);
        console.log(`bv = ${bv}, bsv = ${bsv} \n`);
        console.log(`random_value = ${random_value}, random_shaped_value = ${random_shaped_value} \n`);
        console.log(`xrv = ${xrv}, xrsv = ${xrsv} \n`);
        console.log(`xgv = ${xgv}, xgsv = ${xgsv} \n`);
        console.log(`xbv = ${xbv}, xbsv = ${xbsv} \n`);
    }
    let R = `${range[rsv]}`,// [0-f]/[0-15]
        G = `${range[gsv]}`, 
        B = `${range[bsv]}`,
        A = `${random_shaped_value}`,
        RGB = `${R}${G}${B}`,
        sR = (R === `f`) ? 255 : (R === `0` ? 0 : range.indexOf(R)*16),
        sG = (G === `f`) ? 255 : (G === `0` ? 0 : range.indexOf(G)*16),
        sB = (B === `f`) ? 255 : (B === `0` ? 0 : range.indexOf(B)*16),
        RGBA = `rgba(${sR},${sG},${sB},${A})`;// 255, 255, 255, 0.7
    let xR = `${range[xrsv]}`,// [0-f]/[0-15]
        xG = `${range[xgsv]}`, 
        xB = `${range[xbsv]}`,
        xRGB = `${xR}${xG}${xB}`;
    let result = `#${RGB}${xRGB}`;
    if (debug) {
        console.log(`R = ${R} \n`);// 8
        console.log(`G = ${G} \n`);// c
        console.log(`B = ${B} \n`);// c
        console.log(`A = ${A} \n`);// A = 0.8070941841384456 
        console.log(`xR = ${xR} \n`);// 8
        console.log(`xG = ${xG} \n`);// c
        console.log(`xB = ${xB} \n`);// c
        console.log(`sR = ${sR} \n`);// 8
        console.log(`sG = ${sG} \n`);// c
        console.log(`sB = ${sB} \n`);// c
        console.log(`RGB = ${RGB} \n`);
        console.log(`xRGB = ${xRGB} \n`);
        console.log(`RGBA = ${RGBA} \n`); 
        console.log(`result = ${result} \n`);
        // result = 8cc0.8070941841384456 
    }
    let uid = id ? id : `body`;
    if (debug) {
        console.log(`id = \n`, id);
        console.log(`uid = \n`, uid);
    }
    // insert to DOM ?
    copy(result);
    return result;
};

// test

let rgb = randomRGBAColorGenerator();
// "#4 fc5c9"
let rgb = randomRGBAColorGenerator(`xyz`, true);
// "#520e7 f"


let rgba = randomRGBAColorGenerator();
// 
let rgba = randomRGBAColorGenerator(`xyz`, true);
// "#f0b49b", rgba(255,0,176,0.92) 




// IIFE

let obj = ((id = ``, debug = false) => {
    // 16 进制 // [0-f]/[0-15]
    let range = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`,`f`];
    // let range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];// .toUpperCase();
    let rv = Math.random()*15,// [0, 15) => [0, 15]
        rsv = rv > 7.5 ? Math.ceil(rv) : parseInt(rv),// [0, 15) => [0, 15]
        gv = Math.random()*15,
        gsv = gv > 7.5 ? Math.ceil(gv) : parseInt(gv),
        bv = Math.random()*15,
        bsv = bv > 7.5 ? Math.ceil(bv) : parseInt(bv);
    let xrv = Math.random()*15,// [0, 15) => [0, 15]
        xrsv = xrv > 7.5 ? Math.ceil(xrv) : parseInt(xrv),// [0, 15) => [0, 15]
        xgv = Math.random()*15,
        xgsv = xgv > 7.5 ? Math.ceil(xgv) : parseInt(xgv),
        xbv = Math.random()*15,
        xbsv = xbv > 7.5 ? Math.ceil(xbv) : parseInt(xbv);
    let random_value = Math.random();// [0, 1) => [0, 1]
    let random_shaped_value = random_value > 0.99 ? Math.ceil(random_value) : (random_value < 0.01 ? 0 : (parseFloat(random_value > 0.9 ? random_value : random_value + 0.1).toFixed(2)));// [0, 1) => [0, 1]
    let R = `${range[rsv]}`,// [0-f]/[0-15]
        G = `${range[gsv]}`, 
        B = `${range[bsv]}`,
        RGB = `${R}${G}${B}`,
        xR = `${range[xrsv]}`,// [0-f]/[0-15]
        xG = `${range[xgsv]}`, 
        xB = `${range[xbsv]}`,
        xRGB = `${xR}${xG}${xB}`,
        A = `${random_shaped_value}`,
        sR = (R === `f`) ? 255 : (R === `0` ? 0 : range.indexOf(R)*16),
        sG = (G === `f`) ? 255 : (G === `0` ? 0 : range.indexOf(G)*16),
        sB = (B === `f`) ? 255 : (B === `0` ? 0 : range.indexOf(B)*16),
        RGBA = `rgba(${sR},${sG},${sB},${A})`;// 255, 255, 255, 0.7
    let result = {
        rgb: `#${RGB}${xRGB}`,
        rgba: `${RGBA}`
    };
    let uid = id ? id : `body`;
    // insert to DOM ?
    if (debug) {
        console.log(`id = \n`, id);
        console.log(`uid = \n`, uid);
    }
    copy(result);
    return result;
})(`xyz`, true);

