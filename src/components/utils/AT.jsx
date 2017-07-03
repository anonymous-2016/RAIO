/*
数据源

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    }, 
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, 
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }
];

<Table dataSource={dataSource} columns={columns} />

用户ID 用户姓名 登录名 手机号 邮件 激活状态 有效日期

*/
import React, {Component} from 'react';

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
        key: 'phoneNumber',
        render: ((text) => (<a href="#">{text}</a>))
    }, 
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
    }, 
    {
        title: '激活状态',
        dataIndex: 'activation',
        key: 'activationState'
    }, 
    {
        title: '有效日期',
        dataIndex: 'valid',
        key: 'validDate '
    },
    {
        title: '用户类型',
        dataIndex: 'utype',
        key: 'userType '
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link">
                    More actions <Icon type="down" />
                </a>
            </span>
        )
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
        email: "clarence.gray@example.com"
    }, 
    {
        key: '2',
        uname: 'Sidney',
        utype: "内部用户",
        uid: 23,
        lname: '湖底公园',
        pnum: "18123456789",
        email: "clarence.gray@example.com"
    },
    {
        key: '3',
        uname: 'Joe Black',
        utype: "内部用户",
        uid: 32,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com"
    },
    {
        key: '4',
        uname: 'xray',
        utype: "内部用户",
        uid: 23,
        lname: '西湖公园1号',
        pnum: "18123456789",
        email: "clarence.gray@example.com"
    }, 
    {
        key: '5',
        uname: 'Sidney',
        utype: "内部用户",
        uid: 66,
        lname: '西湖湖底',
        pnum: "18123456789",
        email: "clarence.gray@example.com"
    },
    {
        key: '6',
        uname: 'Joe Black',
        utype: "内部用户",
        uid: 18,
        lname: 'Sidney No. 1 Lake Park',
        pnum: "18123456789",
        email: "clarence.gray@example.com"
    }
];


<Table columns={columns} dataSource={data} />

const AT = () => {
    return(
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};


export {AT};

export default AT;



















