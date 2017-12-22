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
                try {
                    if (json !== undefined && typeof(json) === "object") {
                        let text = ``,
                            time = ``;
                        if (datas.ggcg !== undefined && typeof(datas.ggcg) === "object") {
                            let obj = datas.ggcg || {};
                            let {dsh, jsh, gg, sj, hxyg} = obj;
                            (sj !== undefined && sj !== null) ? time = `(截止${sj})` : time = ``;
                            // (截止2015-06-30) ??? title
                            text = `
                                <p data-p="data-otc-MLP-title">
                                    报告期内, 公司在职董事会人数
                                    <span data-span="data-otc-MLP-title">${dsh}</span>人，监事会
                                    <span data-span="data-otc-MLP-title">${jsh}</span>人，高级管理人员
                                    <span data-span="data-otc-MLP-title">${gg}</span>人，核心员工
                                    <span data-span="data-otc-MLP-title">${hxyg}</span>人。
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
                                    <tr class="otc-management-layer-profiles-table-tr">
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${name}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${gender}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${age}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${degree}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${position}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${amount}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${proportion}
                                        </td>
                                        <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP">
                                            ${change}
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
                            // no data
                        }
                        if (Array.isArray(datas.gglz) && datas.gglz.length > 0) {
                            let trs2 = ``;
                            let xyz = ``;
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
                                xyz = (ok === true) ? "是" : "否";
                                console.log(`xyz = `, xyz);
                                trs2 += `
                                    <tr class="otc-management-layer-profiles-table-tr">
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
                                            ${xyz}
                                        </td>
                                    </tr>
                                `;// 是否
                            }
                            tbodys[1].insertAdjacentHTML(`beforeend`, trs2);
                        }else{
                            // no data
                        }
                    }else{
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
        return datas;
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


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.managementLayerProfiles.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast11/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.managementLayerProfiles.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast11/430002.OC`;

