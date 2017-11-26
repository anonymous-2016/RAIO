// default sequential

function PromiseMulti(params) {
    let result1 = new PromiseFunc1(params);
    let result2 = new PromiseFunc2(params);
    let result3 = new PromiseFunc3(params);
}



// Promise.all() & parallel
function PromiseMulti(params) {
    let results = Promise.all(
        PromiseFunc1(params),
        PromiseFunc2(params),
        PromiseFunc3(params)
    );
    // only all fullfilled / one rejected will return!
}




















