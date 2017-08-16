import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TabsContentBox
 * @extends {Component}
 */

import {IT} from './InputTable';
import {OTS} from './OutputTables';

import {TTF} from './TestTableForms';
import  './tabboxs.css';


// utils
import {color} from '../../app/color';
import {debug, xyz_debug} from '../../app/debug';

// libs
import {Tabs, Icon, Button} from 'antd';
const TabPane = Tabs.TabPane;

let arr = [],
    arrout = [];

const css = `
    color: #0f0;
    font-size: 23px;
`;
const css2 = `
    color: #f00;
    font-size: 16px;
`;

const input_columns = [
    {
        title: "字段名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "注释",
        dataIndex: "Description",
        key: "Description"
    }
];

const output_columns = [
    {
        title: "编号",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "注释",
        dataIndex: "Description",
        key: "Description"
    }
];

class TabsContentBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input_datas: this.props.input_datas,
            output_datas: this.props.output_datas,
            in_out_data: this.props.in_out_data
        };
    }
    render() {
        return (
            /* <div style={{ maxWidth: 900}}> */
            <div className="tbs-width">
                <Tabs defaultActiveKey="1">
                    <TabPane 
                        tab={<span><Icon type="apple" />输入</span>}
                        key="1"
                        style={{
                            maxWidth: "100%",
                        }}>
                        {/* onTabClick={this.testClick} */}
                        <IT
                            data="input datas"
                            dataSource={this.props.input_datas}
                            columns={input_columns} 
                        />
                    </TabPane>
                    {/* TabPane onClick={this.inputClick} */}
                    <TabPane 
                        tab={<span><Icon type="android" />输出</span>}
                        key="2"
                        style={{
                            maxWidth: "100%",
                        }}>
                        {/* single table & multi tables */}
                        <OTS
                            data="output datas"
                            dataSources={this.props.output_datas}
                            columns={output_columns}
                        />
                    </TabPane>
                    <TabPane 
                        tab={<span><Icon type="phone" />测试</span>}
                        key="3"
                        style={{maxWidth: 850}}>
                        <TTF
                            test_datas={this.state.in_out_data}
                            outputs={this.props.output_datas}
                            inputs={this.props.input_datas}
                        />
                        {/* muilt test components */}
                    </TabPane>
                    <TabPane 
                        tab={
                            <span style={{width: "auto", margin: "auto 5px"}}>
                                此报表开发者:
                                <input
                                    type="text"
                                    style={{width: 100, margin: "auto 5px", textAlign: "center", color: "red"}}
                                    value={this.props.developer}
                                    disabled
                                    contentEditable="false"
                                    readOnly
                                />
                            </span>
                        } 
                        style={{}}
                        key="4"
                        disabled>
                        {/* no content */}
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

TabsContentBox.propTypes = {
    developer: PropTypes.string.isRequired,
    input_datas: PropTypes.array.isRequired,
    output_datas: PropTypes.array.isRequired,
    in_out_data: PropTypes.array.isRequired,
};

const TCB = TabsContentBox;
export {TCB};
export default TCB;


/* 

nmulti table

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27BasicInformationDeatil%27}?ran=0.4346308619597914


{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'BasicInformationDeatil'}

BasicInformationRow


// ??? input & output




const test_datas = [
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


*/