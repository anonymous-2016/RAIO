import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Icon,
    Input,
    InputNumber,
    Radio,
    Button,
    Modal,
    Cascader
} from 'antd';

const FormItem = Form.Item;


class ADDModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
           visible: true
        }
    }
    hideModal = () => {
        this.setState({
            visible: false
        });
        this.props.hide();
    };
    handleOk = () => {
        this.setState({
            visible: false
        });
        this.props.hide();
        alert(`saving...`);
    };
    handleCancel = () => {
        this.setState({
            visible: false
        });
        this.props.hide();
    };
    handleSubmit = () => {
        alert('submiting...');
    };
    render() {
        const record = this.props.data;
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const roleCodeError = isFieldTouched('roleCode') && getFieldError('roleCode');
        const userCodeError = isFieldTouched('userCode') && getFieldError('userCode');
        const loginNameError = isFieldTouched('loginName') && getFieldError('loginName');
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        // FormItem flexbox
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const IconStyles = {
            css1: {
                fontSize: 15,
                color: '#0f0',
                background: '#000'
            },
            css2: {
                fontSize: 13,
                color: '#000',
                background: '#f0f'
            }
        };
        return (
            <div>
                <Modal
                    title="添加用户"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label={<span className="left-spaces">角色ID</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleId', {
                                    rules: [{ required: false, message: '角色ID' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={IconStyles.css1} />} 
                                        type="number" 
                                        placeholder="角色ID" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">角色名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleName', {
                                    rules: [{ required: true, message: '角色名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={IconStyles.css2} />} 
                                        type="text" 
                                        placeholder="角色名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">用户登录名</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('userLoginName', {
                                    rules: [{ required: false, message: '用户登录名' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="用户登录名"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">用户ID</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('userId', {
                                    rules: [{ required: false, message: '用户ID' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="bars" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="用户ID" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">用户名</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('userName', {
                                    rules: [{ required: false, message: '用户名' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="bars" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="用户名" 
                                        />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

ADDModal.propTypes = {

};

const ADDM = Form.create({})(ADDModal);

export {ADDM};
export default ADDM;