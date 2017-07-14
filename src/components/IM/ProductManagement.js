import React, {Component} from 'react';

import {Table, Form, Icon, Input, Button, Modal} from 'antd';

import {SignUpDialog} from '../utils/FancyBox';

import {EM} from '../Modals/EditModal';


import {ATab} from '../../Ant_Components/TabPage';



// import {ET} from './utils/EditTable';


// key	React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性

// dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
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
        render: (
            (text, record, index) => {
                console.log(`record`, record);
                const style1= `
                    color: red;
                    font-size: 16px;
                `;
                const style2= `
                    color: #f0f;
                    font-size: 16px;
                `;
                const clickOK = (record) => {
                    return record.pid = "new pid";
                } 
                return(
                    <a href="#" >
                        {/* {index} */}
                        {/* <SignUpDialog data={record}/> */}
                        <EM
                            data={record}
                            clickOK={clickOK}
                        >
                            <span>{text} 编辑</span>
                        </EM>
                    </a>
                );
            }
        )
    }
];

// {pname, pid, lversion, rmenu} ===  record

// rowKey	表格行 key 的取值，可以是字符串或一个函数
const data = [
    {
        pname: "001",
        pid: "产品定义 !A1",
        lversion: "v1",
        rmenu: "关联1"
    },
    {
        pname: "002",
        pid: "产品定义 !A1",
        lversion: "v2",
        rmenu: "关联2"
    },
    {
        pname: "003",
        pid: "产品定义 !A1",
        lversion: "v3",
        rmenu: "关联3"
    }
];


// 通过 rowSelection 对象表明需要行选择 

const rowSelection = {
    onSelect: function(record, selected, selectedRows) {
        // (record, selected, selectedRows) === object, boolean, object 
        console.log(`record = `, record);
        console.log(`selected = `, selected);
        console.log(`selectedRows = `, selectedRows);
        return(
            record = record + 'xyz'
        );
    },
    onSelectAll: function(selected, selectedRows) {
        // (selected, selectedRows) === boolean, object
        console.log(selected, selectedRows);
    }
};


class ProductManagement extends Component {
    showModal = (e) => {
        alert(e.target.value); 
    };
    render() {
        const items = [
            {
                title: "Tab 01",
                content: "this is a lot content",
                color: 'red'
            },
            {
                title: "Tab 02",
                content: "here have a lot content, too",
                color: '#0f0'
            },
            {
                title: "Tab 03",
                content: "There are lots of content, as well",
                color: '#f0f'
            }
        ];
        return (
            <div>
                <label>产品名称: </label>
                <div>
                    <ATab items={items}/>
                </div>
                {/*<SignUpDialog datas={{}}/>*/}
                {/*<input list="t_type" name="terminal" />*/}
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
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={data => data.pname}
                    rowSelection={rowSelection}
                    size="small"
                    bordered={false}
                    loading={false}
                    onChange={() => alert(`changed!`)}
                />
            </div>
        );
    }
}

export {ProductManagement};
export default ProductManagement;