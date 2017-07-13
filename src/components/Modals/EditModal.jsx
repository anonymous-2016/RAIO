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


class EditModal extends React.Component {
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
                    title={record.pname}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem>
                            {/* value={setFieldsValue(record.pname)} */}
                        </FormItem>
                        {/* must keep `input type` same  */}
                        <FormItem
                            label={<span className="left-spaces">角色编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleCode', {
                                    initialValue: record.pname,
                                    rules: [{ required: false, message: '角色编码' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={IconStyles.css1} />} 
                                        type="number" 
                                        placeholder="角色编码" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">产品ID</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('productId', {
                                    initialValue: record.pid,
                                    rules: [{ required: true, message: '产品ID' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={IconStyles.css2} />} 
                                        type="text" 
                                        placeholder="产品ID" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">最新版本</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('latestVersion', {
                                    initialValue: record.lversion,
                                    rules: [{ required: false, message: '最新版本' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="最新版本"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">关联菜单</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('relationMenu', {
                                    initialValue: record.rmenu,
                                    rules: [{ required: false, message: '关联菜单' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="bars" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="关联菜单" 
                                        />
                                )
                            }
                        </FormItem>
                        <span>
                            {`${record.pname} + ${record.pid} + ${record.lversion} + ${record.rmenu}`}
                        </span>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const EM = Form.create({})(EditModal);

export {EM};
export default EM;