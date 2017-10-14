"use strict";
var debug = true;
let i = 1;
let init = 1;
// e.preventDefault() & e.stopPropagation()
var cancel = function(e) {
    if (e.preventDefault) {
        e.preventDefault()
    };
    if (e.stopPropagation) {
        e.stopPropagation()
    };
    return false;
};
// drop
var dropped = function(e) {
    // $("#clear").trigger("click");
    if (init === 1) {
        var clearButton = document.getElementById('clear');
        clearButton.click();
        init++;
    }
    cancel(e);
    var target = this, // e.target ???
        content = '';
    var types = e.dataTransfer.types;
    if (debug) {
        // console.log(`types = `, types);
        // console.log(`types = `, JSON.stringify(types, null, 4));
        // console.log(`types = ${JSON.stringify(types, null, 4)};`);
        console.log("types = ", types);
        console.log("types[0] = ", types[0]);
        // types[0] =  Text
        console.log("types = ", JSON.stringify(types, null, 4));
        /*
            types =  {
                "0": "Text",
                "1": "Url",
                "2": "Files"
            }
        */
    }
    if (types.length > 0) {
        if (types[0] === 'Text') {
            target.innerText = e.dataTransfer.getData('Text');
            // IE 
            if (debug) {
                // console.log(`Text = `, e.dataTransfer.getData('Text'));
                console.log("Text = ", e.dataTransfer.getData('Text'));
            }
        } else {
            types.forEach(function(type) {
                content = e.dataTransfer.getData(type);
                if (debug) {
                    // console.log(`Text = `, e.dataTransfer.getData('Text'));
                    console.log("content = ", content);
                    console.log("typeof content = ", typeof content);
                    // string
                    // types =  (3) ["text/plain", "text/uri-list", "text/html"]
                    // content =  http://127.0.0.1:8080/img/home.jpg
                    // content =  <img src="http://127.0.0.1:8080/img/home.jpg" class="thumbnail img-responsive">
                }
                var p = document.createElement('p');
                /* p.innerHTML =
                    '<b>Type</b>: ' + type + '<br>' +
                    '<b>Content</b>:' + content;
                */
                // if (typeof content === "object")
                console.log("type = ", type);
                if (type === "text/html") {
                    // p.innerHTML = '<div data-uid="data-uid" draggable="true">'+ content + type + '</div>';
                    console.log("content OK ");
                }else{
                    p.innerHTML = '<div data-uid="data-uid" draggable="true"><img draggable="true" src="'+content+'" data-type-i="'+(i++)+'"/>'+ type +'</div>';
                    console.log("content Error ");
                }
                target.appendChild(p);
                // 
            });
        }
    }
    target.classList.remove('over');
    /*
        // If you want to clear all data from 
        // the dataTransfer object you 
        // can call:
        //
        //  e.dataTransfer.clearData(); 
        //
        // or you can clear values based on conent type:
        //
        //  e.dataTransfer.clearData('text/plain');
        //
        // where 'text/plain' can be 
        // substituted for any of the 
        // conent types where you want to 
        // remove the value.
    */
    let uids = document.querySelectorAll('[data-uid="data-uid"]');
    console.log(`uids = `, uids);
    console.log(`uids.length = `, uids.length);
    // alert(`uids`);
    uids.forEach(
        (uid) => {
            uid.addEventListener('click', deleteModule, false);
        }
    );
};

var dragLeave = function(e) {
    console.log("dragLeave = ", e);
    this.classList.remove('over');
};

var dragOver = function(e) {
    console.log("dragOver = ", e);
    cancel(e);
    this.classList.add('over');
};

var dragStart = function(e) {
    // cancel(e);
    var target = this;
    console.log("target = ", target);
    console.log("this = ", this);
    console.log("e = ", e);
    this.classList.add('dragstart');
};



// src
let src = document.querySelector('[data-uid="uid-img"]');
// document.querySelector('[data*="uid-img"]');
// null
// document.querySelector('[data-uid*="uid"]');
// <div id="divId1" data-uid="data-uid" class="ui-sortable-handle">111</div>
// document.querySelectorAll('[data-uid*="uid"]');
// [div#divId1.ui-sortable-handle, div#divId2.ui-sortable-handle, div#divId3.ui-sortable-handle]

src.addEventListener('dragstart', dragStart, false);


// target
var target = document.getElementById('target');

target.addEventListener('drop', dropped, false);
target.addEventListener('dragenter', cancel, false);
target.addEventListener('dragover', dragOver, false);
target.addEventListener('dragleave', dragLeave, false);


var target2 = document.getElementById('target2');

target2.addEventListener('drop', dropped, false);
target2.addEventListener('dragenter', cancel, false);
target2.addEventListener('dragover', dragOver, false);
target2.addEventListener('dragleave', dragLeave, false);


// clear
var clearButton = document.getElementById('clear');

function clearAll(e) {
    e.preventDefault();
    target.innerHTML = '';
    target2.innerHTML = '';
}

var clearSrc = function(e) {
    e.preventDefault();
    target.innerHTML = '';
};

clearButton.addEventListener('click', clearAll, false);

// $("#a").trigger("click");

/* setTimeout(function() {
    clearButton.click();
}, 1000); */



// -*
function deleteModule(e) {
    this.style.display = "none";
}
/* setTimeout(function() {
    let uids = document.querySelectorAll('[data-uid="data-uid"]');
    console.log(`uids = `, uids);
    console.log(`uids.length = `, uids.length);
    alert(`uids`);
    uids.forEach(
        (uid) => {
            uid.addEventListener('click', deleteModule, false);
        }
    );
}, 1000); */
// dragleave
// uid.addEventListener('click', deleteModule, false);


