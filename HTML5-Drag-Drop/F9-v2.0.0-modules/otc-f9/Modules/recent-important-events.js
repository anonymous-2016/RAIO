"use strict";
/**
 * recent important events 近期重要事项
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.recentImportantEvents = STOCK_F9_FV.Modules.recentImportantEvents || (
    (url = ``, uid = `id`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                if (debug) {
                    console.log(`data = \n`, data);
                }
                let html_string = ``;
                let arr = data;
                arr.map(
                    (obj, i) => {
                        let date = `${(arr[i].rq !== undefined) ? arr[i].rq : `暂无数据`}`,
                            description = (arr[i].sj !== undefined && arr[i].nr !== undefined) ? `${arr[i].sj} ${arr[i].nr}` : `暂无数据`,
                            more = `更多 >>`,
                            // `更多 &gt;&gt;`,
                            // id = (arr[i].newid !== undefined) ? `${arr[i].newid}` : `暂无数据`;
                            id = (arr[i].newid !== undefined) ? `${arr[i].newid}` : `null`;
                        // only show 5 items
                        if (i < 5) {
                            html_string += `
                                <tr class="fv-recent-important-events-table-tr">
                                    <td class="fv-recent-important-events-table-td-key" data-value="data-fv-events">
                                        ${date}
                                    </td>
                                    <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
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
                                    </td>
                                </tr>
                            `;
                        } else {
                            if (debug) {
                                console.log(`Sorry, we only show 5 items, now!`);
                            }
                        }
                    }
                );
                let td_id = document.querySelector(uid);
                td_id.innerHTML = html_string;
                // Element.insertAdjacentHTML()
                // Element.insertAdjacentElement()
                setTimeout(() => {
                    let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid="recent-important-events"]`);
                    if (debug) {
                        console.log(`turn_to_uids = \n`, turn_to_uids);
                    }
                    for (let index = 0; index < turn_to_uids.length; index++) {
                        turn_to_uids[index].addEventListener(`click`, (e) => {
                            let uid = e.target.dataset.uid;
                            if (debug) {
                                console.log(`e.target.dataset = \n`, e.target.dataset);
                                console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                                console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
                            }
                            // 跳转stock f9 深度资料的命令：
                            // ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
                            // \ 反斜线要转义！
                            try {
                                // ??? url get 600570.SH ???
                                if (uid !== "null") {
                                    let new_uid = parseInt(uid);
                                    if (debug) {
                                        console.log(`ChromeExternal & ${uid}\n`, (typeof uid));
                                        console.log(`12\\600570.SH\\${uid}`, (typeof uid));
                                        console.log(`12\\600570.SH\\${new_uid}`, (typeof new_uid));
                                    }
                                    ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
                                }else{
                                    console.log(`ChromeExternal & ${uid} === null\n`);
                                }
                                // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
                                // \ 反斜线要转义！
                            } catch (error) {
                                console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                            }
                        });
                    }
                }, 0);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // return null;
        // return data;
    }
);


STOCK_F9_FV.Modules.recentImportantEvents.init = STOCK_F9_FV.Modules.recentImportantEvents.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast02/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `#fv-recent-important-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.recentImportantEvents(url, uid, false);
        // STOCK_F9_FV.Modules.recentImportantEvents(url, uid, true);
    }
);


STOCK_F9_FV.Modules.recentImportantEvents.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast02/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast02/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;


