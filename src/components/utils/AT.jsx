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
    }/* ,
    {
        title: '操作',
        key: 'action',
        render: (text, data) => (
            <span>
                <a href={"#"+data.uname}>更新</a>
                <span className="ant-divider" />
                <a href="#">删除</a>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link">
                    More <Icon type="down" />
                </a>
            </span>
        )
    } */
];

// http://localhost:8000/user/450000197702084698

// xiagq gildata 23 Male 18123456789 xiagq@gildata.com 上海 上海市 浦东新区 2017-07-03 15:26:50

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



















