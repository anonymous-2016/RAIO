import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class RequiredItems
 * @extends {Component}
 */

import {urls}from '../../../app/urls.js';
import {color}from '../../../app/color';


import {Table, Icon, Input, Button} from 'antd';


let url_obj = {};
let url = "";
// initial url


const value = "";
// undefined

// input datas
const demo_datas = [
    {
        key: "k1",
        name: "ApiName",
        type: "string",
        value: "fund.f9.fund_profile.FundManager.BasicInformations",
        desc: "报表名称"
    },
    {
        key: "k2",
        name: "SecuCode",
        type: "string",
        value: (value || "000011"),
        desc: "基金编码"
    },
    {
        key: "k3",
        name: "Names",
        type: "string",
        value: "阳琨",
        desc: "姓名"
    },
    {
        key: "k4",
        name: "WriteType",
        type: "string",
        value: "json (json文本格式)",
        desc: "返回的数据协议格式 "
    }
];

// example


// const datas_length = this.props.datas.length;
const datas_length = 4;
let i_length = 0;

const Requiredcolumns = [
    {
        title: "字段",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "值",
        dataIndex: "value",
        key: "value",
        render: (text, index) => {
            // disabled
            // console.log(`url_obj = `, url_obj);
            // console.log(`%c text = `, color.css1, text);
            // console.log(`%c index = `, color.css2, index);
            if(index.name === "WriteType"){
                url_obj[index.name] = "json";
            }else{
                url_obj[index.name] = text;
            }
            i_length++;
            // console.log(`%c i_length = `, color.css1, i_length);
            if(datas_length === i_length){
                // keys length === demo_datas length
                // finish url object
                // console.log(`%c full url_obj defaultValue = `, color.css2, url_obj);
                // console.log(`%c full i_length = `, color.css1, i_length);
                i_length = 0;
            }
            // console.log(`url_obj defaultValue = `, url_obj);
            if(index.name === "WriteType"){
                // 1. write global let
                // 2. use let create new url
                return(
                    <Input 
                        onChange={
                            (e) => {
                                {/* console.log(`e = `, e); */}
                                {/* console.log(`e = `, e.target.value); */}
                            }
                        }
                        defaultValue={text}
                        type="text"
                        disabled/>
                );
            }else{
                return(
                    <Input 
                        onChange={
                            (e) => {
                                {/* console.log(`index.name = `, index.name); */}
                                {/* console.log(`e = `, e.target.value); */}
                                let key = index.name,
                                    value = e.target.value;
                                {/* url_obj = Object.assign(
                                    url_obj,
                                    {
                                        key: value
                                    }
                                ); */}
                                // url_obj.key = value;// key
                                url_obj[key] = value;// key's value
                                console.log(`${key} url_obj = `, url_obj); 
                                let str_obj = JSON.stringify(url_obj);
                                url = `${urls.test}?${str_obj}`;
                                {/* this.setState({
                                    testurl: url
                                });
                                console.log(`testurl = `, this.state.testurl); */}
                            }
                        }
                        defaultValue={text}
                        type="text" />
                );
            }
        }
    },
    {
        title: "描述",
        dataIndex: "desc",
        key: "desc"
    }
];

// input in table


/* 
array.push(
    {
        key: "last-index",
        name: "WriteType",
        type: "string",
        value: "json",
        desc: "返回的数据协议格式 (json文本格式)"
    }
);

 */
// get changed table values ?

// options value

class RequiredItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            testurl: "",
            initialurl: ""
            // this.props.data
            // input + output
            // table keys , input values
        }
    }
    clickTestButton = () => {
        // url = data & modify input value
        // create a new url
        /* 
            fetch test result
            // show result
        */
        // input onchange bind to start_test()
    };
    onSaveInput = () => {
        // input onchange
        // let str_obj = JSON.stringify(url_obj);
        // url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        this.setState({
            testurl: url
        }); 
        console.log(`testurl = `, this.state.testurl);
        this.props.TestClick(this.state.testurl);
    };
    autoSave = () => {
        setTimeout(() => {
            this.onSaveInput();
        }, 0);
    }
/*     shouldComponentUpdate(nextProps, nextState) {
        return true;
    } */
    componentWillUpdate(){
        // this.onSaveInput();
    }
    componentDidUpdate() {
        // this.onSaveInput();
        // this.props.TestClick(url)
    }
    // initialize & before onChange
    componentDidMount() {
        demo_datas.map(
            (data, index) => {
                let key = data.name,
                    value = data.value;
                // key":"json (json文本格式)"
                console.log(`%c index = ${index} key = \n`, color.color_css1,  key);
                if(key === "WriteType"){
                    url_obj.key = "json";
                }else{
                    url_obj.key = value;
                }
                
            }
        );
        let str_obj = JSON.stringify(url_obj);
        url = `${urls.test}?${str_obj}`;
        console.log(`%c initial url = \n`, color.color_css2, url);
        // initial url
        this.autoSave();
    }
    render() {
        /* console.log(`new url_obj = `, url_obj);
        let str_obj = JSON.stringify(url_obj);
        let url = `http://10.1.5.31:8080/http/report/query?${str_obj}`; */
        return (
            <div 
                onChange={this.autoSave}
                style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                {/* input 必填项 */}
                <Table
                    dataSource={
                        (
                            this.props.dataSource.length > 0
                            ?
                            this.props.dataSource
                            :
                            demo_datas
                        )
                    }
                    columns={Requiredcolumns}
                    bordered
                    pagination={false}
                />
                {/* onChange={this.onSaveInput} */}
                {/*  <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.onSaveInput}>
                    onSaveInput BTN
                </button>  */}
            </div>
        );
    }
}

RequiredItems.propTypes = {
    dataSource: PropTypes.array.isRequired,
    // columns: PropTypes.array.isRequired,
    test_datas: PropTypes.object.isRequired,
    TestClick: PropTypes.func.isRequired,
};

const RI = RequiredItems;

export {RI};
export default RI;



/* 

table input validation

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        if(object[key] === ""){
            // alret & disable fetch data
        }
    }
}



*/



/* 

name: Info.schema.BasicInformationRow


    表1:基金经理详细信息(基本资料)
    A0	string	性别
    A1	string	出生日期
    A2	string	学历
    A3	number	证券从业年限
    A4	integer	历任管理基金数
    A5	integer	历任基金经理公司数
    A6	string	简历
    A7	string	照片
    A8	integer	PersonalCode（参数）

    表2:基金经理详细信息(历任管理基金)
    A0	string	管理公司
    A1	string	基金简称
    A2	string	投资类型
    A3	string	到任日期(传参)
    A4	string	离职日期(传参)
    A5	number	任职年化回报
    A6	integer	基金编码(不显示)

    表3:基金经理详细信息(历史回报)
    A0	string	历史回报
    A1	number	3月
    A2	number	6月
    A3	number	YTD
    A4	number	1年
    A5	number	2年
    A6	number	3年
    A7	number	5年

    表4:基金经理详细信息(风险分析)
    A0	string	类型
    A1	number	ɑ
    A2	number	β
    A3	number	SharpeRatio
    A4	number	收益标准差
    A5	string	风险度

    表5:基金经理详细信息(折线图基金值)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300

    表6:基金经理详细信息(折线图同类平均)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300




*/