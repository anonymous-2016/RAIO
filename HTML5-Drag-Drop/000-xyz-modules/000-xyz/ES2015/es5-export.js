

var addMath = function addMath() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var result = 0;
    result = params + args;
    return result;
};