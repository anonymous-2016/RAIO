 // global function
 const emptyChecker = (key = ``) => {
    // arr.map() ???
    let result = true;
    switch (key) {
        case undefined:
            result = false;
            break;
        case null:
            result = false;
            break;
        // case "--":
        //     result = false;
        //     break;
        default:
            break;
    }
    return result;
};
