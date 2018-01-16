
// color generator
const CG = () => {
    // Math.random() === [0, 1);
    // [0, 255] & int
    let R = Math.ceil(Math.random()*255);// int
    let G = Math.ceil(Math.random()*255);// int
    let B = Math.ceil(Math.random()*255);// int
    // [0, 1) & float
    let f1 = Number.parseFloat(((Math.random()*10+1)/10).toString().substr(0,3));
    let f2 = Number.parseFloat(((Math.random()*10)/10).toString().substr(0,3));
    // let A = Math.random() > 0.5 ? f1: f2;// float
    let bright = Math.random();
    let A = bright > 0.5 ? bright : 1;// float
    // let A = Math.random()*1;// float
    // OK === color: rgba(98,26,166,0.888888888) !important;
    // BAD === color: rgba(98.7,26,166,0.888888888) !important;
    // return `rgba(${R},${G},${B},${A}) !important`;
    return `rgba(${R},${G},${B},${A})`;
    // no !important
    // return [R,G,B,A];
    /*
        return {
            R: R,
            G: G,
            B: B,
            A: A
        };
        return {
            "R": R,
            "G": G,
            "B": B,
            "A": A
        };
        return {
            R,
            G,
            B,
            A
        };
    */
    // return `rgba(${R},${G},${B},${A})`;
    // Math.random().toString().substr(0,3);
    // "0.0"
    // Number.parseFloat(((Math.random()*10+1)/10).toString().substr(0,3));
    // 1, 0.7, 0.3,
    // Number.parseFloat(((Math.random()*10)/10).toString().substr(0,3));
    // 0, 0.7, 0.3,
};
