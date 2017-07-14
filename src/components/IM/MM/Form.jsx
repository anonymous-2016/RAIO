import React, { Component, PropTypes } from 'react';

import {Table, Form, Icon, Input, Button, Modal, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader} from 'antd';


const InputGroup = Input.Group;
const Option = Select.Option;
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
                            getFieldDecorator('productName', {
                                rules: [
                                    {
                                        required: true, 
                                        message: 'Please input your 产品名称!'
                                    }
                                ]
                            })(
                                <Select defaultValue="Fans" style={{ width: 120 }}>
                                    <Option value="金融终端">金融终端</Option>
                                    <Option value="Fans">Fans</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="菜单版本"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('menuVersion', {
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
                                <Input type="number" placeholder="菜单版本"/>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="类型"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('type', {
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
                            getFieldDecorator('menuname', {
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
                                <Input type="text" placeholder="菜单名称"/>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="显示状态"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('displaystate', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 显示状态!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 显示状态!',
                                    }
                                ],
                            })(
                                <Select defaultValue="yes" style={{ width: 120 }}>
                                    <Option value="yes">是enum</Option>
                                    <Option value="no">否enum</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="样式"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('style', {
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
                                <Input type="text" placeholder="样式"/>
                            )
                        }
                    </FormItem>
                </Form>
                <Button>查询</Button>
                <Button>添加</Button>
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