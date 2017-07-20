import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';
// import * as fetch from 'whatwg-fetch';
// https://github.com/github/fetch#json

import './index.css';

/* import {RoleTree} from './RolesTree'; */

// Warning: Failed prop type: The prop `menuOptions` is marked as required in `DropOption`, but its value is `undefined`.

import {DropOption} from '../../utils/DropOption';
// ({onMenuClick, menuOptions = [], buttonStyle, dropdownProps}) 

import {EMC} from '../../Modals/EditModalCopy';
import GridRowCol from '../../../Ant_Components/Gird-Flex'; 


// amrm
import {RT} from './RoleTable';

import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown,} from 'antd';



const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;

const hasErrors = (fieldsError) => {
    // 测试数组中的某些元素是否通过由提供的函数实现的测试。
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const handleMenuClick = (record, e) => {
    console.log(`record`, record);
    console.log(`record.rname`, record.rname);
    console.log(`e`, e);
    if(e.key === "1"){
        console.log(`update`, record.rname);
        console.log(`record`, record);
        const clickOK = () => {
            alert('clickOK', clickOK);
        }
    /*      
        return(
            <EM
                data={record}
                clickOK={clickOK}
                >
                <span>{record.rname} 编辑</span>
            </EM>
        ); 
    */
    }
    if(e.key === "2"){
        confirm({
            title: '确定删除此记录吗？',
            onOk(){
                //onDeleteItem(record.id);
                console.log(`onOk`, record.rname);
            },
            onCancel(){
                console.log(`onCancel`, record.rid);
            }
        });
    }
};

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
    },
    {
        title: '编辑',
        dataIndex: 'edit',
        key: 'editRole',
        render: (text, record, index) => {
            const clickOK = (record) => {
                return record.pid = "new pid";
            };
            return(
                <span>
                    <DropOption 
                        onMenuClick={e => handleMenuClick(record, e)}
                        menuOptions={[
                            {key: '1', name: '更新'},
                            {key: '2', name: '删除'}
                        ]} 
                    />
                    <EMC
                        title='标题'
                        data={record}
                        clickOK={clickOK}
                    >
                        <span>{text} 编辑</span>
                    </EMC>
                </span>
            );
        }
    }
];


class RolesManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        };
    }
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
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
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    clickSearchHandler = (e) => {
        e.preventDefault();
        console.log('Received values of form: ', e);
        alert(`e`, e);
        this.setState(
            {
                data: []
            }
        );
        let q = ""
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
    };
    clickAddHandler = (e) => {
        e.preventDefault();
        console.log('Received values of form: ', e);
        alert(`e`, e);
    };
    onChange = (e) => {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };
    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const roleCodeError = isFieldTouched('roleCode') && getFieldError('roleCode');
        const userCodeError = isFieldTouched('userCode') && getFieldError('userCode');
        const loginNameError = isFieldTouched('loginName') && getFieldError('loginName');
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        return (
            <div className="user-search">
                <div>
                    <div>
                        <Input
                            type='number'
                            placeholder="角色编码"
                            style={{width: 150, margin: 'auto 10px'}} 
                            prefix={<Icon type="user" style={{fontSize: 12, marginTop: 12}} />}
                            onChange={(e) => this.onChange(e)}
                        />
                        <Button 
                            type="primary"
                            icon="search"
                            >
                            查询
                        </Button>
                    </div>
                    <RT />
                </div>
                <hr style={{height: 30, background: '#000'}}/>
                <a href="#">
                    角色管理
                </a>
                <div>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={roleCodeError ? 'error' : ''}
                            help={roleCodeError || ''}
                            label="角色编码"
                            >
                            {
                                getFieldDecorator('roleCode', {
                                    rules: [{ required: false, message: '角色编码' }],
                                })
                                (
                                    <Input
                                        type="number"
                                        min="1000"
                                        prefix={<Icon type="key"
                                        style={{ fontSize: 13 }} />}
                                        placeholder="角色编码"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            validateStatus={loginNameError ? 'error' : ''}
                            help={loginNameError || ''}
                            label="登录名"
                            >
                            {
                                getFieldDecorator('loginName', {
                                    rules: [{ required: false, message: '登录名' }],
                                })
                                (
                                <Input type="text" maxLength="12" prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} placeholder="登录名" />
                                )
                            }
                        </FormItem>
                        <span className="search-spaces"/>
                        <FormItem>
                            <Button
                                icon="search"
                                type="primary"
                                htmlType="submit"
                                id="role-manage-search"
                                onClick={this.clickSearchHandler}
                                >
                                查询
                            </Button>
                        </FormItem>
                        <br/>
                        <FormItem
                            validateStatus={userCodeError ? 'error' : ''}
                            help={userCodeError || ''}
                            label="用户编码"
                            >
                            {
                                getFieldDecorator('userCode', {
                                    rules: [{ required: false, message: '用户编码' }],
                                })
                                (
                                <Input
                                    type="number"
                                    min="1000"
                                    step="1"
                                    prefix={<Icon type="qrcode" style={{fontSize: 13}} />}
                                    placeholder="用户编码" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                            label="用户名"
                            >
                            {
                                getFieldDecorator('userName', {
                                    rules: [{ required: false, message: '用户名' }],
                                })
                                (
                                <Input type="text" maxLength="12" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                )
                            }
                        </FormItem>
                        <span className="search-spaces"/>
                        <FormItem>
                            <Button
                                icon="user-add"
                                type="primary"
                                htmlType="button"
                                id="role-manage-add"
                                onClick={this.clickAddHandler}
                                >
                                添加
                            </Button>
                        </FormItem>
                    </Form>
                </div>
                {/* className="table-left" */}
                <div >
                    <Table dataSource={this.state.data} columns={columns} />
                </div>
            </div>
        );
    }
}

RolesManagement.defaultProps = {
    data: [{
        "key": 3,
        "rid": 666,
        "rname": "胡彦斌",
        "uid": 2048,
        "uname": "彦斌",
        "ulname": "西湖 湖底公园",
        "edit": ""
    }]
};

RolesManagement.propTypes = {
    data: PropTypes.array.isRequired
};

// Form.create({})(???)

const RoleManagement = Form.create({})(RolesManagement);

/* export {RoleManagement};
export default RoleManagement; */

const RM = RoleManagement;

export {RM};
export default RM;