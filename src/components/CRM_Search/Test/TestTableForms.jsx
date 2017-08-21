import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TestTableForms
 * @extends {Component}
 */

//utils
import {color} from '../../../app/color';
import {debug} from '../../../app/debug';


// css
import './testtableforms.css';

// components
import {TM}from './TestModal';
import {RI} from './Required';
import {RTS}from './Results';

// uri bug ???
import {OI} from './Options/index';

// libs
import {Collapse, Form, Button} from 'antd';
const Panel = Collapse.Panel;


// debug color
const css1 = `
    color: red;
`;
const css2 = `
    color: #f0f;
`;

// let fetch_url = "";

class TestTableForms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            visible: false,
            test_datas: this.props.test_datas, // init_datas url
            fetch_url: "",
            disable_btn: false,
            isCollapsed: true
        }
    }
    disableBTN = (value=false) =>{
        this.setState(
            {
                disable_btn: value
            }
        );
    };
    TestClick = (url) => {
        if (debug) {
            console.log(`%c new url obj = `,color.color_css1, url);
        }
        // fetch_url = url;
        this.setState({
            fetch_url: url
        });
        // fetch url
        if (debug) {
            console.log(`new this.state.fetch_url = `, this.state.fetch_url);
        }
    };
    startTest = () => {
        const that = this;
        // fetch test data
        let url = this.state.fetch_url;
        if (debug) {
            console.log(`%c fetch test data`, css2, url);
        }
        // new test_datas url
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then(
            (fecth_data) => {
                // fecth_data === [{}, {}];
                let objs = {};
                if(Array.isArray(fecth_data)){
                    fecth_data.map(
                        // name.AnyManagedFundsRow
                        (data) => {
                            //do something 
                            // need shape
                        }
                    );
                    // result table A0 = key
                    if (debug) {
                        console.log(`%c fecth data = \n`, css2, fecth_data);
                    }
                    that.setState({
                        test_datas: {fecth_data}
                    });
                }
            }
        );
    };
    checkTestCommands = () => {
        // fetch test data
        if (debug) {
            console.log(`%c ready fetching commands url  = \n`, css1);
        }
        this.startTest();
        if (debug) {
            console.log(`%c fetching fetch_url = \n`, css1, this.state.fetch_url);
        }
    };
    // Modal
    showModal = () => {
        if (!debug) {
            console.log(`clicked showModal!`);
            console.log(`%c showModal = `, css1, this.state.show);
        }
        // e.preventDefault();
        this.setState(
            (prevState, props) => {
                return{
                    // Object.assign()
                    // showModal: !prevState.showModal
                    show: true
                }
            }
        );
        if (!debug) {
            console.log(`clicked showModal, agian!`);
            console.log(`%c showModal agian = `, css2, this.state.show);
        }
    };
    hideModal = () => {
        if (!debug) {
            console.log(`clicked hideModal!`);
            console.log(`%c hideModal = `, css1, this.state.show);
        }
        this.setState(
            (prevState, props) => {
                return{
                    show: false
                }
            }
        );
        if (!debug) {
            console.log(`clicked hideModal, agian!`);
            console.log(`%c hideModal agian = `, css2, this.state.show);
        }
    };
    // Modal
    testOK = (e) => {
        // e.preventDefault();
        if (debug) {
            console.log(`testOK e`, e);
        }
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: true
            });
            // this.props.hideModal();
        }, 1000);
    };
    testCancel = () => {
        this.setState({
            visible: false
        });
    };
    // Panel
    cilicPanel = () => {
        if (debug) {
            console.log(`%C this.state.isCollapsed= `, color.css1, this.state.isCollapsed);
        }
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
        if (debug) {
            console.log(`%C new this.state.isCollapsed = `, color.css1, this.state.isCollapsed);
        }
    };
    /* eslint-disable no-console */
    render() {
        const {show, test_datas} = {...this.state};
        const {inputs, outputs, options} = {...this.props};
        // options
        const {sort, fields, datas} = options;
        if (!debug) {
            console.log(`%c ri inputs`, color.color_css3, inputs);
            console.log(`%c ri outputs`, color.css2, outputs);
            // options
            console.log(`%c test options`, color.green_23, options);
            console.log(`%c sort = \n`, color.green_23, sort);
            console.log(`%c fields = \n`, color.green_23, fields);
            // datas
            console.log(`%c datas = \n`, color.green_23, datas);
        }
        // shape input data & example
        let ri_datas = [];
        let op_datas = [];
        // commandexample
        if(inputs.commandexample){
            /* 
            "commandexample" : "{            \"SecuCode\": 000011,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }",
            // bug ???
            000011 => "000011" 
            http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27KeyWord%27:%27%E5%9F%BA%E9%87%91-%3EF9-%3E%20%E5%9F%BA%E9%87%91%E6%A6%82%E5%86%B5%27}
            基金->F9-> 基金概况->基金介绍
            // input 
            http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.fund_profile.FundIntroduce%22}
            基金->F9->基金概况 ->基金管理人(基金公司基本资料,基金公司基本联系方式)
            基金->F9->基金概况 ->基金经理(信息显示表格)
             */
            if (debug) {
                console.log(`%c ri inputs.commandexample = `, color.color_css2, inputs.commandexample);
            }
            // ri_datas = inputs.commandexample
            // JSON.parse();
        }else{
            /*
                {
                    key: "k1",
                    name: "ApiName",
                    type: "string",
                    value: "fund.f9.fund_profile.FundManager.BasicInformations",
                    desc: "报表名称"
                } 
            */
            inputs.map(
                (value, index) => {
                    if (!debug) {
                        console.log(`%c ri inputs index = `, color.css1, index);
                        console.log(`%c ri inputs value = `, color.css2, value);
                    }
                    // Required: true
                    if(value.Required){
                        // only required will be pushed to ri_datas!
                        let obj = {};
                        obj.key = index;
                        obj.value = "";
                        obj.name = value.name;
                        obj.desc = value.Description;
                        obj.type = value.type;
                        ri_datas.push(obj);
                        if (!debug) {
                            console.log(`%c ri_datas obj = `, color.css1, obj);
                            console.log(`%c ri_datas[${index}] = `, color.css1, ri_datas);
                        }
                    }
                    // Options True
                    if (!value.Required && value.name !== "WriteType") {
                        // all options will be pushed to op_datas!
                        let obj = {};
                        obj.key = index;
                        obj.value = "";
                        obj.name = value.name;
                        obj.desc = value.Description;
                        obj.type = value.type;
                        op_datas.push(obj);
                        if (!debug) {
                            console.log(`%c op_datas obj = `, color.css2, obj);
                            console.log(`%c  op_datas[${index}] = `, color.css2,  op_datas);
                        }
                    }
                    // return obj_temp[index];
                }
            );
            if (!debug) {
                console.log(`%c ri_datas = `, color.css1, ri_datas);
            }
            const fixed_obj = {
                "key": 11111111,
                "name": "WriteType",
                "type": "string",
                "value": "json",
                "desc": "返回的数据协议格式"
            };
            ri_datas.push(fixed_obj);
        }
        if (!debug) {
            console.log(`%c finished ri_datas = `, color.css2, ri_datas);
            console.log(`%c finished op_datas = `, color.css2,  op_datas);
        }
        const testdatas = [
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
                value: "000011",
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
        return (
            <div >
                <div >
                    <p className="title-color">必填项</p>
                    <RI 
                        init_datas={(ri_datas.length > 0) ? ri_datas : testdatas}
                        TestClick={this.TestClick}
                        disableBTN={this.disableBTN}
                    />
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.startTest}
                        disabled={this.state.disable_btn}
                        >
                        开始测试
                    </Button>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.showModal}
                        disabled={this.state.disable_btn}
                        >
                        查看命令
                    </Button>
                    {
                        show 
                        ?
                        <TM 
                            hideModal={this.hideModal}
                            visible={this.state.visible}
                            checkTestCommands={this.checkTestCommands}
                            fetch_url={this.state.fetch_url}
                            TestClick={this.TestClick}
                        />
                        :
                        ""
                    }
                </div>
                <div style={{visibility: "visible"}}>
                    <h2 className="title-color options-space">可选项</h2>
                    {
                       <Collapse
                            defaultActiveKey={['2']}
                            onChange={this.cilicPanel}
                            className="options-panal">
                            <Panel
                                header={ (this.state.isCollapsed === true) ? "展开-可选项" : "收起-可选项"}
                                key="1"
                                >
                                {/* <Table dataSource={this.props.dataSource} columns={this.props.columns} bordered pagination={false}/> */}
                                <OI
                                    dataSource={this.props.dataSource}
                                    columns={this.props.columns}
                                    sort_items={sort}
                                    fields_items={fields}
                                    option_datas={op_datas}
                                    TestClick={this.TestClick}
                                />
                            </Panel>
                        </Collapse>
                    }
                </div>
                <div style={{visibility: "hidden"}}>
                    <h2 className="title-color">测试结果</h2>
                    {/* Tabs & Tables */}
                    {/* // tab.name === "AnyManagedFundsRow":[]  */}
                    {
                        <RTS
                            tabs={this.props.outputs}
                            style={{maxWidth: 850}}
                            results={[]}
                        />
                    }
                    {/* results={[test_datas]}  */}
                </div>
            </div>
        );
    }
    /* eslint-enable no-console */
}

TestTableForms.propTypes = {
    inputs:PropTypes.array.isRequired,
    outputs: PropTypes.array.isRequired,
    test_datas: PropTypes.array.isRequired,
    // dataSource: PropTypes.array.isRequired,
    // columns: PropTypes.array.isRequired,
};

const TTF = TestTableForms;
export {TTF};
export default TTF;