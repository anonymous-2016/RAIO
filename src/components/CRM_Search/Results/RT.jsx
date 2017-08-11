import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */

import {Table} from 'antd';

/* const output_columns = [
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
 */
class ResultTables extends Component {
    render() {
        /* datas: Array(4) */
        // {type: "string", Description: "性别", name: "A0", key: "k0000"}
        // 0: {title: "基金经理详细信息(基本资料)", datas: Array(9)}
        // BasicInformationRow: {title: "基金经理详细信息(基本资料)", datas: Array(9)}
        // datas[k].name = test[i].name ???
        /* 
        if(test.name === output.key ){
            datas ? datas : [];
        }
        */
        let cols = [];
        this.props.columns.map(
            (data, index) => {
                let obj = {};
                obj.title = `${data.Description}`;
                obj.dataIndex = `${data.Description}`;
                obj.key = `${data.Description}`;
                cols.push(obj);
                return cols;
            }
        );
        let show = false;
        /* 
        if(test.name === output.key){
            show = true
        }
        */
        // test datas
        let test_datas = [{},{}];
        return (
            <div style={{overflowX: "scroll"}}>
                <Table dataSource={[]} columns={cols} />
                {
                    // test.name === output.key
                    show
                    ?
                    <Table dataSource={test_datas} columns={cols} />
                    :
                    <Table dataSource={[]} columns={cols} />
                }
            </div>
        );
    }
}

ResultTables.propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};

const RT = ResultTables;

export {RT};
export default RT;