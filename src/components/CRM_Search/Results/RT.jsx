import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */
import {color} from '../../../app/color';


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
                // 注释: A份额交易代码
                obj.title = `${data.Description}`;
                console.log(`%c 注释: ${obj.title} & obj.title = data.Description \n`, color.css1);
                // 编号: A0
                obj.dataIndex = `${data.name}`;
                obj.key = `${data.name}`;
                console.log(`%c 编号: ${obj.key} & obj.name = data.name \n`, color.css2);
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
        // tab.name === "AnyManagedFundsRow":[] 
        // A0 = key
        return (
            <div >
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