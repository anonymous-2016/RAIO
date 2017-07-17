import React, {Component} from 'react';
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


class EditModalCopy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    // 方法命名冲突了！
    setModalVisible = (value) => {
        this.setState({
            showModal: value
        });
    }
    OK = (value) => {
        this.setState({
            showModal: value
        });
    }
    render() {
        const record = this.props.data;
        const {getFieldDecorator, setFieldsValue} = this.props.form;
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
                <Button
                    type="primary"
                    onClick={() => this.setModalVisible(true)}
                    >
                    {this.props.children}
                </Button>
                {/* Button 控制 modal 的显示与否 */}
                <Modal
                    title={record.pname ? record.pname : '标题'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem>
                            {/* value={setFieldsValue(record.pname)} */}
                            {/* must keep `input type` same  */}
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">角色ID</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleId', {
                                    initialValue: record.rid,
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
                                    initialValue: record.rname,
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
                                    initialValue: record.ulname,
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
                                    initialValue: record.uid,
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
                                    initialValue: record.uname,
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
                        <span>
                            {`${record.roleId} + ${record.rname} + ${record.ulname} +${record.uid} + ${record.uname}`}
                        </span>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const EMC = Form.create({})(EditModalCopy);

export {EMC};
export default EMC;