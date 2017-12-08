/**
 * @constant NSB_TS_FV.Modules 
 * @description NameSpaces of all modules
 * @argument module_uid 
 * @author xgqfrms
 * @copyright www.gildata.com 2017-present
 * @license MIT
 */

const debug = false;

/* 
    // var debug = debug || false;
    if (typeof debug === "undefined") {
        var debug = false;
    }else{
        console.log(`debug =`, debug);
    }

*/


// namespaces
// var NEW_SB_TS_FV = NEW_SB_TS_FV || {};
var NSB_TS_FV = NSB_TS_FV || {};

// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};

// IIFE === Closure!
// NSB_TS_FV.Modules.mainModule = NSB_TS_FV.Modules.mainModule || (() => {})();


NSB_TS_FV.Modules.mainModule = NSB_TS_FV.Modules.mainModule || (() => {
    // call load all modules
    const loadAllModules = (args = []) => {
        // args === modules name list
        // NSB_TS_FV.Modules.m1.init();
        // NSB_TS_FV.Modules.m2.init();
        // NSB_TS_FV.Modules.m3.init();
    };
    // version
    const version = `NSB_TS_FV: v1.1.1`;
    // initailize
    const init = (args = []) => {
        console.log(`init...`);
        // let args_str = [...args];
        // Uncaught TypeError: args is not iterable
    };
    return {
        // init: init,
        init,
        version
    };
})();











