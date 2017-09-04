import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {Table, Badge, Menu, Dropdown, Icon} from 'antd';

//const { Table, Badge, Menu, Dropdown, Icon } = antd;

const menu = (
    <Menu>
        <Menu.Item>
            Action 1
        </Menu.Item>
        <Menu.Item>
            Action 2
        </Menu.Item>
    </Menu>
);

const NestedTable = () => {
    const expandedRowRender = () => {
    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
            title: 'Status',
            key: 'state',
            render: () => {
                return <span><Badge status="success" />Finished</span>;
            }
        },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
        });
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a href="#">Publish</a> },
];

const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            name: 'Screem',
            platform: 'iOS',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: 'Jack',
            createdAt: '2014-12-24 23:12:00',
        });
    }
    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
        />
    );
}

// ReactDOM.render(<NestedTable />, mountNode);







const tac = window.json;
// multi tables ???
// tac.map();


/* 
tac = 
[
    {
        "name": "JYTopic.StockSecondaryMarket.StockMarketPeform",
        "attributes": {
            "numfound": "3",
            "columns": "{\"cols\": []}"
        }
        "columnMeta": {a0": "DATE"},
        "rows": [["2011-03-11",],[2012-03-11",]]
    }
]

*/

const ta_cols = window.json[0];

let cols = [];
// any_cols

if(ta_cols.attributes.columns !== undefined){
    // any cols
    let any_obj = {};
    any_obj.col_name = ta_cols.name;
    // any_obj.col_datas = [];
    let cols_objs = Object.keys(ta_cols.columnMeta);
    // 递归函数
    cols.push(any_obj);
}else{
    // default columnMeta
    let any_keys = Object.keys(ta_cols.columnMeta);
    let any_objs = [];
    any_keys.map(
        (key, index) => {
            let UK = key.toUpperCase();
            /* 
                let obj = {};
                obj.title = `Any ${UK }`,
                obj.key = UK;
                obj.dataIndex = UK;
            */
            // console.log(`key = ${key} & index = ${index} \n`);
            let obj = {
                "title": `Any 动态表头: ${UK }`,// 动态表头
                "key": UK,
                "dataIndex": UK
            };
            // console.log(`any obj = ${JSON.stringify(obj, null, 4)} \n`);
            any_objs.push(obj);
            // return obj
        }
    );
    // console.log(`any_objs = ${JSON.stringify(any_objs, null, 4)} \n`);
    let any_obj = {};
    any_obj.col_name = ta_cols.name;
    any_obj.col_datas = any_objs;
    cols.push(any_obj);
}

console.log(`any cols = ${JSON.stringify(cols, null, 4)} \n`);













