"use strict";

/**
 * sortable init
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url
 * @param {Boolean} debug
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.APP = STOCK_F9_FV.APP || {};


STOCK_F9_FV.APP.init = STOCK_F9_FV.APP.init || (
    () => {
        // Multi groups
        const byId = function(id) {
            return document.getElementById(id);
        };
        // Sortable
        Sortable.create(byId('section-sortable-container'), {
            // container
            animation: 150,
            draggable: '.div-sortable-box', // sub-container
            //handle: '.tile__name' // sub-sub-container-title
        });
        [].forEach.call(byId('section-sortable-container').getElementsByClassName('div-sortable-box'), function(el) {
            // sub-sub-container-list
            Sortable.create(el, {
                group: 'h5dnd',
                animation: 150
            });
        });
    }
);

setTimeout(() => {
    STOCK_F9_FV.APP.init();
}, 0);

// // Multi groups
// const byId = function(id) {
//     return document.getElementById(id);
// };

// Sortable.create(byId('section-sortable-container'), {
//     // container
//     animation: 150,
//     draggable: '.div-sortable-box', // sub-container
//     //handle: '.tile__name' // sub-sub-container-title
// });
// // document.querySelector(('[data-div-module-uid*="div-module"]'));
// // [].forEach.call(byId('multi').getElementsByClassName('div-sortable-box'), function(el) {
// [].forEach.call(byId('section-sortable-container').getElementsByClassName('div-sortable-box'), function(el) {
//     // sub-sub-container-list
//     Sortable.create(el, {
//         group: 'photo',
//         animation: 150
//     });
// });
