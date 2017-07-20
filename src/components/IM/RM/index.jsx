import React, {Component} from 'react';
import PropTypes from 'prop-types';


import {RT} from './RT';


import {
    Form,
    Icon,
    Input,
    InputNumber,
    Radio,
    Button,
    Modal,
    Cascader,
    Select
} from 'antd';

const Option = Select.Option;


const FormItem = Form.Item;

class RM extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // 
        };
    }
    handleSubmit = (value) => {
        console.log(`selected ${value}`);
    };
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
        const handleSearch = (value) => {
            console.log(`selected ${value}`);
            alert(`查询 ...`);
        };
        const handleAdd = (value) => {
            console.log(`selected ${value}`);
            alert(`添加 ...`);
        };
        return (
            <div style={{border: '1px solid #ccc', margin: 10, padding: 10}}>
                <Form
                    onSubmit={(e) => this.handleSubmit(e)}
                    layout="inline"
                    >
                    <FormItem
                        label="资源编码"
                        {...formItemLayout}
                        hasFeedback
                        >
                        {
                            getFieldDecorator('resourceEncode', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 资源编码!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 类型!',
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user"/>}
                                    type="text" 
                                    placeholder="资源编码"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="资源分类"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('productName', {
                                initialValue: "classfication1",
                                rules: [
                                    {
                                        required: false, 
                                        message: 'Please input your 资源分类!'
                                    }
                                ]
                            })(
                                <Select
                                    showSearch
                                    style={{ width: 150 }}
                                    placeholder="Select a 资源分类"
                                    >
                                    <Option value="classfication1">资源分类 1</Option>
                                    <Option value="classfication2">资源分类 2</Option>
                                    <Option value="classfication3">资源分类 3</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <br/>
                    <FormItem
                        label="资源名称"
                        {...formItemLayout}
                        hasFeedback
                        >
                        {
                            getFieldDecorator('resourceName', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 资源名称!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 资源名称!',
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user"/>}
                                    type="text" 
                                    placeholder="资源名称"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    {/* <br/> */}
                    <FormItem>
                        <Button 
                            icon="search" 
                            type="primary"
                            onClick={(e) => handleSearch(e)}
                            style={{marginLeft: 30}}
                            >
                            查询
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button 
                            icon="user" 
                            type="primary"
                            onClick={(e) => handleAdd(e)}
                            style={{marginLeft: 30}}
                            >
                            添加
                        </Button>
                    </FormItem>
                </Form>
                <hr/>
                <div>
                    <RT />
                </div>
            </div>
        )
    }
}

const NRM = Form.create({})(RM);

RM.propTypes = {

}

export {NRM};
export default NRM;






























