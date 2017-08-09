import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class OutputTables
 * @extends {Component}
 */

import {Table, Icon} from 'antd';

class OutputTables extends Component {
    render() {
        return (
            <div>
                <Table dataSource={this.props.dataSource} columns={this.props.columns} />
                this.props.data = {this.props.data}
            </div>
        );
    }
}

OutputTables.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

const OTS = OutputTables;
export {OTS}
export default OTS;



/* 

GetRowSchema === output

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","KeyWord":"指数--> F10--> 非股票指数--> 指数基金","WriteType":"json"}



name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",




ReportName':'IndexF10IndexFund'


name === ReportName (唯一的 query key)


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


*/