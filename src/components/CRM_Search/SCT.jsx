import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.08.06
 * 
 * @class SCT
 * @extends {Component}
 */

import {urls} from '../../app/urls.js';
import {color} from '../../app/color';
import {debug} from '../../app/debug';

import {TCB} from './TabsContentBox';


let arr = [],
    arrout = [];

class SCT extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: this.props.data,
            new_data: {},
            input_datas: [],
            output_datas: [],
            in_out_data: [],
            in_data: [],
            out_data: [],
            developer: "",
            url_name: this.props.urlname,
            new_example: {}
        };
    }
    // url_name
    // fetch data by `ReportName` & `GetSchema`
    inputClick = (url) => {
        // http://localhost:7777/input
        let u = `${url}`;
        if (debug) {
            console.log(`%c url test = ${u}`, color.color_css3);
        }
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            if (!debug) {
                console.log(`json = ${json}`);
                console.log(`json.length = ${json.length}`);
                console.log(`%c json.Info`, color.color_css1,json.Info.schema.Properties);
            }
            // json.Info.developer
            if(json.Info.developer){
                this.setState(
                    {
                        developer: json.Info.developer
                    }
                );
            }
            // Properties
            if(json.Info === "Does't Contain The undefined Report"){
                // "Info" : "Does't Contain The undefined Report"
                return arr;
            }
            let datas = json.Info.schema.Properties;
            if (!debug) {
                let {ApiName, SecuCode} = datas;
                console.log(`ApiName = ${ApiName}`, ApiName);
                console.log(`ApiName = ${ApiName.Description}`);
                console.log(`SecuCode = ${SecuCode.Description}`);
            }
            // Objects to Array
            // let arr = [];
            let i = 0;
            // reset arr
            arr.length = 0;
            // arr = [];
            for (let key in datas) {
                if(!datas.hasOwnProperty(key)) continue;
                if(datas.hasOwnProperty(key)) {
                    // datas[key].key = key;
                    // key: "ApiName"
                    // datas[key].key = i++;
                    datas[key].name = key;
                    datas[key].key = ("1000" + i++);
                    if(datas[key].Required !== undefined){
                        datas[key].Description += `(${datas[key].Required})`;
                    }else{
                        datas[key].Description += `(可选参数)`;
                    }
                    // key === index
                    arr.push(datas[key]);
                }
            }
            // console.log(`arr result = `, arr);
            this.setState(
                {
                    input_datas: arr
                }
            );
            // commandexample
            /* 
            if(json.Info.commandexample){
                // "{            \"SecuCode\":  000011,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }"
                // regex ""
                let new_example = JSON.parse(json.Info.commandexample);
                // object
                // {SecuCode: "000011", ApiName: "fund.f9.fund_profile.FundIntroduce"}
            }
            */
            return arr;
        });
        // console.log(`new arr = `, arr);
    };
    // fetch data by `ReportName` & `GetRowSchema`
    outputClick = (url) => {
        // https://cdn.xgqfrms.xyz/json/tables.json
        let u = `${url}`;
        // console.log(`url test = ${u}`, u);
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            if(debug){
                console.log(`json = ${json}`); 
            }
            if (!debug) {
                console.log(`json.length = ${json.length}`);
                console.log(`json.Info.schema.Properties `, json.Info.schema.Properties);
            }
            // Properties
            let datas = [];
            if(json.Success === false){
                // "Info" : "Does't Contain The undefined Report"
                // "Info": "Does't Contain The xxxxxxx Report"
                // "Success": false
                return datas;
            }
            if(json.Info.name && json.Info.schema === undefined){
                // "Info" : {"name" : "StaticReportImageData"}
                // json.Info.name === "StaticReportImageData"
                return datas;
            }
            // single table
            if (json.Info.schema.Properties !== undefined){
                // json.Info.schema.Properties
                let table = json.Info.schema;
                let arr = [],
                    new_obj = {},
                    i = 0;
                // no desc
                let objs = table.Properties;
                if(!debug){
                    console.log(`%c @@@@@@@@@@@@ no tab.name === "" @@@@@@@@@@@@$`, color.color_css1);
                }
                // add Table.name = "Table1"
                for (let key in objs) {
                    if(!objs.hasOwnProperty(key)) continue;
                    if (objs.hasOwnProperty(key)) {
                        // A0 === name
                        objs[key].name =  key;
                        if(objs[key].Description){
                            // objs[key].name =  key;
                        }else{
                            // TestProtocol 暂无注释
                            objs[key].Description = "☹️ 暂无注释";
                            if (!debug) {
                                console.log(`%c objs[key].Description === "emoji ☹️ 暂无注释" `, color.color_css2, objs[key].Description);
                            }
                        }
                        objs[key].key = ("k000" + i++);
                    }
                    if (!debug) {
                        console.log(`%c objs[key] === {type: "string", Description: "A份额简称", name: "A1", key: "k0001"} `, color.color_css2, objs[key]);
                    }
                    arr.push(objs[key]);
                }
                new_obj.title = "";
                new_obj.tablenamle = "";
                new_obj.datas = arr;
                datas.push(new_obj);
                // datas = [];
            }else {
                // multi tables
                // json.Info.schema.BasicInformationRow.Properties
                let tables = json.Info.schema;
                // let i = 0;
                for (let key in tables) {
                    let arr = [],
                        new_obj = {},
                        i = 0;
                    // tab.name === "AnyManagedFundsRow":[] ???
                    // results table
                    if(!debug){
                        console.log(`%c $$$$$$$$$$  tab.name === "AnyManagedFundsRow":[] ??? $$$$$$$$$$`, color.css2);
                    }
                    // add Table.name = "AnyManagedFundsRow"
                    if(!tables.hasOwnProperty(key)) continue;
                    if (tables.hasOwnProperty(key)) {
                        let title = tables[key].desc,
                            tablenamle = key,
                            objs = tables[key].Properties;
                        for (let key in objs) {
                            if (objs.hasOwnProperty(key)) {
                                // A0
                                // TestProtocol 暂无注释
                                objs[key].name =  key || "暂无注释";
                                objs[key].key = ("k000" + i++);
                            }
                            arr.push(objs[key]);
                            if (!debug) {
                                console.log(`arr ${key}`, arr);
                            }
                        }
                        // console.log(`title ${key}`, title);
                        new_obj.title = title;
                        new_obj.tablenamle = tablenamle;
                        new_obj.datas = arr;
                        if (debug) {
                            console.log(`%c new output obj = `, color.css2, new_obj);
                        }
                    }
                    datas.push(new_obj);
                    if (!debug) {
                        console.log(`%c datas key = ${key} \n datas = `, color.css1, datas);
                        console.log(`%c datas i = ${i} \n datas = `, color.css2, datas[i-1]);
                    }
                    // i++;
                }
            }
            // console.log(`datas[0] = `, datas[0]);
            // console.log(`datas[0].length = `, datas[0].length);
            // Array.isArrray(datas[0]);
            // console.log(`Array.isArray(datas[0]) = `, Array.isArray(datas[0]));
            // console.log(`typeof datas[0] = `, typeof(datas[0]));
            this.setState(
                {
                    output_datas: datas
                }
            );
            return datas;
        });
    };
    in_out_data = () => {
        // input + output = in_out_data
        // filter data
    };
    componentDidMount() {
        let new_data = this.state.data;
        // this.props.data
        // get url
        if (!debug) {
            console.log(`this.state.url_name`, this.state.url_name);
        }
        // undefined url_key ???
        let url_key = this.state.url_name;
        if(url_key === undefined){
            url_key = ""; 
        } 
        // developer moved to input
        // let developer = "";
        // developer ? developer : "undefined"
        /* if(new_data.developer){
            developer = new_data.developer;
            this.setState(
                {
                    developer: developer
                }
            );
        } */
        this.setState(
            {
                new_data: Object.assign({}, new_data)
            }
        );
        if(!debug){
            console.log(`%c new_data`, color.color_css2, new_data);
            console.log(`%c new_data url_key = \n`, color.color_css1, url_key);
            // console.log(`%c developer = \n`, color.color_css3, developer);
            console.log(`typeof url_key`, (typeof url_key));
        }
        /* 
            fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail
            name === ReportName (唯一的 query key)
            GetSchema === input
            http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}
            GetRowSchema === output
            http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}
        */
        if (!debug) {
            console.log(`this.state.url_name url_key`, url_key);
        }
        const fixedInURL = `{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":`;
        const fixedOutURL = `{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":`;
        let url_in = `${urls.input}?${fixedInURL}"${url_key}"}`,
            url_out = `${urls.output}?${fixedOutURL}"${url_key}"}`;
        this.inputClick(url_in);
        // get developer
        this.outputClick(url_out);
    }
    render() {
        const {input_datas, output_datas, in_out_data} = this.state;
        // const {input_datas, output_datas} = this.props.datas;
        return (
            <div>
                {/* this.state.data = {JSON.stringify(this.state.data)} */}
                {/* {this.state.new_data.key}<br />  */}
                <hr/>
                <div style={{color: 'green'}}>
                    <TCB 
                        developer={this.state.developer || (Math.random()*10 > 5 ? "xgqfrms" : "admin")} 
                        input_datas={input_datas}
                        output_datas={output_datas}
                        in_out_data={in_out_data}
                    />
                </div>
            </div>
        );
    }
}

SCT.propTypes = {
    test: PropTypes.string,
    data: PropTypes.object.isRequired,
    urlname: PropTypes.string.isRequired,
};

export {SCT};
export default SCT;



/*

    // example === input & JSON.parse(json.Info.commandexample

    // 基金->F9-> 基金概况

    "{            "SecuCode": 000011,            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"
    "{            "SecuCode": 000001,            "ApiName": "fund.f9.fund_profile.FundManagerMent" }"
    "{            "SecuCode": 000011,            "ApiName": "fund.f9.fund_profile.FundManager" }"

    // 主板F10-->财务概况

    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FastView.DuBangAnalysis" }"
    "{            "SecuCode": "601318",            "ApiName": "F10.FinaIndicator.SpecialIndex" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.AssetsDebtConstitute.Assets" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FinancialStatementView" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.AssetsDebtConstitute.Debt" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FastView.NoticePerformance" }"


bad

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.fund_profile.FundIntroduce%22}

?{"Admin":"report","Action":"GetSchema","WriteType":"json",%20"ReportName":"fund.f9.fund_profile.FundIntroduce"}



good

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22F10.FinaIndicator.SpecialIndex%22}

?{"Admin":"report","Action":"GetSchema","WriteType":"json",%20"ReportName":"F10.FinaIndicator.SpecialIndex"}


*/

/* 

    // Sorts 单选框
    // Sorts === json.Info.schema
    // :基金->F9->基金概况 ->基金经理->基金经理详细信息(基本资料)
    // multi tables
    // fund.f9.fund_profile.FundManager.BasicInformations
    // schema.AnyManagedFundsRow.Properties

    schema: {
        "AnyManagedFundsRow" : {
            "Properties": {
                "A0": {
                    "type": "string",
                    "Description": "管理公司"
                },
                "A1": {
                    "type": "string",
                    "Description": "出生日期"
                }
            },
            "desc" : "基金经理详细信息(历任管理基金)",
            "type" : "object",
        },
        BasicInformationRow : {
            Properties: {
                A0: {
                    "type" : "string",
                    "Description" : "性别"
                }
            },
            desc : "基金经理详细信息(基本资料)",
            type : "object",
        }
    }

    AnyManagedFundsRow: {
        "desc" : "基金经理详细信息(历任管理基金)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
        // {}.keys
    }

    BasicInformationRow: {
        desc : "基金经理详细信息(基本资料)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
    }




    Field : [
        AnyManagedFundsRow.A0: AnyManagedFundsRow.desc + AnyManagedFundsRow.cols.A0 
        // 
    ]



        基金经理详细信息(基本资料

    "Sorts":[
        {
            "Field":"basicinformationrow.a0",
            "Sort":"asc"
        }
    ]




    // OutField 多选框

    AnyManagedFundsRow: {
        "desc" : "基金经理详细信息(历任管理基金)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
        // {}.keys
    }

    "OutField":[
        "BasicInformationRow.A6",
        "BasicInformationRow.A7",
        "AnyManagedFundsRow.A0",
        "AnyManagedFundsRow.A1",
        "AnyManagedFundsRow.A2",
        "HistoricalReturnsRow.A3",
        "HistoricalReturnsRow.A4"
    ]

*/


/* 


    // single table & output
    // fund.f9.fund_profile.FundIntroduce
    // schema.Properties


    // ??? table name ???
    http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27fund.f9.fund_profile.FundIntroduce%27}?ran=0.027994435157687736

    "Sorts":[
        {
            "Field":"basicinformationrow.a0",
            "Sort":"asc"
        }
    ]

    // A0 ???

    "OutField":[
        "BasicInformationRow.A6",
        "BasicInformationRow.A7",
        "AnyManagedFundsRow.A0",
        "AnyManagedFundsRow.A1",
        "AnyManagedFundsRow.A2",
        "HistoricalReturnsRow.A3",
        "HistoricalReturnsRow.A4"
    ]
    // A0 ???

*/