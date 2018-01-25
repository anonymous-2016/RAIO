
// disable table draggable


document.querySelector(`.fv-indicators-per-share-table`).ondragstart = function() {
    return false;
};


let tables = document.querySelectorAll(`[data-table*="table"]`);

for (let i = 0; i < tables.length; i++) {
    tables[i].addEventListener(`dragstart`, (e) => {
        console.log(`\ntables[i] = `, tables[i]);
        console.log(`\ne.target = `, e.target);
        e.target.setAttributes(`draggable`, `false`);
        // date_title.setAttribute(`title`, `${arr[0].sj}`);
    });
}

// <table ondragstart="return false;"></table>



$("table").mousedown(function(e){
    e.preventDefault()
});

/*

img {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none;
}

-webkit-user-drag: auto | element | none;

-moz-user-select: none | text | all | element
-ms-user-select: none | text | all | element


https://developer.mozilla.org/en-US/docs/Web/CSS/user-select


pointer-events: none

https://developer.mozilla.org/en-US/docs/CSS/pointer-events

https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action

*/

/*

// wrapped on a <div> tag

<div ondragstart="return false;">
   <img src="image1.png"/>
   <img scr="image2.png"/>
</div>

*/
