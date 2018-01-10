"use strict";

/**
 * @name management-layer-profiles 管理层概况与持股
 * @author xgqfrms
 * creadted 2017.12.22
 * @param {* String} url
 * @param {* Array} tbodys
 * @param {* String} title
 * @param {* String} more
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.managementLayerProfiles = OTC_F9_FV.Modules.managementLayerProfiles || (
    (url = ``, tbodys = [], title = ``, more = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                // emptyChcker();
                const emptyChecker = (key = ``) => {
                    let result = true;
                    switch (key) {
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    if (emptyChecker(json)) {
                        let text = ``,
                            time = ``;
                       if (Object.keys(json).length > 0) {
                            if (emptyChecker(datas.ggcg)) {
                                let obj = datas.ggcg || {};
                                let {dsh, jsh, gg, sj, hxyg} = obj;
                                emptyChecker(sj) ? time = `(${sj})` : time = ``;
                                // (截止2015-06-30) ??? data-title
                                // "sj": "2017-06-30",
                                text = `
                                    <p data-p="data-otc-MLP-title">
                                        报告期内, 公司在职董事会人数
                                        <span data-span="data-otc-MLP-title">${dsh}</span>人, 监事会
                                        <span data-span="data-otc-MLP-title">${jsh}</span>人, 高级管理人员
                                        <span data-span="data-otc-MLP-title">${gg}</span>人, 核心员工
                                        <span data-span="data-otc-MLP-title">${hxyg}</span>人.
                                    </p>
                                `;
                            }else{
                                text = `
                                    <p data-none="no-data-p">
                                        <span data-none="no-data-span"></span>
                                    </p>
                                `;
                            }
                            title.insertAdjacentHTML(`beforeend`, text);
                            // date.insertAdjacentHTML(`beforeend`, time);
                            if (Array.isArray(datas.ggcg.ggs) && datas.ggcg.ggs.length > 0) {
                                let trs = ``;
                                for (let i = 0; i < datas.ggcg.ggs.length; i++) {
                                    // let title = (datas[i].xwtitle !== undefined) ? datas[i].xwtitle.replace(/(：：)/ig, "：") : `暂无数据`,
                                    //     time = (datas[i].xwsj !== undefined && datas[i].xwsj !== null) ? datas[i].xwsj : `暂无数据`,
                                    //     id = (datas[i].newid !== undefined) ? datas[i].newid : `暂无数据`;
                                    let {
                                        xm: name,
                                        xb: gender,
                                        nl: age,
                                        xl: degree,
                                        zw: position,
                                        // aaa: pay,
                                        qmcgsl: amount,
                                        zb: proportion,
                                        zjbd: change
                                    } = datas.ggcg.ggs[i];
                                    trs += `
                                        <tr class="otc-management-layer-profiles-table-tr" data-test="${i}">
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${name !== undefined ? name : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${gender !== undefined ? gender : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${age !== undefined ? age : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${degree !== undefined ? degree : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${position !== undefined ? position : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${amount !== undefined ? amount : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${proportion !== undefined ? proportion : `--`}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${change !== undefined ? change : `--`}
                                            </td>
                                        </tr>
                                    `;
                                    // `
                                    // <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                    //     ${pay}
                                    // </td>
                                    // `
                                }
                                tbodys[0].insertAdjacentHTML(`beforeend`, trs);
                            }else{
                                // no data ??? Array
                                // http://10.1.5.202/webservice/fastview/otcper/otcperfast11/834380.OC
                                tbodys[0].insertAdjacentHTML(`beforeend`, trs);
                            }
                            if (Array.isArray(datas.gglz) && datas.gglz.length > 0) {
                                let trs2 = ``;
                                // let name = ``,
                                //     position = ``,
                                //     begin = ``,
                                //     end = ``,
                                //     ok = ``;
                                for (let i = 0; i < datas.gglz.length; i++) {
                                    let {
                                        xm: name,
                                        zw: position,
                                        beginDate: begin,
                                        endDate: end,
                                        rz: ok,
                                    } = datas.gglz[i];
                                    trs2 += `
                                        <tr class="otc-management-layer-profiles-table-tr" data-test="${i}">
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${name}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${position}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${begin}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${end}
                                            </td>
                                            <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                                ${(ok === true) ? "是" : "否"}
                                            </td>
                                        </tr>
                                    `;// 是否
                                }
                                tbodys[1].insertAdjacentHTML(`beforeend`, trs2);
                            }else{
                                // no data
                                // ??? table, no value => no key!
                                tbodys[1].insertAdjacentHTML(`beforeend`, trs2);
                            }
                       } else {
                           // no data
                           // all no data & hide table & show no data
                            let div = document.querySelector(`[data-titles="data-otc-MLP-title"]`);
                            div.style.display = "none;";
                            let tables = document.querySelectorAll(`[data-table="otc-management-layer-profiles-table-box"]`);
                            for (let i = 0; i < tables.length; i++) {
                                tables[i].setAttribute(`data-no-table`, `otc-management-layer-profiles-table-box`);
                                // tables[i].style.display = "none;";
                            }
                       }
                    }else{
                        // error === no data ???
                        let message = `handle json error!`,
                            fileName = `management-layer-profiles.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/management-layer-profiles.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-management-layer-profiles-data"]`);
            if (debug) {
                console.log(`turn_to_uids = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        gilcode = OTC_GILCODE ? OTC_GILCODE : window.OTC_GILCODE,
                        node_path = `12\\${gilcode}\\${uid}`;
                    try {
                        if (uid !== "null") {
                            ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal & ${uid} === null\n`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                    }
                });
            }else{
                throw new Error(`turn_to_uid is `, turn_to_uid);
            }
        }, 0);
    }
);




OTC_F9_FV.Modules.managementLayerProfiles.init = OTC_F9_FV.Modules.managementLayerProfiles.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast11/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tbodys = document.querySelectorAll(`[data-tbody="otc-management-layer-profiles-table-tbody"]`),
            title = document.querySelector(`[data-titles="data-otc-MLP-title"]`),
            more = document.querySelector(`[data-more="otc-management-layer-profiles-link-more"]`);
        OTC_F9_FV.Modules.managementLayerProfiles(url, tbodys, title, more, false);
    }
);

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430000.OC`;
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.managementLayerProfiles.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast11/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.managementLayerProfiles.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast11/430002.OC`;

