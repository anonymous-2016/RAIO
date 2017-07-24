import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

// modal

import {RCM} from './RCM';

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
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <RCM
                        title='编码'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源分类!A1`}</span>
                    </RCM>
                </span>
            );
        }
    }, 
    {
        title: '父编码',
        dataIndex: 'cencode',
        key: 'pEncode',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <RCM
                        title='父编码'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源分类!A1`}</span>
                    </RCM>
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
                };
                return(
                    <span>
                        {text}
                    </span>
                );
            }
        )
    }
];

// key` prop,or set `rowKey
/* const datas = [
    {
        encode: `资源分类!A1`,
        pEncode: `资源分类!A1`,
        name: `名称`,
        key: '1'
    },
    {
        encode: `资源分类!A1`,
        pEncode: `资源分类!A1`,
        name: `名称`,
        key: '2'
    }
]; */


class RCT extends Component {
    render () {
        // console.log(`this.props.datas`, this.props.datas);
        // 3
        return (
            <div>
                <Table
                    dataSource={this.props.datas}
                    columns={columns}
                />
            </div>
        )
    }
}

RCT.propTypes = {

};

export {RCT};
export default RCT;
