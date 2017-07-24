import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

// modal
import {FDM} from './FDM';
import {FMDM} from './FMDM';

// ANT
import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown, Select} from 'antd';

const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;



const columns = [
    {
        title: '编码',
        dataIndex: 'encode',
        key: 'Encode',
        render: (text, record, index) => {
            const clickOK = (encord) => {
                return record.encode = "new rencode";
            };
            return(
                <span>
                    <FDM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `功能定义!A1 default`}</span>
                    </FDM>
                </span>
            );
        }
    }, 
    {
        title: '名称',
        dataIndex: 'name',
        key: 'Name',
        render: (
            (text) => {
                const clickTest = () => {
                    alert('clickTest!');
                }
                return(
                    <span>{text}</span>
                );
            }
        )
    },
    {
        title: '模块',
        dataIndex: 'module',
        key: 'module',
        render: (text, record, index) => {
            const clickOK = (module) => {
                return record.module = "new rencode";
            };
            return(
                <span>
                    <FMDM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `模块定义!A1 default`}</span>
                    </FMDM>
                </span>
            );
        }
        
    },
    {
        title: '资源',
        dataIndex: 'resources',
        key: 'Resources',
        render: (
            (text) => {
                const clickTest = () => {
                    alert('clickTest!');
                }
                return(
                    <span>{text}</span>
                );
            }
        )
    }
];

// key` prop,or set `rowKey
const datas = [
    {
        encode: `功能定义!A1`,
        name: `名称`,
        module: `模块定义!A1`,
        resources: '资源'
    },
    {
        encode: `功能定义!A1`,
        name: `名称`,
        module: `模块定义!A1`,
        resources: '资源'
    },
    {
        encode: `功能定义!A1`,
        name: `名称`,
        module: `模块定义!A1`,
        resources: '资源'
    }
];


class FT extends Component {
    render () {
        return (
            <div>
                <Table
                    dataSource={datas}
                    columns={columns}
                />
            </div>
        )
    }
}

FT.propTypes = {

};

export {FT};
export default FT;

