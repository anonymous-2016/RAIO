import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

import {AUM} from './AUM';


// ANT
import {Table} from 'antd';




const columns = [
    {
        title: '角色编码',
        dataIndex: 'rencode',
        key: 'roleEncode',
        render: (
            (text) => {
                const clickTest = () => {
                    alert('clickTest!');
                }
                return(
                    <a href="javascript:void(0)" onClick={() => clickTest()}>
                        {text}
                    </a>
                );
            }
        )
    }, 
    {
        title: '角色名称',
        dataIndex: 'rname',
        key: 'roleName',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.pid = "new pid";
            };
            return(
                <span>
                    {text}
                </span>
            );
        }
    },
    {
        title: '关联用户',
        dataIndex: 'redit',
        key: 'roleEdit',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.rencode = "new rencode";
            };
            return(
                <span>
                    <AUM
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text ? text : `添加用户 default`}</span>
                    </AUM>
                </span>
            );
        }
    }
];

// key` prop,or set `rowKey
const datas = [
    {
        rencode: `6011`,
        rname: `研报权限`,
        redit: `添加用户`
    },
    {
        rencode: `6012`,
        rname: `研报权限`,
        redit: `添加用户`
    },
    {
        rencode: `6088`,
        rname: `研报权限`,
        redit: ``
    }
];

class RoleTable extends Component {
    render () {
        return (
            <div>
                {/* title={() => {return('角色 Table');}} */}
                <Table
                    dataSource={datas}
                    columns={columns}
                />
            </div>
        );
    }
}

RoleTable.propTypes = {
    // 
};

const RT = RoleTable;
export {RT};
export default RT;


