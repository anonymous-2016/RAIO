import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

// modal

import {MCM} from './MCM';
import {MDM} from './MDM';

// ANT
import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown, Select} from 'antd';

const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;



const columns = [
    {
        title: '模块编码 ',
        dataIndex: 'mencode',
        key: 'moduleEncode',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <MDM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源定义!A1 default`}</span>
                    </MDM>
                </span>
            );
        }
    }, 
    {
        title: '模块名称',
        dataIndex: 'mname',
        key: 'moduleName',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.mname = "new mname";
            };
            return(
                <span>
                    {text}
                </span>
            );
        }
    },
    {
        title: '模块命令',
        dataIndex: 'mcomand',
        key: 'moduleComand',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.mcomand = "new mcomand";
            };
            return(
                <span onClick={(e) => clickOK(e)}>
                    {text}
                </span>
            );
        }
    },
    {
        title: '类库',
        dataIndex: 'clibs',
        key: 'classLibs',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <MCM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `资源定义!A1 default`}</span>
                    </MCM>
                </span>
            );
        }
    }
];

// key` prop,or set `rowKey
const datas = [
    {
        mencode: `模块定义!A1`,
        mname: `模块名称 `,
        mcomand: `模块命令`,
        clibs: `类库定义!A1`
    },
    {
        mencode: `模块定义!A1`,
        mname: `模块名称 `,
        mcomand: `模块命令`,
        clibs: `类库定义!A1`
    },
    {
        mencode: `模块定义!A1`,
        mname: `模块名称 `,
        mcomand: `模块命令`,
        clibs: `类库定义!A1`
    }
];


class MT extends Component {
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

MT.propTypes = {

};

export {MT};
export default MT;

