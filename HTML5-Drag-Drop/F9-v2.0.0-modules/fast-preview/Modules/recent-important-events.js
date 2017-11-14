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
// IIFE === Closure!
STOCK_F9_FV.Modules.recentImportantEvents = STOCK_F9_FV.Modules.recentImportantEvents || ((url = ``, td_id = `id`, debug = false) => {
    // debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            data = json;// Array
            // async
            if (debug) {
                console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            /*
                let arr = [];
                // get Object keys
                for(let key in data){
                    arr.push(key);
                }
                // let keys = Object.keys(json_obj);
                if (debug) {
                    console.log(`keys = \n`, arr);
                    // arr = ["0", "1", "2", "3", "4", "5"];
                }
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                // CSS in JS
                // base64 & hash
                const tr_classes = ["tr_bgcolor", "tr_border"];
                const td_classes = ["td_bgcolor", "td_border"];
                tr.classList.add(...tr_classes);
                td.classList.add(...td_classes);
            */
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    let date = `${(arr[i].rq !== undefined) ? arr[i].rq : `暂无数据`}`;
                    // let description = `${arr[i].sj} ${arr[i].nr}`;
                    let description = (arr[i].sj !== undefined && arr[i].nr !== undefined) ? `${arr[i].sj} ${arr[i].nr}` : `暂无数据`;
                    let more = `更多 >>`;
                    // `更多 &gt;&gt;`;
                    let id = (arr[i].newid !== undefined) ? `${arr[i].newid}` : `暂无数据`;
                    // only show 5 items
                    if (i < 5) {
                        html_string += `
                            <tr class="fv-recent-important-events-table-tr">
                                <td class="fv-recent-important-events-table-td-key" data-value="data-fv-events">
                                    ${date}
                                </td>
                                <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                                    <a 
                                        href="#${id}"
                                        data-uid="${id}"
                                        data-eventsId="${id}"
                                        data-turn-to-uid="data-turn-to-uid"
                                        title="${description}"
                                        data-disabled="${arr[i].newid !== undefined ? `false` : `true`}"
                                        data-link="fv-recent-important-events-link"
                                        data-link-detail="recent-important-events-link-detail-module">
                                        ${description}
                                    </a>
                                </td>
                            </tr>
                        `;
                        // target="_blank"
                    } else {
                        if (debug) {
                            console.log(`Sorry, we only show 5 items, now!`);
                        }
                    }
                }
            );
            td_id.innerHTML = html_string;
            // Element.insertAdjacentHTML()
            // Element.insertAdjacentElement()
            setTimeout(() => {
                let turn_to_uids = document.querySelectorAll(`a[data-turn-to-uid="data-turn-to-uid"]`);
                if (debug) {
                    console.log(`turn_to_uids = \n`, turn_to_uids);
                }
                for (let index = 0; index < turn_to_uids.length; index++) {
                    turn_to_uids[index].addEventListener(`click`, (e) => {
                        let uid = e.target.dataset.uid;
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                            console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                        }
                        // let uid = e.target.dataset.uid;
                        // data-uid="666666"
                        // 跳转stock f9深度资料的命令：
                        // ChromeExternal.Execute("ExecuteCommand", "命令ID\证券代码\节点ID");
                        try {
                            // ??? url get 600570.SH ???
                            console.log(`ChromeExternal & ${uid}\n`, (typeof uid));
                            if (uid !== "null") {
                                console.log(`12\\600570.SH\\${uid}`, (typeof uid));
                                let new_uid = parseInt(uid);
                                console.log(`12\\600570.SH\\${new_uid}`, (typeof new_uid));
                                ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
                            }else{
                                console.log(`ChromeExternal & ${uid} === null\n`);
                            }
                            // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
                            // \ 反斜线要转义！
                        } catch (error) {
                            console.log(`ChromeExternal error = \n`, error);
                        }
                    });
                }
            }, 0);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return null;
    // return data;
});


STOCK_F9_FV.Modules.recentImportantEvents.init = STOCK_F9_FV.Modules.recentImportantEvents.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/2.json`) => {
        let td_id = document.querySelector('#fv-recent-important-tbody');
        // STOCK_F9_FV.Modules.recentImportantEvents(url, td_id, true);
        STOCK_F9_FV.Modules.recentImportantEvents(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.recentImportantEvents.init(`http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`);
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;


