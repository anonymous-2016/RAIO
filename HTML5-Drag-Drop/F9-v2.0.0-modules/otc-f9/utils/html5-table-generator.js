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

/**

 */

const HTML5TableGenerator = (
    options = {
        name: `f9-fastview`,
        title: `Module's Title`,
        values: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5",
            "Module 6",
            "Module 7"
        ],
        dataset: {
            link: `a-link`,
            more: `module-link-more`,
            id: `uid 007`,
            node: `skip node id`,
            stars: [
                `[data-abc*="data-abc-xyz"]`,
                `[data-abc*="data-abc-ufo"]`
            ]
        },
        xyz: {
            todo: `todos, coming soon!`
        }
    },
    debug = false
) => {
    let table = ``;
    const {
        name,
        title,
        values,
        dataset,
        xyz
    } = {...options};
    if (debug) {
        // console.log(`options`, JSON.stringify(options, null, 4));
    }
    return table;
};






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
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast04/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-otc-LFD"]`),
            title = document.querySelector(`[data-text="otc-latest-financial-data-text"]`);
        // copy(Object.keys(json));
        OTC_F9_FV.Utils.HTML5TableGenerator(url, tds, title, false);
    }
);












