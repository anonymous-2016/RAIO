"use strict";
/**
 * CSS & var() & calc()
 * xgqfrms
 * creadted 2017.12.29
 * @param {* String} url
 * @param {* Array} uids
 * @param {* Boolean} debug
 */

const changeColorButton = (uids = `[data-btn="change-color-btn"]`, debug = false) => {
    let doms = document.querySelectorAll(uids);
    let table = document.querySelector(`[data-table="table"]`);
    // table
    let color = `data-color="red"`;
    for (let i = 0; i < doms.length; i++) {
        doms[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e = \n`, e);
                console.log(`e.target = \n`, e.target);
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.dataset.color = \n`, e.target.dataset.color, typeof e.target.dataset.color);
                console.log(`e.target.style = \n`, e.target.style);
            }
            console.log(`e.target = \n`, e.target);
            // dataset color
            let color = e.target.dataset.color;
            let background = e.target.dataset.background;
            table.style.setProperty(`--color`, `var(--${color})`);
            table.style.setProperty(`--background`, `var(--${color})`);
        });
    }
};


window.onload = () => {
    changeColorButton();
};

