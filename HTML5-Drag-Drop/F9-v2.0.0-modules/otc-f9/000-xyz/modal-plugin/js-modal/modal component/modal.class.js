"use strict";

class Modal{
    // constructor
    constructor(height, width) {
        // super();
        this.height = height;
        this.width = width;
    }
    // getter
    get getHeight() {
        if (this.height !== undefined) {
            console.log(`this.height =`, this.height);
        }
    }
    // setter
    get setHeight() {
        if (this.height !== undefined) {
            this.height = this.height + 1;
            console.log(`this.height =`, this.height);
        }
    }
    // Static methods & Static methods are called without instantiating their class and cannot be called through a class instance.
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
        // Math.hypot(3, 4);
        // 5
    }
    // Prototype methods
    show() {
        console.log(`this.height =`, this.height);
    }
}

// IIFE
((debug = false) => {
    const that = window;
    that.Modal = function() {
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;
        this.transitionEnd = transitionSelect();
        let defaults = {
            autoOpen: false,
            className: 'fade-and-drop',
            closeButton: true,
            content: "<div><p>No Data</p></div>",// HTML template / DOM node
            maxWidth: 1366,
            minWidth: 700,
            maxHeight: 888,
            minHeight: 400,
            overlay: true
        };
        if (arguments[0] && typeof arguments[0] === "object") {
            // this.options = extendDefaults(defaults, arguments[0]);
            this.options = Object.assign(defaults, arguments[0]);
        }else{
            this.options = Object.assign({}, defaults);
        }
        if(this.options.autoOpen === true) {
            this.open();
        }
    };
    // Public Methods
    Modal.prototype.close = function(){
        let _ = this;
        this.modal.className = this.modal.className.replace("xyz-open", "");
        this.overlay.className = this.overlay.className.replace("xyz-open", "");
        this.modal.addEventListener(this.transitionEnd, function() {
            _.modal.parentNode.removeChild(_.modal);
        });
        this.overlay.addEventListener(this.transitionEnd, function() {
            if(_.overlay.parentNode) {
                _.overlay.parentNode.removeChild(_.overlay);
            }
        });
    };
    Modal.prototype.open = function(){
        buildOut.call(this);
        initializeEvents.call(this);
        window.getComputedStyle(this.modal).height;
        let class_open = (this.modal.offsetHeight < window.innerHeight) ? " xyz-open xyz-bug" : " xyz-open xyz-bug";
        this.modal.className = this.modal.className + class_open;
        this.overlay.className = this.overlay.className + " xyz-open";
        changeFontSize.call(this);
    };
    // Private Methods
    function buildOut() {
        let content,
            contentHolder,
            docFrag;
        if (typeof this.options.content === "string") {
            // if content is an HTML string, append the HTML string.
            content = this.options.content;
        } else {
            // else content is a domNode, append its content.
            content = this.options.content.innerHTML;
        }
        docFrag = document.createDocumentFragment();
        this.modal = document.createElement("div");
        this.modal.className = "xyz-modal " + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + "px";
        this.modal.style.maxWidth = this.options.maxWidth + "px";
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "xyz-close close-button";
            this.closeButton.innerHTML = "&times;";
            this.modal.appendChild(this.closeButton);
        }
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "xyz-overlay " + this.options.className;
            docFrag.appendChild(this.overlay);
        }
        contentHolder = document.createElement("div");
        contentHolder.className = "xyz-content";
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);
        docFrag.appendChild(this.modal);
        document.body.appendChild(docFrag);
    };
    // const extendDefaults = (source, properties) => {
    //     let property;
    //     for (property in properties) {
    //         if (properties.hasOwnProperty(property)) {
    //             source[property] = properties[property];
    //         }
    //     }
    //     return source;
    // };
    function initializeEvents() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }
        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }
    };
    // ES6 auto bind this & () => {} & no need this!
    const transitionSelect = () => {
        let el = document.createElement("div"),
            result = `transitionend`;
        if (el.style.WebkitTransition) {
            result = "webkitTransitionEnd";
        }
        if (el.style.OTransition) {
            result = "oTransitionEnd";
        }
        return result;
    };
    const changeFontSize = (debug = false) => {
        const font = document.querySelector(`[data-modal="modal-font"]`);
        font.addEventListener('click', function(e) {
            let spans = e.target.parentElement.parentElement.children,
                uid = e.target.dataset.modalUid;
            for (let i = 0; i < spans.length; i++) {
                if (i.toString() === uid) {
                    spans[i].classList.add(`active`);
                }else{
                    spans[i].classList.remove(`active`);
                }
            }
            let key = e.target.dataset.modalFont,
                value = ``;
            if (key !== undefined) {
                key = key.substr(10);
                switch (key) {
                    case `big`:
                    case `middle`:
                    case `small`:
                        value = `fontsize-${key}`;
                        break;
                    default:
                        break;
                }
                let content = this.parentElement.nextElementSibling;
                content.className = ``;
                content.classList.add(value);
            }
        });
    };
})();


// export default Modal;
// export {Modal};
