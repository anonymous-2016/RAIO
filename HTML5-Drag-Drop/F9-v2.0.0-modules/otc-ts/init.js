// window.onload = () => {
//     // Multi groups
//     let SortBox = document.querySelector(`#section-sortable-container`),
//         SortItems = SortBox.querySelectorAll(`.div-sortable-box`);
//     // container
//     Sortable.create(SortBox, {
//         animation: 150,
//         draggable: '.div-sortable-box'
//     });
//     // array
//     [].forEach.call(SortItems, function(el) {
//         Sortable.create(el, {
//             group: 'photo',
//             animation: 150
//         });
//     });
// };

// // Multi groups
// let SortBox = document.querySelector(`#section-sortable-container`),
//     SortItems = SortBox.querySelectorAll(`.div-sortable-box`);
// // container
// Sortable.create(SortBox, {
//     animation: 150,
//     draggable: '.div-sortable-box'
// });
// // array
// [].forEach.call(SortItems, function(el) {
//     Sortable.create(el, {
//         group: 'photo',
//         animation: 150
//     });
// });


setTimeout(() => {
    // Multi groups
    let SortBox = document.querySelector(`#section-sortable-container`),
        SortItems = SortBox.querySelectorAll(`.div-sortable-box`);
    // container
    Sortable.create(SortBox, {
        animation: 150,
        draggable: '.div-sortable-box'
    });
    // array
    [].forEach.call(SortItems, function(el) {
        Sortable.create(el, {
            group: 'photo',
            animation: 150
        });
    });
}, 0);
