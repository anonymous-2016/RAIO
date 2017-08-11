import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.08.06
 * 
 * @class SCT
 * @extends {Component}
 */
import {TCB} from './TabsBox';

import {color} from '../../app/color';
import {debug} from '../../app/debug';

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
            developer: ""
        };
    }
        // fetch data by `ReportName` & `GetSchema`
    inputClick = (url) => {
        // http://localhost:7777/input
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            console.log(`json = ${json}`);
            console.log(`json.length = ${json.length}`);
            console.log(`json.Info`, json.Info.schema.Properties);
            // Properties
            let datas = json.Info.schema.Properties;
            let {ApiName, SecuCode} = datas;
            console.log(`ApiName = ${ApiName}`, ApiName);
            console.log(`ApiName = ${ApiName.Description}`);
            console.log(`SecuCode = ${SecuCode.Description}`);
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
            console.log(`arr result = `, arr);
            this.setState(
                {
                    input_datas: arr
                }
            );
            return arr;
        });
        console.log(`new arr = `, arr);
    };
    // fetch data by `ReportName` & `GetRowSchema`
    outputClick = (url) => {
        // https://cdn.xgqfrms.xyz/json/tables.json
        let u = `${url}`;
        console.log(`url test = ${u}`, u);
        fetch(`${url}`)
        .then((response) => response.json())
        .then((json)=> {
            console.log(`json = ${json}`);
            console.log(`json.length = ${json.length}`);
            console.log(`json.Info`, json.Info.schema.Properties);
            // Properties
            let datas = [];
            if(json.Info.schema.Properties !== undefined){
                // datas.BasicInformationRow.Properties
                datas = json.Info.schema.Properties;
            }else{
                let tables = json.Info.schema;
                // let i = 0;
                for (let key in tables) {
                    let arr = [];
                    let new_obj = {};
                    let i = 0;
                    if(!tables.hasOwnProperty(key)) continue;
                    if (tables.hasOwnProperty(key)) {
                        let title = tables[key].desc,
                            objs = tables[key].Properties;
                        for (let key in objs) {
                            if (objs.hasOwnProperty(key)) {
                                // A0
                                objs[key].name =  key;
                                objs[key].key = ("k000" + i++);
                            }
                            arr.push(objs[key]);
                            console.log(`arr ${key}`, arr);
                        }
                        console.log(`title ${key}`, title);
                        new_obj.title = tables[key].desc;
                        new_obj.datas = arr;
                        console.log(`new obj = `, new_obj);
                    }
                    datas.push(new_obj);
                    const css = `
                        color: #0f0;
                        font-size: 23px;
                    `;
                    const css2 = `
                        color: #f00;
                        font-size: 16px;
                    `;
                    console.log(`%c datas key = ${key} \n datas = `, css, datas);
                    console.log(`%c datas i = ${i} \n datas = `, css2, datas[i-1]);
                    // i++;
                }
            }
            console.log(`datas[0] = `, datas[0]);
            console.log(`datas[0].length = `, datas[0].length);
            // Array.isArrray(datas[0]);
            console.log(`Array.isArray(datas[0]) = `, Array.isArray(datas[0]));
            console.log(`typeof datas[0] = `, typeof(datas[0]));
            this.setState(
                {
                    output_datas: datas
                }
            );
            return datas;
        });
    };
    componentDidMount() {
        let new_data = this.state.data;
        // get url
        let url_key = new_data.name,
            developer = "";
        // developer ? developer : "undefined"
        if(new_data.developer){
            developer = new_data.developer;
            this.setState(
                {
                    developer: developer
                }
            );
        }
        this.setState(
            {
                new_data: Object.assign({}, new_data)
            }
        );
        if(debug){
            console.log(`%c new_data`, color.color_css2, new_data);
            console.log(`%c new_data url_key = \n`, color.color_css1, url_key);
            console.log(`%c developer = \n`, color.color_css3, developer);
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
        let url_in = `http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"${url_key}"}`,
            url_out = `http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"${url_key}"}`;
        // http://localhost:7777/input
        // https://cdn.xgqfrms.xyz/json/tables.json
        url_in = "http://localhost:7777/input",
        url_out = "https://cdn.xgqfrms.xyz/json/tables.json";
        this.inputClick(url_in);
        this.outputClick(url_out);
        if(debug){
            console.log(`%c new_data`, color.color_css2, new_data);
            console.log(`%c new_data url_key = \n`, color.color_css1, url_key);
            console.log(`%c developer = \n`, color.color_css3, developer);
            console.log(`typeof url_key`, (typeof url_key));
        }
    }
    render() {
        const {input_datas, output_datas} = this.state;
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
                        />
                </div>
                {/* <hr/>
                <div style={{color: 'red'}}>
                    {this.state.new_data.name}<br />
                    {this.state.new_data.description}<br />
                    {this.state.new_data.dependtables}<br />
                </div> */}
            </div>
        );
    }
}

SCT.propTypes = {
    test: PropTypes.string,
    data: PropTypes.object.isRequired
};

export {SCT};
export default SCT;