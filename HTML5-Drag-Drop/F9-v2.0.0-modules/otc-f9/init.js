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

// no uglify Sortable ???
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


/*
 <a
    href="${id === "null" ? `#` : `#${id}`}"
    data-uid="${id}"
    data-eventsId="${id}"
    data-turn-to-uid="recent-important-events"
    title="${description}"
    data-disabled="${ id !== "null" ? false : true}"
    data-link="fv-recent-important-events-link"
    data-link-detail="recent-important-events-link-detail-module">
    ${description}
</a>

每日交易数据  100701
增发数据  100402
分红数据  100401
更多新闻  53145
更多研报  53158
更多公告  53150
同业数据  100802

更多财务数据  100501
更多主营业务数据  55319
股东户数  100302
解禁数据  隐藏
股东数据  100301
股本数据  100103
管理层数据  100201


data-uid="100701" data-turn-to-uid="node-uid-???"
data-uid="100402" data-turn-to-uid="node-uid-???"
data-uid="100401" data-turn-to-uid="node-uid-???"
data-uid="53145" data-turn-to-uid="node-uid-???"
data-uid="53158" data-turn-to-uid="node-uid-???"
data-uid="53150" data-turn-to-uid="node-uid-???"
data-uid="100802" data-turn-to-uid="node-uid-???"

data-uid="100501" data-turn-to-uid="node-uid-???"
data-uid="55319" data-turn-to-uid="node-uid-???"
data-uid="100302" data-turn-to-uid="node-uid-???"
data-uid="100301" data-turn-to-uid="node-uid-???"
data-uid="100103" data-turn-to-uid="node-uid-???"
data-uid="100201" data-turn-to-uid="node-uid-???"

*/

// setTimeout((debug = false) => {
//     let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid*="node-uid"]`);
//     // let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid="node-uid-recent-important-events"]`);
//     if (debug) {
//         console.log(`turn_to_uids = \n`, turn_to_uids);
//     }
//     for (let index = 0; index < turn_to_uids.length; index++) {
//         turn_to_uids[index].addEventListener(`click`, (e) => {
//             let uid = e.target.dataset.uid;
//             // 跳转 otc f9 深度资料的命令：
//             // ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
//             // \ 反斜线要转义！
//             try {
//                 if (uid !== "null") {
//                     let new_uid = parseInt(uid);
//                     ChromeExternal.Execute("ExecuteCommand", `12\\${OTC_GILCODE}\\${uid}`);
//                     // ChromeExternal.Execute("ExecuteCommand", `12\\${window.OTC_GILCODE}\\${uid}`);
//                     // ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
//                 }else{
//                     console.log(`ChromeExternal & ${uid} === null\n`);
//                 }
//                 // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
//                 // \ 反斜线要转义！
//             } catch (error) {
//                 console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
//             }
//         });
//     }
// }, 0);

// setTimeout((debug = false) => {
//     let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid*="node-uid"]`);
//     // let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid="node-uid-recent-important-events"]`);
//     if (debug) {
//         console.log(`turn_to_uids = \n`, turn_to_uids);
//     }
//     for (let index = 0; index < turn_to_uids.length; index++) {
//         turn_to_uids[index].addEventListener(`click`, (e) => {
//             let uid = e.target.dataset.uid;
//             if (debug) {
//                 console.log(`e.target.dataset = \n`, e.target.dataset);
//                 console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
//                 console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
//             }
//             // 跳转 otc f9 深度资料的命令：
//             // ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
//             // \ 反斜线要转义！
//             try {
//                 // ??? url get 600570.SH ???
//                 if (uid !== "null") {
//                     let new_uid = parseInt(uid);
//                     if (debug) {
//                         console.log(`ChromeExternal & ${uid}\n`, (typeof uid));
//                         console.log(`12\\600570.SH\\${uid}`, (typeof uid));
//                         console.log(`12\\600570.SH\\${new_uid}`, (typeof new_uid));
//                     }
//                     ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
//                 }else{
//                     console.log(`ChromeExternal & ${uid} === null\n`);
//                 }
//                 // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
//                 // \ 反斜线要转义！
//             } catch (error) {
//                 console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
//             }
//         });
//     }
// }, 1000);
