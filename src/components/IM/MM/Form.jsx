import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                    span: 8
                },
                sm: {
                    span: 8
                }
            },
            wrapperCol: {
                xs: {
                    span: 16
                },
                sm: {
                    span: 16
                }
            }
        };
        {/* style={{border: '1px solid red'}} */}
        const handleSearch = (value) => {
            console.log(`selected ${value}`);
        };
        const handleAdd = (value) => {
            console.log(`selected ${value}`);
        };
        return (
            <div style={{border: '1px solid #ccc', margin: 10, padding: 10}}>
                <Form 
                    onSubmit={this.handleSubmit}
                    layout="inline"
                    >
                    <FormItem
                        {...formItemLayout}
                        label="产品名称"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productName', {
                                initialValue: "Fans",
                                rules: [
                                    {
                                        required: true, 
                                        message: 'Please input your 产品名称!'
                                    }
                                ]
                            })(
                                <Select
                                    showSearch
                                    style={{ width: 150 }}
                                    placeholder="Select a terminal"
                                    >
                                    <Option value="金融终端">金融终端</Option>
                                    <Option value="Fans">Fans</Option>
                                    {/* <Option value="disabled" disabled>Disabled</Option> */}
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
                                <Input
                                    type="number"
                                    placeholder="菜单版本"
                                    style={{ width: 150 }}
                                />
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
                                <Input
                                    type="text" 
                                    placeholder="类型"
                                    style={{ width: 150 }}
                                />
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
                                <Input
                                    type="text"
                                    placeholder="菜单名称"
                                    style={{ width: 150 }}
                                />
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
                                initialValue: "yes"
                            })(
                                <Select
                                    style={{ width: 150 }}
                                    >
                                    <Option value="yes">是</Option>
                                    <Option value="no">否</Option>
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
                                <Input
                                    type="text"
                                    placeholder="样式"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    <br />
                    <FormItem
                        {...formItemLayout}
                        >
                        {
                            <Button
                                onClick={() => handleSearch()}
                                type='primary'
                                >
                                查询
                            </Button>
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        >
                        {
                            <Button
                                onClick={() => handleAdd()}
                                type='primary'
                                >
                                添加
                            </Button>
                        }
                    </FormItem>
                </Form>
                {/* <Button
                    onClick={() => handleSearch()}
                    type='primary'
                    >
                    查询
                </Button>
                <Button
                    onClick={() => handleAdd()}
                    type='primary'
                    >
                    添加
                </Button> */}
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