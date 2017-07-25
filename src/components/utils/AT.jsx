import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Table, Icon} from 'antd';
	

const columns = [
    {
        title: '用户ID',
        dataIndex: 'uid',
        key: 'userId',
        render: ((text) => (<a href="#">{text}</a>))
    }, 
    {
        title: '用户姓名',
        dataIndex: 'uname',
        key: 'userName'
    }, 
    {
        title: '登录名',
        dataIndex: 'lname',
        key: 'loginName'
    },
    {
        title: '手机号',
        dataIndex: 'pnum',
        key: 'phoneNumber'
    }, 
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        render: ((text) => {
            return(
                <a
                    href="#"
                    onClick = {
                        (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return console.log(`e`, e);
                        }
                    } >
                    {text}
                </a>
            );
        })
    }, 
    {
        title: '激活状态',
        dataIndex: 'activation',
        key: 'activationState'
    }, 
    {
        title: '有效日期',
        dataIndex: 'vdate',
        key: 'validDate '
    },
    {
        title: '用户类型',
        dataIndex: 'utype',
        key: 'userType '
    }
];


const data = [
    {
        key: '1',
        uname: 'xray',
        utype: "内部用户",
        uid: 17,
        lname: '西湖区',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }, 
    {
        key: '2',
        uname: 'Sidney',
        utype: "外部用户",
        uid: 23,
        lname: '湖底公园',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "否"
    },
    {
        key: '3',
        uname: 'Joe Black',
        utype: "内部用户",
        uid: 32,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    },
    {
        key: '4',
        uname: 'xray',
        utype: "外部用户",
        uid: 23,
        lname: '西湖公园1号',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }, 
    {
        key: '5',
        uname: 'Sidney',
        utype: "内部用户",
        uid: 66,
        lname: '西湖湖底',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "否"
    },
    {
        key: '6',
        uname: 'Joe Black',
        utype: "外部用户",
        uid: 18,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com",
        vdate: "2017-01-01~2017-12-31",
        activation: "是"
    }
];


class AT extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.props.datas} />
            </div>
        );
    }
}

AT.propTypes = {

};
export {AT};
export default AT;



















