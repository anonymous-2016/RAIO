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
                    let date = `${(arr[i].rq !== undefined) ? arr[i].rq : `😟 暂无数据`}`;
                    // let description = `${arr[i].sj} ${arr[i].nr}`;
                    let description = (arr[i].sj !== undefined && arr[i].nr !== undefined) ? `${arr[i].sj} ${arr[i].nr}` : `😟 暂无数据`;
                    let more = `更多 >>`;
                    // `更多 &gt;&gt;`;
                    let id = (arr[i].newid !== undefined) ? `${arr[i].newid}` : `😟 暂无数据`;
                    html_string += `
                        <tr class="fv-recent-important-events-table-tr">
                            <td class="fv-recent-important-events-table-td-key" data-value="data-fv-events">
                                ${date}
                            </td>
                            <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                                <a href="#${id}" data-disabled="${arr[i].newid !== undefined ? `false` : `true`}" data-link="fv-recent-important-events-link" data-link-detail="recent-important-events-link-detail-module" data-eventsId="${id}">${description}</a>
                            </td>
                        </tr>
                    `;
                    /*
                        <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                            <div class="css-data-loading" data-loading="pure-css-data-loading">
                                CSS Loading...
                            </div>
                        </td>
                        <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events" data-more="data-link-more" title="近期重要事项-更多">
                            ${more}
                        </td>
                    */
                }
            );
            /* 
                # Disabled elements, no a link
                https://www.w3.org/TR/html5/disabled-elements.html
                <input type="text" value="xxxx" disabled="${arr[i].sj !== undefined ? false : true}" />
                <input type="text" value="xxxx" disabled="${arr[i].newid !== undefined ? false : true}" />
                <a href="#${id}" data-disabled="${arr[i].newid !== undefined ? `false` : `true`}" data-link="fv-recent-important-events-link" data-link-detail="recent-important-events-link-detail-module" data-eventsId="${id}">${description}</a>
            */
            // td_id.insertAdjacentElement('beforebegin', html_string);
            // Uncaught TypeError: Failed to execute 'insertAdjacentElement' on 'Element': parameter 2 is not of type 'Element'.
            /*
                let div = document.createElement('div');
                div.innerText = html_string;// string
                td_id.insertAdjacentElement('beforeend',div);// string
                td_id.innerHTML = html_string;
                td_id.insertAdjacentElement('beforeend',div);// 
            */
            // td_id.innerText = value;
            td_id.innerHTML = html_string;
            // Element.insertAdjacentHTML()
            // Element.insertAdjacentElement()
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return null;
    // return data;
});


STOCK_F9_FV.Modules.recentImportantEvents.init = STOCK_F9_FV.Modules.recentImportantEvents.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/2.json`) => {
        let td_id = document.querySelector('#fv-recent-important-tbody');
        STOCK_F9_FV.Modules.recentImportantEvents(url, td_id, true);
    }
);

STOCK_F9_FV.Modules.recentImportantEvents.init();// url

// call fetch json datas
setTimeout(() => {
    // async & await
    /* 
        // const url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;
        const url = `http://localhost:3000/fast-preview/json/datas/2.json`;
        // let td_id = document.querySelector('[data-value="data-fv-infos"]');
        let td_id = document.querySelector('#fv-recent-important-tbody');
        STOCK_F9_FV.Modules.recentImportantEvents(url, td_id, true);
    */
    // const debug = true;
    // recentImportantEvents(url, td_id, debug);
}, 0);






/* 

// id="fv-recent-important-tbody"

// insertHTML with data

<tr class="fv-recent-important-events-table-tr">
    <td class="fv-recent-important-events-table-td-key">涉及概念</td>
    <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
        <div class="css-data-loading" data-loading="pure-css-data-loading">
            CSS Loading...
        </div>
    </td>
    <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
        <div class="css-data-loading" data-loading="pure-css-data-loading">
            CSS Loading...
        </div>
    </td>
</tr>


td_id.innerText;
// ""
td_id.innerHTML;
// "<!-- all comments -->"

td_id.innerHTML = `<tr class="fv-recent-important-events-table-tr">
    <td class="fv-recent-important-events-table-td-key">涉及概念</td>
</tr>`;
// OK


*/