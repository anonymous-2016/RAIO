import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Table, Form, Icon, Input, Button} from 'antd';


const columns = [
    {
        title: '角色ID',
        dataIndex: 'rid',
        key: 'roleId',
        render: ((text) => (<a href="#">{text}</a>))
    }, 
    {
        title: '角色名称',
        dataIndex: 'rname',
        key: 'roleName'
    }, 
    {
        title: '用户登录名',
        dataIndex: 'ulname',
        key: 'userLoginName'
    },
    {
        title: '用户ID',
        dataIndex: 'uid',
        key: 'userId'
    },
    {
        title: '用户名',
        dataIndex: 'uname',
        key: 'userName'
    }
];

class RoleTree extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        };
    }
    componentDidMount() {
        setTimeout(() => {
             fetch('https://cdn.xgqfrms.xyz/json/roles.json')
            .then((res) => {
                console.log(`res `, res);
                let json = res.json();
                console.log(`json `, json);
                return json;
            })
            .then((data) => {
                this.setState(
                    {
                        data: data
                    }
                );
            });
        }, 1000);
    }
    linkClickHandler = (e) => {
        alert(e.target.value);
    }
    render() {
        return (
            <div className="roles-tree">
                角色树
                <ul onClick={(e) => this.linkClickHandler(e)}>
                    <li>
                        <a href="#1">角色1</a>
                    </li>
                    <li>
                        <a href="#2">角色2</a>
                    </li>
                    <li>
                        <a href="#3">角色3</a>
                    </li>
                </ul>
                {/* <Table dataSource={this.state.data} columns={columns} /> */}
            </div>
        );
    }
}

RoleTree.defaultProps = {
    data: [{
        "key": 3,
        "rid": 666,
        "rname": "胡彦斌",
        "uid": 2048,
        "uname": "彦斌",
        "ulname": "西湖 湖底公园"
    }]
};

RoleTree.propTypes = {
    data: PropTypes.array.isRequired
};



export {RoleTree};
export default RoleTree;

/*

onClick show Modal

react event proxy

*/