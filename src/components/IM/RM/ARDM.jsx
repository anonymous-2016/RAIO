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

// import {RCL} from './RCL/index';

const FormItem = Form.Item;

class ARDModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true
        }
    }
    setModalVisible = (value) => {
        this.setState({
            showModal: value
        });
        this.props.hide();
    }
    OK = (value) => {
        this.setState({
            showModal: value
        });
        this.props.hide();
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
        return (
            <div>
                <Modal
                    title={'添加'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem
                            label={<span className="left-spaces">资源编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rEncode', {
                                    initialValue: record.rencode,
                                    rules: [
                                        { required: false, message: '资源编码' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{}} />} 
                                        type="number" 
                                        placeholder="资源编码" 
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">资源名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rName', {
                                    initialValue: record.rname,
                                    rules: [{ required: true, message: '资源名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="资源名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">资源描述</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rDescribe', {
                                    initialValue: record.redit ? record.redit : `Null Value!`,
                                    rules: [{ required: false, message: '资源描述' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="资源描述"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">资源配置</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rConfiguration', {
                                    initialValue: record.redit ? record.redit : `Null Value!`,
                                    rules: [{ required: false, message: '资源配置' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="资源配置"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">分类编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('maskDefine', {
                                    initialValue: record.rname,
                                    rules: [{ required: true, message: '分类编码' }],
                                })
                                (
                                    <div>
                                        <Input 
                                            prefix={<Icon type="idcard" style={{}} />} 
                                            type="text" 
                                            placeholder="资源分类列表!A1"
                                            value={"smg"}
                                            onChange={e => e.target.value}
                                            />
                                        {/* seting props values */}
                                        {'资源分类列表 Modal'}
                                    </div>
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">掩码定义</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('maskDefine', {
                                    rules: [{ required: true, message: '掩码定义' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="掩码定义" 
                                        />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

ARDModal.propTypes = {

}

const ARDM = Form.create({})(ARDModal);

export {ARDM};
export default ARDM;