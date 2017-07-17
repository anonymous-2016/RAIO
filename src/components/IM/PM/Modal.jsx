import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Table, Form, Icon, Input, Button, Modal, Col, Row} from 'antd';

const FormItem = Form.Item;

class FormModal extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            show: false
        };
        this.showModalHandler = this.showModalHandler.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
    }
    handleSubmit = () => {
        // 
    };
    showModalHandler = (value) => {
        // sate: showState
        this.setState({
            show: value
        });
    };
    ClickHandler = (e) => {
        alert('submiting...');
        console.log(`e`, e);
    };
    render () {
        const {getFieldDecorator} = this.props.form;
        // cosnt productNum = ;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 6
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 14
                }
            }
        };
        return (
            <div>
                <h3>产品定义!A1</h3>
                <Button
                    onClick={() => this.showModalHandler(true)}
                    >
                    click show modal
                </Button>
                <Modal
                    title={this.props.title ? this.props.title : '标题'}
                    visible={this.state.show}
                    onOk={() => this.showModalHandler(false)}
                    onCancel={() => this.showModalHandler(false)}
                    >
                    <Form 
                        onSubmit={this.handleSubmit}
                        label="Form Title"
                        >
                        <FormItem
                            {...formItemLayout}
                            label="产品编号"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('productNum', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 产品编号!'
                                        }
                                    ],
                                })(
                                    <Input type="number" placeholder="产品编号" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="产品名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('productName', {
                                    rules: [
                                        {
                                            type: 'string', 
                                            message: 'The input is not valid 产品名称!',
                                        }, 
                                        {
                                            required: true, 
                                            message: 'Please input your 产品名称!',
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="产品名称"/>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="产品简称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('productBrief ', {
                                    rules: [
                                        {
                                            type: 'string', 
                                            message: 'The input is not valid 产品简称!',
                                        }, 
                                        {
                                            required: true, 
                                            message: 'Please input your 产品简称!',
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="产品简称"/>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="产品介绍"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('productIntro', {
                                    rules: [
                                        {
                                            type: 'string', 
                                            message: 'The input is not valid 产品介绍!',
                                        }, 
                                        {
                                            required: true, 
                                            message: 'Please input your 产品介绍!',
                                        },
                                        {
                                            validator: this.checkConfirm
                                        }
                                    ],
                                })(
                                    <Input type="textarea" placeholder="产品介绍"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {/* 确定 */}
                        </FormItem>
                    </Form>
                    {/* <Row xs={12} sm={12} type="flex" justify="center" > */}
                    <Row type="flex" justify="center" >
                        <Col xs={{span: 6, push: 2}} sm={{span: 6, push: 2}}>
                            <Button 
                                type="submit" 
                                value=""
                                onClick={(e) => this.ClickHandler(e)}
                                >
                                确定
                            </Button>
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

const PMModal = Form.create()(FormModal);


export {PMModal};
export default PMModal;
