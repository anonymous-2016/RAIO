const url = `https://cdn.xgqfrms.xyz/json/hightstock/aapl.json`;
// const url = `./aapl.json`;

fetch(url)
.then(res => res.json())
.then(
    (json) => {
        const debug = false;
        // fetch(url, debug = false)
        // TypeError: Failed to execute 'fetch' on 'Window': parameter 2 ('init') is not an object.
        if (debug) {
            console.log(`json = \n `, JSON.stringify(json, null, 4));
        }
        // do somthing
    }
)
.catch(err => console.log(`fetch error = \n`, err));



let data = [];
const url = ``;
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
                let date = arr[i].rq;
                let description = `${arr[i].sj} ${arr[i].nr}`;
                let more = `更多 >>`;
                html_string += `
                    <tr class="fv-recent-important-events-table-tr">
                        <td class="fv-recent-important-events-table-td-key" data-value="data-fv-events">
                            ${date}
                        </td>
                        <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                            ${description}
                        </td>
                        <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events" data-more="data-link-more" title="近期重要事项-更多">
                            ${more}
                        </td>
                    </tr>
                `;
            }
        );
        td_id.innerHTML = html_string;
    }
)
.catch(error => console.log(`error = \n`, error));




// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
    let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
    importantInfos(url, tds, ui_arr);
    // importantInfos(url, tds, ui_arr, true);
}, 0);