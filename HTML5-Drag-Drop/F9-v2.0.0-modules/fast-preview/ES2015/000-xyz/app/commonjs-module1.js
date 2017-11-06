// commonjs module 1

var CJSM1 = function CJSM1(params) {
    console.log('CJSM1 params = ', params);
    console.log("you just called commonjs module 1!");
};

exports.CJSM1 = CJSM1;
// module.exports = {
//     CJSM1: CJSM1
// };