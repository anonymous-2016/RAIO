import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @author xgqfrms
 * @create_date 2017.09.05
 * @copyright Gildata 2017
 * 
 * @class DependenceTables
 * @extends {Component}
 * @comments 关联的表名
 * @private 
 * 
 */

import './index.css';
import {Table, Button, Tabs} from 'antd';
const TabPane = Tabs.TabPane;


const mock_datas = [
    {
        "name": "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
        "desc": "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
        /* "dtTables": `[
            "SecuMain",
            "MF_NetValue"
        ]`, */
        "dtTables": "[SecuMain,MF_NetValue]"
    }
];

/* 

x = JSON.stringify(JSON.parse("[\"SecuMain\",\"MF_NetValue\"]", null, 4), null, 4);

y = `\`${JSON.stringify(JSON.parse("[\"SecuMain\",\"MF_NetValue\"]", null, 4), null, 4)}\``;

"`[
    "SecuMain",
    "MF_NetValue"
]`"

dt_obj.dtTables = `[${JSON.stringify(json.Info.dependtable)}]`;





*/

class DependenceTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            //
        };
    }
    callback = (key) => {
        console.log(key);
    };
    render() {
        return (
            <div
                style={{
                    // maxHeight: 1000,
                    boxSizing: "border-box",
                    margin: 10, 
                    padding: 10,
                    // width: "100%",
                    overflowX: "hidden",
                    // height: "100%"
                }}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="已加载" key="1">
                        <div>
                            <Button type="primary" className="dt-load-btn">全部加载</Button>
                            <Button type="primary" className="dt-load-btn">全部卸载</Button>
                            <Button type="primary" className="dt-load-btn">全部重新加载</Button>
                        </div>
                        <div className="dt-table">
                            <Table
                                // dataSource={this.props.dataSource ? this.props.dataSource : mock_datas}
                                dataSource={mock_datas}
                                columns={this.props.columns}
                                bordered
                                pagination={false}
                            />
                        </div>
                    </TabPane>
                    <TabPane tab="未加载" key="2">
                        <h2>报表名称 操作</h2>
                        <div>
                            <Table
                                dataSource={this.props.dataSource ? this.props.dataSource : mock_datas}
                                columns={this.props.columns}
                                bordered
                                pagination={false}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

DependenceTables.propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

// export default DependenceTables;
const DT = DependenceTables;
export {DT};
export default DT;



