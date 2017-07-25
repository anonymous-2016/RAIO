import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {
    Table,
    Form,
    Icon,
    Input,
    Button,
    Modal,
    Col,
    Row,
    InputNumber,
    Radio,
    Cascader
} from 'antd';

const FormItem = Form.Item;

class AddModal extends Component {
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
        const form = this.props.form;
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
                    {/* mode="inline" */}
                    <Form>
                        <FormItem
                            label={<span className="left-spaces">产品编号</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('pNum', {
                                    rules: [
                                        { required: false, message: '产品编号' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{}} />} 
                                        type="number" 
                                        placeholder="产品编号" 
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">产品名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('pName', {
                                    rules: [{ required: true, message: '产品名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="产品名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">产品简称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('pBrief', {
                                    rules: [{ required: false, message: '产品简称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="tex" 
                                        placeholder="产品简称"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">产品介绍</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('pIntroduce', {
                                    rules: [{ required: false, message: '产品介绍' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="产品介绍"
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

AddModal.propTypes = {

};

const AM = Form.create({})(AddModal);

export {AM};
export default AM;

