


// namespaces
var Modals = Modals || {};

Modals.BouncedModal = Modals.BouncedModal || ((options, debug = false) => {
    if (debug) {
        console.log(`BouncedModal's options = \n`, JSON.stringify(options, null, 4));
    }
    // ??? this ??? not Constructorle ???
    this.config = {
        layerBoxClass : "layerBox",
        layerclass:"",
        width: 300,// UDP.getClientWidth()-60
        height: 200,// UDP.getClientWidth()-60
        zIndex: 1000,
        title: "信息",
        setOverflow: "overflow-y:scroll",
        str: "",
        datas: {},
        callback: function () {
            //
        }
    };
    Object.assign(this.config, options);
    if (debug) {
        console.log(`BouncedModal's this.config = \n`, JSON.stringify(this.config, null, 4));
    }
});


function Modal(options, debug = false){
    if (debug) {
        console.log(`BouncedModal's options = \n`, JSON.stringify(options, null, 4));
    }
    // ??? this ??? not Constructorle ???
    this.config = {
        layerBoxClass : "layerBox",
        layerclass:"",
        width: 300,// UDP.getClientWidth()-60
        height: 200,// UDP.getClientWidth()-60
        zIndex: 1000,
        title: "信息",
        setOverflow: "overflow-y:scroll",
        str: "",
        datas: {},
        callback: function () {
            //
        }
    };
    Object.assign(this.config, options);
    if (debug) {
        console.log(`BouncedModal's this.config = \n`, JSON.stringify(this.config, null, 4));
    }
};


typeof Modals.BouncedModal;
// "function"
typeof Modals.BouncedModal();
// "undefined"


typeof Modal;
// "function"
typeof Modal();
// "undefined"


// BAD

x = new Modals.BouncedModal;
// Uncaught TypeError: Modal.BouncedModal is not a constructor
x.config;
// Uncaught ReferenceError: x is not defined

x = new Modals.BouncedModal({}, true);
// Uncaught TypeError: Modal.BouncedModal is not a constructor
x.config;
// Uncaught ReferenceError: x is not defined


// OK

y = new Modal;
// Modal {config: {…}}
y.config;
// {layerBoxClass: "layerBox", layerclass: "", width: 300, height: 200, zIndex: 1000, …}
yy = new Modal({}, true);
// Modal {config: {…}}
yy.config;
// {layerBoxClass: "layerBox", layerclass: "", width: 300, height: 200, zIndex: 1000, …}







x = Modals.BouncedModal;
// undefined
x
// undefined
x = Modals.BouncedModal({}, true);
// Uncaught TypeError: Modal.BouncedModal is not a function



Modals.Bounce = Modals.Bounce|| ((options, debug = false) => {
    if (debug) {
        console.log(`BouncedModal's options = \n`, JSON.stringify(options, null, 4));
    }
    // ??? this ??? not Constructorle ???
    let config = {
        layerBoxClass : "layerBox",
        layerclass:"",
        width: 300,// UDP.getClientWidth()-60
        height: 200,// UDP.getClientWidth()-60
        zIndex: 1000,
        title: "信息",
        setOverflow: "overflow-y:scroll",
        str: "",
        datas: {},
        callback: function () {
            //
        }
    };
    Object.assign(this.config, options);
    if (debug) {
        console.log(`BouncedModal's this.config = \n`, JSON.stringify(this.config, null, 4));
    }
});
