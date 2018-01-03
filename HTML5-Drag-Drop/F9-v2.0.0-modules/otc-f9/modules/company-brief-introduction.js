"use strict";

/**
 * @name company-brief-introduction 公司简介
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* String} tbody
 * @param {* String} title
 * @param {* Array} uids
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.companyBriefIntroduction = OTC_F9_FV.Modules.companyBriefIntroduction || (
    (url = ``, tbody = ``, title = ``, uids = [], debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (typeof(datas) === "object" && Object.keys(datas).length > 0) {
                        // let keys = Object.keys(json);
                        let html = ``,
                            text = ``;
                        // "gsjs": "公司介绍"
                        if (datas.gsmc !== null && datas.gsmc !== undefined) {
                            html = `
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="公司名称">公司名称</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.gsmc}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="成立时间">成立时间</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.gsclsj}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="挂牌时间">挂牌时间</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.gsgpsj}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="所属证监会行业">所属证监会行业</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.zjhhy}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="董事长">董事长</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.dsz}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="总经理">总经理</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.zjl}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="控股股东">控股股东</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.kggd}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="实际控制人">实际控制人</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.sjkzr}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="注册资本(万元)">注册资本(万元)</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.zczb}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="法人代表">法人代表</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.frdb}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="注册地址">注册地址</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.zcdz}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="联系电话">联系电话</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.lxdh}
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="网址">网址</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        <a href="${datas.wz}" target="_blank" data-link="website-link">${datas.wz}</a>
                                    </td>
                                </tr>
                                <tr class="otc-company-brief-introduction-table-tr">
                                    <td class="otc-company-brief-introduction-table-td-key" data-alias="主营业务">主营业务</td>
                                    <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                        ${datas.zycpyfw}
                                    </td>
                                </tr>
                            `;
                        }else{
                            html = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        if (datas.gsjs !== null && datas.gsjs !== undefined) {
                            text = `
                                <p>
                                    <span data-title-span="brief-span">
                                        ${datas.gsjs}
                                    </span>
                                </p>
                            `;
                        }else{
                            text = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        // insert DOM
                        tbody.insertAdjacentHTML(`beforeend`, html);
                        title.insertAdjacentHTML(`beforeend`, text);
                        // const & global bug
                        const autoAlignHeight = (uids = [], debug = false) => {
                            let domx = document.querySelector(uids[0]),
                                domy = document.querySelector(uids[1]),
                                domz = document.querySelector(uids[2]),
                                // height = window.getComputedStyle(domx, null).getPropertyValue("height");
                                // height = domx.clientHeight; // no border
                                X_height = domx.offsetHeight, // include border
                                Y_height = domx.clientHeight,
                                title_height = domz.offsetHeight;
                            // offset includes border 1 + 1
                            if (debug) {
                                console.log(`X_height =`, X_height);
                                console.log(`Y_height =`, Y_height);
                                console.log(`title_height =`, title_height);
                            }
                            if (X_height > Y_height) {
                                domy.setAttribute(`style`, `height: ${X_height - title_height}px;`);
                            }else{
                                domy.setAttribute(`style`, `height: ${X_height - title_height}px;`);
                                // domy.setAttribute(`style`, "overflow-y: scroll;");
                            }
                        };
                        autoAlignHeight(uids);
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-brief-introduction.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-brief-introduction.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.companyBriefIntroduction.init = OTC_F9_FV.Modules.companyBriefIntroduction.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast03/`,
            gilcode: `430002.OC`
        }
    ) => {
        // let url = `http://10.1.5.202/otc/f9/datas/4.json`,
        let url = `${ip}${path}${socket}${gilcode}`,
            tbody = document.querySelector(`.otc-company-brief-introduction-table-tbody`),
            title = document.querySelector(`[data-titles="data-otc-CBI-title"]`);
        const uids = [`[data-float="float-table"]`, `[data-float="float-div"]`, `[data-float="float-title"]`];
        OTC_F9_FV.Modules.companyBriefIntroduction(url, tbody, title, uids, false);
    }
);

// console.log(`company-brief-introduction & OTC_GILCODE`, OTC_GILCODE);
// console.log(`company-brief-introduction & window.OTC_GILCODE`, window.OTC_GILCODE);
// undefined

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

// console.log(`company-brief-introduction & OTC_GILCODE`, OTC_GILCODE);
// 430002.OC

OTC_F9_FV.Modules.companyBriefIntroduction.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast03/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyBriefIntroduction.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast03/430002.OC`;




