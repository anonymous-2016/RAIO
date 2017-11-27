/**
 * @description Application Modules NameSpaces Generator
 */

// create the root namespace and making sure we're not overwriting it
var APPMNSG = APPMNSG || {};

/* 

    var APPMNSG;
    // re-define, but will not overwrite it!
    if (APPMNSG !== undefined) {
        APPMNSG;
    }else{
        APPMNSG = {};
    }

*/

// create a general purpose namespace method this will allow us to create namespace a bit easier
APPMNSG.createNS = function (namespace) {
    var ns_modules_names_array = namespace.split(".");
    var parent = APPMNSG;
    // we want to be able to include or exclude the root namespace So we strip it if it's in the namespace
    if (ns_modules_names_array[0] === "APPMNSG") {
        new_ns_modules_names_array = ns_modules_names_array.slice(1);
    }
    // loop through the modules_names_array and create a nested namespace if necessary
    var ns_length = new_ns_modules_names_array.length;
    for (var i = 0; i < ns_length; i++) {
        var module_name = new_ns_modules_names_array[i];
        // check if the current parent already has the namespace declared, if not create it
        if (typeof parent[module_name] === "undefined") {
            parent[module_name] = {};
        }
        // get a reference to the deepest element in the hierarchy so far
        parent = parent[module_name];
    }
    return namespace;
};



/**
 * @example 
 */

// Create the namespace for products
APPMNSG.createNS("APPMNSG.MODEL.PRODUCTS");

APPMNSG.MODEL.PRODUCTS.product = function(width, height){
    // private variables
    var dimensions = {
        width: width,
        height: height
    };
    // private methods
    // creating getWidth and getHeight to prevent access by reference to dimensions
    var getWidth = function(){
        return dimensions.width;
    };
    var getHeight = function(){
        return dimensions.height;
    };
    // public API
    return {
        getWidth: getWidth,
        getHeight: getHeight
    };
};


// Create the namespace for the logic
APPMNSG.createNS("APPMNSG.LOGIC.BUSINESS");

APPMNSG.LOGIC.BUSINESS.createAndAlertProduct = function () {
    var model = APPMNSG.MODEL.PRODUCTS;
    var p = new model.product(50,100);
    // {getWidth: 50, getHeight: 100}
    console.log(`Width() = ${p.getWidth()}, Height() = ${p.getHeight()}`);
    alert("Width = " + p.getWidth() + ", Height = " + p.getHeight());
};

APPMNSG.LOGIC.BUSINESS.createAndAlertProduct();
// 
