import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table, Form, Icon, Input, Button, Modal, Select} from 'antd';

import {PMModal} from './Modal';

import {AM} from './AddModal';

const Option = Select.Option;


/* import {EM} from '../../Modals/EditModal';
import {ATab} from '../../../Ant_Components/TabPage'; */


// key	React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性

// react 中无法直接访问 e.key, 可以使用自定义的 indexkey, 具体参见 StackOverflow

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
        render: (
            (text, record, index) => {
                console.log(`record`, record);
                const clickOK = (record) => {
                    return record.pid = "new pid";
                };
                return(
                    <PMModal 
                        data={record}
                        clickOK={clickOK}
                        >
                        <span>产品定义!A1</span>
                    </PMModal>
                );
            }
        )
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
                /* 
                    <a href="#" >
                        {index} 
                        <SignUpDialog data={record}/> 
                        {text} 
                        <EM
                            data={record}
                            clickOK={clickOK}
                        >
                            <span>编辑</span>
                        </EM>
                    </a>
                    <EM
                        data={record}
                        clickOK={clickOK}
                        >
                        <span>编辑</span>
                    </EM>
                */
                return(
                    <PMModal 
                        data={record}
                        clickOK={clickOK}
                        >
                        <span>关联</span>
                    </PMModal>
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
        rmenu: "关联1",
        key: '1'
    },
    {
        pname: "002",
        pid: "产品定义 !A1",
        lversion: "v2",
        rmenu: "关联2",
        key: '2'
    },
    {
        pname: "003",
        pid: "产品定义 !A1",
        lversion: "v3",
        rmenu: "关联3",
        key: '3'
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

// Tabs
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


class PM extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        };
    }
    hideModal = () => {
        this.setState(
            (pervState, props) => {
                return {
                    show: false
                }
            }
        );
    };
    render () {
        const handleChange = (value) => {
            console.log(`selected ${value}`);
        };
        const handleSearch = (value) => {
            console.log(`selected ${value}`);
        };
        const handleAdd = (value) => {
            console.log(`selected ${value}`);
        };
        let show = this.state.show;
        const showModal = (value) => {
            // console.log(`selected ${value}`);
            this.setState(
                (pervState, props) => {
                    return {
                        show: value
                    }
                }
            );
        };
        return (
            <div>
                 <div style={{marginLeft: 10}}>                    
                    <Form>
                        <lable style={{fontSize: 16, marginRight: 7}}>
                            产品名称:
                        </lable>
                        <Select
                            style={{width: 150}}
                            onChange={handleChange}
                            placeholder="请选择终端类型"
                            icon="calculator"
                            >
                            <Option value="FansT">
                                <Icon type="calculator" />
                                Fans终端
                            </Option>
                            <Option value="FinanceT"><
                                Icon type="line-chart" />
                                金融终端
                            </Option>
                        </Select>
                    </Form>
                    <Button 
                        style={{width: 70, marginLeft: 30}}
                        onClick={handleSearch}
                        type="primary"
                        icon="search"
                        >
                        查询
                    </Button>
                    <Button 
                        style={{width: 70, marginLeft: 10}}
                        onClick={
                            () => {
                                handleAdd();
                                showModal(true);
                            }
                        }
                        type="primary"
                        icon="user-add"
                        >
                        添加
                    </Button>
                </div> 
                <div>
                    {
                        show
                        &&
                        <AM hide={this.hideModal}/>
                    }
                </div>
                 {/* rowSelection={rowSelection} */}
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={data => data.pname}
                    size="small"
                    bordered={false}
                    loading={false}
                    onChange={() => alert(`changed!`)}
                />
            </div>
        )
    }
}



export {PM};
export default PM;

// impm
