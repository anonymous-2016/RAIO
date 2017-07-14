import React, { Component, PropTypes } from 'react';

import {Table, Form, Icon, Input, Button, Modal, Col, Row} from 'antd';

const FormItem = Form.Item;

class MMForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 
        };
    }
    render () {
        const {getFieldDecorator} = this.props.form;
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
                <Form 
                    onSubmit={this.handleSubmit}
                    label="Form Title"
                    layout="inline"
                    style={{border: '1px solid red'}}
                    >
                    <FormItem
                        {...formItemLayout}
                        label="产品名称"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productNum', {
                                rules: [
                                    {
                                        required: true, 
                                        message: 'Please input your 产品名称!'
                                    }
                                ],
                            })(
                                <Input type="number" placeholder="金融终端/Fans" />
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="菜单版本"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productName', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 菜单版本!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 菜单版本!',
                                    }
                                ],
                            })(
                                <Input type="text" placeholder="菜单版本"/>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="类型"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productBrief ', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 类型!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 类型!',
                                    }
                                ],
                            })(
                                <Input type="text" placeholder="类型"/>
                            )
                        }
                    </FormItem>
                    <br />
                    <FormItem
                        {...formItemLayout}
                        label="菜单名称"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productIntro', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 菜单名称!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 菜单名称!',
                                    },
                                    {
                                        validator: this.checkConfirm
                                    }
                                ],
                            })(
                                <Input type="textarea" placeholder="菜单名称"/>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="显示状态"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productIntro', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 显示状态!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 显示状态!',
                                    },
                                    {
                                        validator: this.checkConfirm
                                    }
                                ],
                            })(
                                <Input type="textarea" placeholder="显示状态"/>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="样式"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productIntro', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 样式!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 样式!',
                                    },
                                    {
                                        validator: this.checkConfirm
                                    }
                                ],
                            })(
                                <Input type="textarea" placeholder="样式"/>
                            )
                        }
                    </FormItem>
                </Form>
            </div>
        );
    }
}

MMForm.propTypes = {
    // 
};

const MMF = Form.create()(MMForm);

export {MMF};
export default MMF;