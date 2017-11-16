"use strict";

/**
 * @author xgqfrms
 * @created 2017.11.16
 * @copyright Gildata 2017-present
 * @private
 * @license MIT
 * 
 * @namespace STOCK_F9_FV
 * @sub_namespaces Utils
 * 
 * @description Customize FontSise
 * @param {Object} args
 * @param {Bollean} debug
 * 
 * @example // NameSpace Template Example , STOCK_F9_FV.Utils.CustomizeFontSise(obj);
 * 
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.CustomizeFontSise = STOCK_F9_FV.Utils.CustomizeFontSise || ((args = {}, debug = false) => {
    // 
});







/**
 * 
 * @description 模态框
 * 
 */
$("#rdxwTable a").live('click', function () {
    // fetch data
    // <i class="icon-external-link"></i> icons
    // http://10.1.5.202/queryservice/news/content/564082789530
    const BAD_URLs = [
        "聚源数据",
        "WWW",
        "qq",
        "ww",
        "www.",
        "www",
        "wwww",
        "http://data.east",
        "http://www.",
        "http://www.eweb",
        "https://wx.qq.com/"
    ];
    /* 
        // http://10.1.5.202/webservice/researchreport/research/zy/551173471225
        // 研报 摘要
        cosnt data = {
            "Title": "温州市、绍兴市、嘉善县、义乌市成省级住房租赁市场培育试点",
            "Id": 564082427768,
            "Content": "　　证券时报网11月15日讯 据浙江在线报道,记者从浙江省建设厅获悉,近日浙江省建设厅联合9个省级部门发布《关于开展省级住房租赁市场培育试点工作的通知》,确定温州市、绍兴市、嘉善县、义乌市为省级住房租赁试点城市,开展试点相关工作。试点工作的目标是,到2022年,基本形成政府、国有企业、社会化机构、个人多主体的租赁住房供给体系;探索形成供需基本平稳、区域分布合理、档次价格多样、满足不同群体需求的租赁住房房源体系。\n",
            "PublishDate": "2017-11-15  17:34:45",
            "Infosource": "证券时报网",
            "Url": "http://kuaixun.stcn.com/2017/1115/13771961.shtml"
        } 
    */
    loaddate('http://10.1.5.202/queryservice/news/content/' + id, {}, function (data) {
        console.log(`data = \n`, JSON.stringify(data, null, 4), typeof (data));
        console.log(`data.Url = \n`, data.Url, typeof (data.Url));
        let url_link = BAD_URLs.includes(data.Url) === true ? `` : `
            <a style="margin-left:10px;color:#5389d2;" class="gotext" id="linkyuanwen" value="${data.Url}">
                查看原文
                <i class="icon-external-link"></i>
            </a>
        `;
        const html_template = `
            <div>
                <div class="modal-title">
                    <h3 style="margin-left: 15px;">${name}</h3>
                </div>
                <div class="zxdtData">
                    <div class="fontSize" id="fontsize">
                        <span>字体：</span>
                        <span class="fontBtn">
                            <a id="big">大</a>
                        </span>
                        <span class="fontBtn">
                            <a id="middle">中</a>
                        </span>
                        <span class="fontBtn active">
                            <a id="small">小</a>
                        </span>
                    </div>
                    <div class="model-Info">
                        <span>
                            来源：
                            <span id="zxdtlaiyuan" class="">
                                ${data.Infosource}
                            </span>
                            &nbsp;
                        </span>
                        <span id="zxdtPubDate" class="">${data.PublishDate}</span>&nbsp;
                        ${url_link}
                    </div>
                    <div class="clr"></div>
                </div>
                <div class="modal-body" style="overflow: auto;text-align: left;">
                    <div id="zxdtContent">
                        ${data.Content}
                    </div>
                </div>
            </div>
        `;
        // 
        var bounced = new Bounced({
            bouncedclass: "layerContianer2",//存放页面的容器类名
            width: getClientWidth()-60,
            height: getClientHeight()-80,
            alerttit: "公司新闻",
            setOverflow: "overflow-y:none",//设置滚动的属性 overflow-y：设置竖向  overflow-x:设置横向
            // str: html.join(''),// array to string
            str: html_template,
            callback:function(){
                // no need ???
            }
        });
        //$(".modal-body").css("height",getClientHeight()-200);
        bounced.show();
        $("#loadingHide").css("display", 'none');
    }, function () {
        $("#loadingHide").css("display", 'block');
    });
});



