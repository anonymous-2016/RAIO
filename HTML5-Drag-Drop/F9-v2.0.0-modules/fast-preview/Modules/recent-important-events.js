"use strict";
/**
 * recent important events
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

const recentImportantEvents = (url = ``, td_id = `id`, debug = false) => {
    debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            data = json;
            // async
            if (debug) {
                console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let arr = [];
            // get Object keys
            for(let key in data){
                arr.push(key);
            }
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
            arr.map(
                (obj, i) => {
                    let date = arr[i].rq;
                    let description = `${arr[i].rq} ${arr[i].nr}`;
                    let more = `更多 >>`;
                    // `更多 &gt;&gt;`;
                }
            );
            activeElem.insertAdjacentElement('beforebegin',tempDiv);
            td_id.innerText = value;
            // td_id.innerHTML = value;
            // Element.insertAdjacentHTML()
            // Element.insertAdjacentElement()
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return null;
    // return data;
};


// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;
    let td_id = document.querySelector('[data-value="data-fv-infos"]');
    recentImportantEvents(url, td_id);
    // const debug = true;
    // recentImportantEvents(url, td_id, debug);
    // recentImportantEvents(url, td_id, true);
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

*/