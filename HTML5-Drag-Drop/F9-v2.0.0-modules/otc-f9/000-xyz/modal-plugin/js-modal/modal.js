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
            minWidth: 700,
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
        console.log(`window.getComputedStyle(this.modal).height = `, window.getComputedStyle(this.modal).height);
        // 616px
        // classList
        console.log(`this.modal.offsetHeight = `, this.modal.offsetHeight);
        // 616
        console.log(`window.innerHeight= `, window.innerHeight);
        // 662 / 595 bug
        // var class_open = (this.modal.offsetHeight < window.innerHeight) ? " scotch-open scotch-anchored" : " scotch-open scotch-bug";
        var class_open = (this.modal.offsetHeight < window.innerHeight) ? " scotch-open scotch-bug" : " scotch-open scotch-bug";
        this.modal.className = this.modal.className + class_open;
        this.overlay.className = this.overlay.className + " scotch-open";
        // font-size
        changeFontSize.call(this);
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
        let result = `transitionend`;
        if (el.style.WebkitTransition) {
            result = "webkitTransitionEnd";
        }
        if (el.style.OTransition) {
            result = "oTransitionEnd";
        }
        // if (el.style.transitionend) {
        //     result = 'transitionend';
        //     console.log(`result = `, result);
        // }
        // console.log(`element.style = `, el.style);
        // console.log(`element.style.transitionend = `, el.style.transitionend);
        // undefined
        return result;
    }
    const changeFontSize = (debug = false) => {
        const font = document.querySelector(`[data-modal="modal-font"]`);
        // proxy
        font.addEventListener('click', function(e) {
        // const fonts = document.querySelectorAll(`[data-modal="modal-font"]`);
        // fonts[1].addEventListener('click', function(e) {
            // myModal.open();
            if (debug) {
                console.log(`e.target.dataset.modalFont =`, e.target.dataset.modalFont);
                console.log(`e.target =`, e.target);
                // a
                // console.log(`this.parentElement =`, this.parentElement);
                // modal
                console.log(`e.target.parentElement =`, e.target.parentElement);
                // .nextElementSibling;
                // .previousElementSibling;
                console.log(`e.target.parentElement.parentElement.children =`, e.target.parentElement.parentElement.children);
                console.log(`uid = `, uid);
                // e.target.parentElement.classList.add(`active`);
                // e.target.parentElement.classList.toggle(`active`);
                console.log(`e.target.parentElement.classList =`, e.target.parentElement.classList);
            }
            let spans = e.target.parentElement.parentElement.children;
            let uid = e.target.dataset.modalUid;
            // "0", "1", "2"
            for (let i = 0; i < spans.length; i++) {
                if (i.toString() === uid) {
                    spans[i].classList.add(`active`);
                }else{
                    spans[i].classList.remove(`active`);
                    // spans[i].classList.contains(`active`);
                    // spans[i].classList.toggle(`active`);
                    // spans[i].classList.replace(`active`, `inactive`);
                    // spans[i].classList.item(index: Number);
                }
            }
            let key = e.target.dataset.modalFont.substr(10),
                value = ``;
            switch (key) {
                case `big`:
                case `middle`:
                case `small`:
                    value = `fontsize-${key}`;
                    break;
                default:
                    break;
            }
            if (debug) {
                console.log(`key =`, key);
                console.log(`value =`, value);
            }
            // this.content.classList.add(value);
            // let content = document.querySelector(`[data-modal="content"]`);
            // let content = font.parentElement.nextElementSibling;
            let content = this.parentElement.nextElementSibling;
            // let content = fonts[1].parentElement.nextElementSibling;
            content.className = ``;
            if (debug) {
                console.log(`content =`, content, content.classList);
            }
            content.classList.add(value);
            if (debug) {
                console.log(`content =`, content, content.classList);
            }
            // content.classList.toggle(`fontsize-big`);
        });
    };
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
