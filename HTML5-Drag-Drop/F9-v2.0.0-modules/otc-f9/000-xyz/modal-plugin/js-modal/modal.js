"use strict";


// bug ???


// Create an immediately invoked functional expression to wrap our code
// IIFE
(function(debug = false) {
    // Define our constructor
    // this.Modal & "use strict"; & this === undefined
    const that = window;
    if (debug) {
        console.log(`this =`, this);
        console.log(`that =`, that);
    }
    that.Modal = function() {
        // Create global element references
        if (debug) {
            console.log(`this =`, this);
            // this = that.Modal
        }
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;
        // Determine proper prefix
        this.transitionEnd = transitionSelect();
        // Define option defaults
        var defaults = {
            autoOpen: false,
            className: 'fade-and-drop',
            closeButton: true,
            content: "",// html template
            maxWidth: 1366,
            minWidth: 600,
            maxHeight: 888,
            minHeight: 400,
            overlay: true
        };
        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            // Object.assign() & overwrite modal options
            this.options = extendDefaults(defaults, arguments[0]);
        }
        if(this.options.autoOpen === true) {
            this.open();
        }
    };
    // Public Methods
    Modal.prototype.close = function() {
        // that = this;
        if (debug) {
            console.log(`this =`, this);
            // this = that.Modal
        }
        var _ = this;
        // remove class ??? classList
        // let bd = document.querySelector(`body`);
        // bd.firstElementChild.lastElementChild.classList;
        this.modal.className = this.modal.className.replace("scotch-open", "");
        this.overlay.className = this.overlay.className.replace("scotch-open", "");
        // remove dom node
        this.modal.addEventListener(this.transitionEnd, function() {
            _.modal.parentNode.removeChild(_.modal);
        });
        this.overlay.addEventListener(this.transitionEnd, function() {
            if(_.overlay.parentNode) {
                _.overlay.parentNode.removeChild(_.overlay);
            }
        });
    };
    Modal.prototype.open = function() {
        if (debug) {
            console.log(`open this =`, this);
            // this = that.Modal
        }
        // ??? that.Modal.buildOut();
        buildOut.call(this);
        // ??? that.Modal.initializeEvents();
        initializeEvents.call(this);
        // get height
        window.getComputedStyle(this.modal).height;
        // classList
        var class_open = (this.modal.offsetHeight > window.innerHeight) ? " scotch-open scotch-anchored" : " scotch-open";
        this.modal.className = this.modal.className + class_open;
        this.overlay.className = this.overlay.className + " scotch-open";
    };
    // Private Methods
    function buildOut() {
        if (debug) {
            console.log(`buildOut this =`, this);
            // this = that.Modal
        }
        var content,
            contentHolder,
            docFrag;
        if (typeof this.options.content === "string") {
            // if content is an HTML string, append the HTML string.
            content = this.options.content;
        } else {
            // else content is a domNode, append its content.
            content = this.options.content.innerHTML;
        }
        // virtual DOM & DocumentFragment
        // Create a DocumentFragment to build with
        docFrag = document.createDocumentFragment();
        // Create modal element
        this.modal = document.createElement("div");
        this.modal.className = "scotch-modal " + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + "px";
        this.modal.style.maxWidth = this.options.maxWidth + "px";
        // If closeButton option is true, add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "scotch-close close-button";
            this.closeButton.innerHTML = "&times;";
            this.modal.appendChild(this.closeButton);
        }
        // If overlay is true, add one
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "scotch-overlay " + this.options.className;
            docFrag.appendChild(this.overlay);
        }
        // Create content area and append to modal
        contentHolder = document.createElement("div");
        contentHolder.className = "scotch-content";
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);
        // Append modal to DocumentFragment
        docFrag.appendChild(this.modal);
        // Append DocumentFragment to body
        document.body.appendChild(docFrag);
    }
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
    function initializeEvents() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }
        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }
    }
    function transitionSelect() {
        var el = document.createElement("div");
        if (el.style.WebkitTransition) {
            return "webkitTransitionEnd";
        }
        if (el.style.OTransition) {
            return "oTransitionEnd";
        }
        return 'transitionend';
    }
}());



/*

"use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());


// "use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());



(function() {
    "use strict";
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());




"use strict";
(function() {
    // Define our constructor
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());

// this = undefined
// Uncaught TypeError: Cannot set property 'Modal' of undefined


"use strict";
(function() {
    // Define our constructor
    let this = window;
    console.log(`this =`, this);
    this.Modal = function() {
        console.log(`this =`, this);
    }
}());

// Uncaught SyntaxError: Unexpected strict mode reserved word


"use strict";
(function() {
    // Define our constructor
    let that = window;
    console.log(`that =`, that);
    that.Modal = function() {
        console.log(`that =`, that);
    }
}());

// that = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

Modal;
// ƒ () {
//     console.log(`that =`, that);
// }

Modal();
// that = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

*/
