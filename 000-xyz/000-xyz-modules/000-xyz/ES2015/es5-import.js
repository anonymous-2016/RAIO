'use strict';

var _es6Module = require('./es6-module.js');
var _es6Module2 = _interopRequireDefault(_es6Module);

var _es7Module = require('./es7-module.js');

var _esAllModule = require('./es-all-module.js');
var es_All = _interopRequireWildcard(_esAllModule);


function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)){
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}


