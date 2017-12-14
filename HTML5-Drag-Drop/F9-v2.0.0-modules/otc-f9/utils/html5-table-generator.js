"use strict";

/**
 * @name html5-table-generator 表格生成器
 * @author xgqfrms
 * @creadted 2017.12.12
 *
 * @license MIT
 * @copyright xgqfrms 2017-present
 * @description HTML5TableGenerator
 *
 * @param {* Object} options
 * @param {* Boolean} debug
 */
import {CFJ, ConsoleFormatJSON} from "./console_format_json";


// module name === OTC
const HTML5TableGenerator = (
    options = {
        namespace: `otc`,
        moduleName: `company-new`,
        moduleAlias: `CN`,
        moduleTitle: `公司新闻`,
        moduleLinks: [`更多新闻`],
        moduleTheads: [`新闻标题`, `新闻日期`, `新闻来源`],
        moduleKeys: [
            "Module key 1",
            "Module key 2",
            "Module key 3",
            "Module key 4",
            "Module key 5",
            "Module key 6",
            "Module key 7"
        ],
        moduleValues: [
            "Module value 1",
            "Module value 2",
            "Module value 3",
            "Module value 4",
            "Module value 5",
            "Module value 6",
            "Module value 7"
        ],
        moduleDataset: {
            link: `a-link`,
            more: `module-link-more`,
            id: `uid 007`,
            node: `skip node id`,
            stars: [
                `[data-abc*="data-abc-xyz"]`,
                `[data-abc*="data-abc-ufo"]`
            ]
        },// loop ???
        xyz: {
            todo: `todos, coming soon!`
        }
    },
    debug = false
) => {
    let html = ``,
        div = ``,
        a_links = ``,
        thead = ``,
        thead_tds = ``,
        tbody = ``,
        tbody_trs = ``,
        tfoot = ``,
        table = ``;
    const {
        namespace,
        moduleName,
        moduleAlias,
        moduleTitle,
        moduleLinks,
        moduleTheads,
        moduleKeys,
        moduleValues,
        moduleDataset,
        xyz
    } = {...options};
    for (let i = 0; i < moduleTheads.length; i++) {
        a_links += `
            <a href="#${moduleLinks[i]}" data-more="${namespace}-${moduleName}-link-more">${moduleLinks[i]}</a>
        `;
    }
    div = `
        <div class="${namespace}-h5dnd-modules-title-box">
            <p class="${namespace}-h5dnd-modules-title" data-title="${namespace}-${moduleName}-title">
                ${moduleTitle}
                <span data-more="${namespace}-${moduleName}-link">
                    ${a_links}
                </span>
            </p>
        </div>
    `;
    for (let i = 0; i < moduleTheads.length; i++) {
        thead_tds += `
            <td class="${namespace}-${moduleName}-table-td-title">${moduleTheads[i]}</td>
        `;
    }
    thead = `
        <table class="${namespace}-${moduleName}-table">
            <thead class="${namespace}-${moduleName}-table-thead">
                <tr class="${namespace}-${moduleName}-table-tr">
                    ${thead_tds}
                </tr>
            </thead>
        </table>
    `;
    for (let i = 0; i < moduleValues.length; i++) {
        tbody_trs += `
            <tr class="${namespace}-${moduleName}-table-tr">
                <td class="${namespace}-${moduleName}-table-td-key" data-alias="${moduleTitle}-${i}" data-key="data-${namespace}-${moduleAlias}">${moduleKeys[i]}</td>
                <td class="${namespace}-${moduleName}-table-td-value" data-value="data-${namespace}-${moduleAlias}">${moduleValues[i]}</td>
                <td class="${namespace}-${moduleName}-table-td-value" data-value="data-${namespace}-${moduleAlias}"></td>
            </tr>
        `;
    }
    tbody = `
        <tbody class="${namespace}-${moduleName}-table-tbody" data-tbody="${namespace}-${moduleName}-table-tbody">
            ${tbody_trs}
        </tbody>
    `;
    tfoot = `
        <tfoot class="${namespace}-${moduleName}-table-tfoot">
            <tr class="${namespace}-${moduleName}-table-tr">
                <td class="${namespace}-${moduleName}-table-td-value" data-value="data-${namespace}-${moduleAlias}"></td>
            </tr>
        </tfoot>
    `;
    table = `
        <table class="${namespace}-${moduleName}-table">
            ${thead}
            ${tbody}
            ${tfoot}
        </table>
    `;
    html = `
        <section class="${namespace}-module-box-5">
            ${div}
            ${table}
        </section>
    `;
    if (debug) {
        // console.log(`options`, JSON.stringify(options, null, 4));
        ConsoleFormatJSON(options, debug);
    }
    return html;
};



export default HTML5TableGenerator;
export {HTML5TableGenerator, H5TG};

// HTML5TableGenerator();



/**
 * @namespace OTC_F9_FV
 * @subnamespace OTC_F9_FV.Utils
 *
 * @description HTML5TableGenerator
 * @name html5-table-generator 表格生成器
 *
 * @author xgqfrms
 * @creadted 2017.12.12
 * @license MIT
 * @copyright xgqfrms 2017-present
 *
 * @param {* Object} options
 * @param {* Boolean} debug
 */



// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Utils = OTC_F9_FV.Utils || {};

OTC_F9_FV.Utils.HTML5TableGenerator = OTC_F9_FV.Utils.HTML5TableGenerator || (
    (url = ``, tds = [], title = ``, debug = false) => {
        // do somethings
    }
);

OTC_F9_FV.Utils.HTML5TableGenerator.init = OTC_F9_FV.Utils.HTML5TableGenerator.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/${namespace}per`,
            socket: `/${namespace}perfast04/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-${namespace}-LFD"]`),
            title = document.querySelector(`[data-text="${namespace}-latest-financial-data-text"]`);
        // copy(Object.keys(json));
        OTC_F9_FV.Utils.HTML5TableGenerator(url, tds, title, false);
    }
    // HTML5TableGenerator
);












