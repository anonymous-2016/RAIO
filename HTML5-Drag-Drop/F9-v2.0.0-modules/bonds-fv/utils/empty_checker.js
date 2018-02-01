const emptyChecker = (key = ``) => {
    let result = true;
    switch (key) {
        case ``:
            result = false;
            break;
        case `--`:
            result = false;
            break;
        case undefined:
            result = false;
            break;
        case null:
            result = false;
            break;
        default:
            break;
    }
    console.log(`result = `, result);
    return result;
};

// demo

const json = {
    // "date": "2018-01-01",// undefined
    "null": null,// null
    "ok": "123.456",
    "empty": "",// empty value
    "stripes": "--",// invalid value
};

emptyChecker(json.date);
// result =  false
// false
emptyChecker(json.null);
// result =  false
// false
emptyChecker(json.ok);
// result =  true
// true
emptyChecker(json.empty);
// result =  false
// false
emptyChecker(json.stripes);
// result =  false
// false
emptyChecker();// default
// result =  false
// false
