window.onload = function() {
    // let sortable_container = document.querySelector(`#modules-sortable-container`);
    // Sortable.create(sortable_container);
    // no good at all!
    let sortable_container1 = document.querySelector(`#modules-sortable-container1`);
    let sortable_container2 = document.querySelector(`#modules-sortable-container2`);
    // Sortable.create(sortable_container1);
    // Sortable.create(sortable_container2);
    // only enable on directly children ??? CSS layout ??? bind customise drop & drag event
    let sortable_container_main = document.querySelector(`[data-container="modules-sortable-container-main"]`);
    // Sortable.create(sortable_container_main);
    let event_targets = document.querySelectorAll(`[data-event="event-target"]`);
    let drop_container = document.querySelector(`[data-drop-container="drop-container"]`);
    //
    for (let i = 0; i < event_targets.length; i++) {
        event_targets[i].addEventListener(`dragstart`, function(e, debug = false) {
            if (debug) {
                console.log(`drag event = \n`, e);
                // this
                console.log(`this =`, this);
                // <div class="sider" id="sider"></div>
            }
            let uid = e.target.dataset.uid;
            console.log(`e.target.dataset =`, e.target.dataset);
            e.effectAllowed = `move`;
            e.dataTransfer.setData("text/plain", uid);
            console.log(`dragstart & uid =`, uid, typeof(uid));
            // let uid_data = e.dataTransfer.getData("text/plain");
            // console.log(`dragstart & uid_data =`, uid_data);
            e.dataTransfer.getData("text/plain");
            return true;
        });
    }
    // dragleave
    drop_container.addEventListener(`dragenter`, function(e, debug = false) {
        e.preventDefault();
        if (debug) {
            console.log(`dragenter event = \n`, e);
            // this
            console.log(`this =`, this);
            // <div class="sider" id="sider"></div>
        }
        console.log(`\n\ndragenter & e.target.dataset =`, e.target.dataset);
        // let uid = e.dataTransfer.getData("text/plain");
        console.log(`dragenter event = \n`, e);
        console.log(`e.dataTransfer = \n`, e.dataTransfer);
        let uid = e.dataTransfer.getData("text/plain");
        console.log(`dragenter & uid =`, uid);
        return true;
    });
    drop_container.addEventListener(`drop`, function(e, debug = false) {
        e.preventDefault();
        if (!debug) {
            console.log(`drop event = \n`, e);
            // this
            console.log(`this =`, this);
            // <div class="sider" id="sider"></div>
        }
        // counter = 0;
        // e.preventDefault();
        console.log(`drop & e.target.dataset =`, e.target.dataset);
        // dropEffect
        // e.effectAllowed = `move`;
        let uid = e.dataTransfer.getData("text/plain");
        console.log(`drop &  uid =`,  uid);
    });
    // IIFE & Closure& sidebar
    (() => {
        let cbd = document.querySelector(`#content-body`);
        let side = document.querySelector(`#sider`);
        side.addEventListener(`click`, function() {
            console.log(`sider toggle!`);
            // this
            console.log(`this =`, this);
            // <div class="sider" id="sider"></div>
            console.log(`this =`, this.toString());
            // [object HTMLDivElement]
        });
        side.addEventListener(`click`, function(e) {
            // this
            console.log(`\n this =`, this);
            // <div class="sider" id="sider"></div>
            // e
            console.log(`\n e.target =`, e.target);
            // <div class="sider" id="sider"></div>
        });
        side.addEventListener(`click`, function(e) {
            // this.classList.add();
            e.target.classList.add("sider-small");
            e.target.classList.remove("sider");
            cbd.classList.add("content-body-big");
            cbd.classList.remove("content-body");
        });
        cbd.addEventListener(`click`, function(e) {
            // this.classList.add();
            e.target.classList.add("content-body");
            e.target.classList.remove("content-body-big");
            side.classList.add("sider");
            side.classList.remove("sider-small");
        });
    })();
    // setTimeout() & Closure
    /*
        setTimeout(() => {
            let cbd = document.querySelector(`#content-body`);
            let side = document.querySelector(`#sider`);
            side.addEventListener(`click`, function() {
                console.log(`sider toggle!`);
                // this
                console.log(`this =`, this);
                // <div class="sider" id="sider"></div>
                console.log(`this =`, this.toString());
                // [object HTMLDivElement]
            });
            side.addEventListener(`click`, function(e) {
                // this
                console.log(`\n this =`, this);
                // <div class="sider" id="sider"></div>
                // e
                console.log(`\n e.target =`, e.target);
                // <div class="sider" id="sider"></div>
            });
            side.addEventListener(`click`, function(e) {
                // this.classList.add();
                e.target.classList.add("sider-small");
                e.target.classList.remove("sider");
                cbd.classList.add("content-body-big");
                cbd.classList.remove("content-body");
            });
            cbd.addEventListener(`click`, function(e) {
                // this.classList.add();
                e.target.classList.add("content-body");
                e.target.classList.remove("content-body-big");
                side.classList.add("sider");
                side.classList.remove("sider-small");
            });
        }, 0);
    */
};
