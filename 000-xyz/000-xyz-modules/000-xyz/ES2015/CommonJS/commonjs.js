// no dependency
var ABC = "";
function fucA() {
    // m
}

exports.fucA = fucA;
exports.ABC = ABC;


// dependency
const ma = require(`a.js`);
const mb = require(`b.js`);

function fucA() {
    // ma
}
function fucB() {
    // mnb
}

// exports.fucA = fucA;
// exports.fucB = fucB;
module.exports = {
    fucA: fucA,
    fucB: fucB
};

// module.exports === exports !!!


/* 

    // System.config({ ... }) 
    System.config({
        meta: {
            format: 'cjs'
            // module format
        }
    });
    // entry js
    SystemJS.import('/js/main.js');

*/