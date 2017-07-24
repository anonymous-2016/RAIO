import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

// modal

import {LDM} from './LDM';

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
            const clickOK = (lecord) => {
                return record.lencode = "new rencode";
            };
            return(
                <span>
                    <LDM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `类库定义`}</span>
                    </LDM>
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
        title: '开发者',
        dataIndex: 'developer',
        key: 'developer',
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
        encode: `类库定义!A1`,
        name: `名称`,
        developer: `开发者...`
    },
    {
        encode: `类库定义!A1`,
        name: `名称`,
        developer: `开发者...`
    },
    {
        encode: `类库定义!A1`,
        name: `名称`,
        developer: `开发者...`
    }
];


class LT extends Component {
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

LT.propTypes = {

};

export {LT};
export default LT;

