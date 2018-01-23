"use strict";

/**
 * @namespace OTC_TS_FV : OTC Thematic Statistics
 * @name transactions-leaderboard-protocol 交易排行榜-协议
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* String} uid
 * @param {* Boolean} debug
 */


import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";


// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};

// transactionsLeaderboardProtocol
OTC_TS_FV.Modules.transactionsLeaderboardProtocol = OTC_TS_FV.Modules.transactionsLeaderboardProtocol || ((url = ``, uid = ``, debug = false) => {
    let result = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // emptyChecker
            const emptyChecker = (key = ``) => {
                // arr.map() ???
                let result = true;
                switch (key) {
                    case undefined:
                        result = false;
                        break;
                    case null:
                        result = false;
                        break;
                    // case "--":
                    //     result = false;
                    //     break;
                    default:
                        break;
                }
                return result;
            };
            if (debug) {
                console.log(`json = \n`, json);
                console.log(`keys = \n`, Object.keys(json));
            }
            try {
                if (emptyChecker(json) & Object.keys(json).length > 0) {
                    let data_protocol = json || [];
                    // reusable dataHandler
                    const dataHandler = (arr = []) => {
                        if (debug) {
                            console.log(`arr = \n`, arr);
                            console.log(`arr keys = \n`, Object.keys(arr[0]));
                        }
                        let ranking_code = [],
                            ranking_brief = [],
                            ranking_amplitude = [],
                            ranking_amount = [];
                        // sort ???
                        arr.map(
                            (obj, i) => {
                                if (debug && (i === 0)) {
                                    console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                                }
                                // ["zqdm", "zqjc", "zdf", "cje"]
                                ranking_code.push(obj["zqdm"]);
                                ranking_brief.push(obj["zqjc"]);
                                ranking_amplitude.push(obj["zdf"]);
                                ranking_amount.push(obj["cje"]);
                            }
                        );
                        const new_obj = {
                            ranking_code,
                            ranking_brief,
                            ranking_amplitude,
                            ranking_amount
                        };
                        if (debug) {
                            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                        }
                        return new_obj;
                    };
                    let obj_protocol = dataHandler(data_protocol) || {};
                    if (debug) {
                        // console.log(`obj_protocol = \n`, obj_protocol);
                        console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                    }
                    // Object.assign(result, obj_protocol);
                    // if (debug) {
                    //     console.log(`result_obj = \n`, JSON.stringify(result, null, 4));
                    // }
                    OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable(obj_protocol, uid, false);
                }else{
                    // no data
                    // console.log(`transactions Leaderboard Protocol & no data!`);
                    let uid = "#otc-sortable-table-transactions-leaderboard-protocol";
                    let table = document.querySelector(uid);
                    table.style.display = 'none';
                    let no_data = `
                        <div data-margin="no-data-margin-top">
                            <p data-none="no-data-p">
                                <span data-none="no-data-span"></span>
                            </p>
                        </div>
                    `;
                    table.parentElement.insertAdjacentHTML(`beforeend`, no_data);
                }
            } catch (error) {
                console.log(`json error = \n`, error);
            }
        }
    )
    .catch(error => console.log(`fetch error = \n`, error));
    // return result_obj;
});

// transactionsLeaderboardProtocol.showTable
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable || (
    (datas = {}, uid = ``, debug = false) => {
        if (!debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
            console.log(`uid = \n`, uid);
        }
        if (Object.keys(datas).length > 0) {
            let xyz_tbody = document.querySelector(uid);
            const {
                ranking_code,
                ranking_brief,
                ranking_amplitude,
                ranking_amount
            } = datas;
            // re-order & sort ???
            let order_arr = [
                ranking_code,
                ranking_brief,
                ranking_amplitude,
                ranking_amount
            ];
            let trs = xyz_tbody.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-transactions-leaderboard-protocol"]`);
            if (debug) {
                console.log(`trs = \n`, trs);
                console.log(`trs[0] = \n`, trs[0]);
            }
            for (let i = 0; i < trs.length; i++) {
                let tds = trs[i].querySelectorAll(`[data-td-value="otc-td-value"]`);
                if (debug) {
                    console.log(`tds = \n`, tds);
                    console.log(`tds[0] = \n`, tds[0]);
                    console.log(`tds[1] = \n`, tds[1]);
                    console.log(`tds[2] = \n`, tds[2]);
                    console.log(`tds[3] = \n`, tds[3]);
                }
                tds[0].innerHTML = order_arr[0][i];
                tds[1].innerHTML = order_arr[1][i];
                tds[2].innerHTML = order_arr[2][i];
                tds[3].innerHTML = order_arr[3][i];
                // tds[x].insertAdjacentElemenHTML(`beforeend`, `html string`);
            }
            setTimeout(() => {
                let table_th_uid = `[data-sort="sort-th-transactions-leaderboard-protocol"]`,
                    table_uid = `#otc-sortable-table-transactions-leaderboard-protocol`;
                OTC_TS_FV.Modules.transactionsLeaderboardProtocol.sortTable(table_th_uid, table_uid);
                // ignore [1, 2] ?
            }, 0);
        } else {
            // no data
            console.log(`transactions Leaderboard Protocol & no data!`);
            // let uid = "#otc-sortable-table-transactions-leaderboard-protocol";
            // let table = document.querySelector(uid);
            // table.style.display = 'none';
            // let no_data = `
            //     <div data-margin="no-data-margin-top">
            //         <p data-none="no-data-p">
            //             <span data-none="no-data-span"></span>
            //         </p>
            //     </div>
            // `;
            // table.parentElement.insertAdjacentHTML(`beforeend`, no_data);
        }
    }
);

OTC_TS_FV.Modules.transactionsLeaderboardProtocol.sortTable = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.sortTable || ((table_th_uid = `[data-sort="sort-th-Test"]`, table_uid = `#myTable`, debug = false, ignore = []) => {
    const sortTable = (uid = 0, table_uid = `#myTable`) => {
        let table = document.querySelector(table_uid),
            rows,
            switching = true,
            i,
            x,
            y,
            shouldSwitch,
            dir = "asc",
            switchcount = 0;
        /*Make a loop that will continue until no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[uid];
                y = rows[i + 1].getElementsByTagName("TD")[uid];
                /*check if the two rows should switch place, based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount ++;
            } else {
                /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    let uids = document.querySelectorAll(table_th_uid);
    for (let i = 0; i < uids.length; i++) {
        uids[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e.target.dataset = `, e.target.dataset);
                let img = getComputedStyle(e.target, `::after`).getPropertyValue(`content`);
                console.log(`e.target img = `, img);
                //  url("http://10.1.5.202/otc/ts/img/white/up.png");
                //  url("http://10.1.5.202/otc/ts/img/white/down.png");
                // content: url("../img/white/up.png");
                // content: url("../img/white/down.png");
                // if (img.includes(`up.png`)) {
                //     getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/down.png")`);
                // }
                // if (img.includes(`down.png`)) {
                //     getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/default.png")`);
                // }
                // if (img.includes(`default.png`)) {
                //     getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/up.png")`);
                // }
                //  data-url & ::after {content: (data-url);}
            }
            let uid = parseInt(e.target.dataset.uid.substr(4)),
                state = e.target.dataset.state;
            if (state.includes(`up`)) {
                e.target.dataset.state = `down`;
                e.target.dataset.imgUrl =  "../img/white/up.png";
                // e.target.dataset.imgUrl = url("../img/white/up.png");
                // e.target.dataset.imgUrl = `url("../img/white/up.png")`;
                // document.styleSheets[0].addRule('p.special::before','content: "888;');
                // data-img-url=""
                // data-imgUrl
                // getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/down.png")`);
            }else if (state.includes(`down`)) {
                e.target.dataset.state = `default`;
                e.target.dataset.imgUrl =  "../img/white/down.png";
                // e.target.dataset.imgUrl =  'url("../img/white/down.png")';
                // e.target.dataset.imgUrl = `url("../img/white/down.png")`;
                // getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/default.png")`);
            }else if (state.includes(`default`)) {
                e.target.dataset.state = `up`;
                e.target.dataset.imgUrl = ``;
                // getComputedStyle(e.target, `::after`).setProperty(`content`, `url("../img/white/up.png")`);
            }
            // bug & 01 === 1
            if (!debug) {
                console.log(`e.target.dataset.uid = `, e.target.dataset.uid);
                console.log(`uid = `, uid);
                console.log(`state = `, state);
            }
            if(uid !== 1 & uid !== 2){
                sortTable(uid - 1, table_uid);// 0
            }else{
                console.log(`ignore uid = `, uid);
            }
        });
    }
});

// init
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init || (
    (
        {
            ip,
            path,
            socket,
            skin,
            // gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/otcfast03`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `http://10.1.5.202/otc/ts/json/03.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/03-old.json`,
            uid = `[data-table-protocol="otc-table-body-transactions-leaderboard-protocol"]`;
        // url = `http://10.1.5.202/webservice/fastview/otc/otcfast03/`;
        OTC_TS_FV.Modules.transactionsLeaderboardProtocol(url, uid, false);
        // 备注：在涨跌幅和成交额做个可以自动排序的功能。
        // 排行榜协议 otcfast03
    }
);

// OTC_SKIN ???
var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast03`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});

