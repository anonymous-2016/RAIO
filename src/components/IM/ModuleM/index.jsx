import React, {Component} from 'react';
import PropTypes from 'prop-types';


import {MT} from './MT';


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

class MM extends Component {
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
                        label="模块编码"
                        {...formItemLayout}
                        hasFeedback
                        >
                        {
                            getFieldDecorator('moduleEncode', {
                                rules: [
                                    {
                                        type: 'number', 
                                        message: 'The input is not valid 模块编码!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your 模块编码!',
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user"/>}
                                    type="number" 
                                    placeholder="模块编码"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label="模块名称"
                        {...formItemLayout}
                        hasFeedback
                        >
                        {
                            getFieldDecorator('moduleName', {
                                rules: [
                                    {
                                        type: 'string', 
                                        message: 'The input is not valid 模块名称!',
                                    }, 
                                    {
                                        required: false, 
                                        message: 'Please input your 模块名称!',
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user"/>}
                                    type="text" 
                                    placeholder="模块名称"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    <br/> 
                    <FormItem
                        {...formItemLayout}
                        label="类库名称"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('libsName', {
                                rules: [
                                    {
                                        required: true, 
                                        message: 'Please input your 类库名称!'
                                    }
                                ]
                            })(
                               <Input
                                    prefix={<Icon type="user"/>}
                                    type="text" 
                                    placeholder="类库名称"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="模块命令"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('moduleCommand', {
                                rules: [
                                    {
                                        required: false, 
                                        message: 'Please input your 模块命令!'
                                    }
                                ]
                            })(
                               <Input
                                    prefix={<Icon type="user"/>}
                                    type="text" 
                                    placeholder="模块命令"
                                    style={{ width: 150 }}
                                />
                            )
                        }
                    </FormItem>
                    {/* <br/>  */}
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
                    <MT />
                </div>
            </div>
        )
    }
}

MM.propTypes = {

}

const NMM = Form.create({})(MM);

export {NMM};
export default NMM;






























