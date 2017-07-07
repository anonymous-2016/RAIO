import React, {Component} from 'react';

import {Table, Form, Icon, Input, Button, Modal} from 'antd';


const columns = [
    {
        title: '产品名称 ',
        dataIndex: 'pname',
        key: 'productName'
    }, 
    {
        title: '产品ID',
        dataIndex: 'pid',
        key: 'productId',
        render: ((text) => (<a href="#">{text}</a>))
    }, 
    {
        title: '最新版本',
        dataIndex: 'lversion',
        key: 'latestVersion'
    },
    {
        title: '关联菜单',
        dataIndex: 'rmenu',
        key: 'relationMenu',
        render: ((text) => (<a href="#">{text}</a>))
    }
];

const data = [
    {
        pname: "001",
        pid: "产品定义 !A1",
        lversion: "v1",
        rmenu: "关联"
    },
    {
        pname: "002",
        pid: "产品定义 !A1",
        lversion: "v2",
        rmenu: "关联"
    },
    {
        pname: "003",
        pid: "产品定义 !A1",
        lversion: "v3",
        rmenu: "关联"
    }
];

class ProductManagement extends Component {
    showConfirm = () => {
        // 
    };
    render() {
        return (
            <div>
                <label>产品名称: </label>
                <input list="t_type" name="terminal" />
                <datalist id="t_type">
                    <option value="Fans终端"></option>
                     <option value="金融终端"></option>
                </datalist>
                <Button onClick={this.showConfirm}>
                    查询
                </Button>
                <Button onClick={this.showConfirm}>
                    添加
                </Button>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export {ProductManagement};
export default ProductManagement;