import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ARCM}from './ARCM';

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


class RSForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false
        };
    }
    hideModal = () => {
        this.setState(
            (state, props) => {
                return {
                    show: false
                }
            }
        ); 
    };
    handleSubmit = (value) => {
        console.log(`selected ${value}`);
    };
    render() {
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
            // search
            this.props.onSearch();
        };
        const showModal = (value) => {
            this.setState(
                (state, props) => {
                    return {
                        show: value
                    }
                }
            ); 
        };
        let show = this.state.show;
        const handleAdd = (value) => {
            console.log(`selected ${value}`);
            // alert(`添加 ...`);
            showModal(true);
        };
        return (
            <div>
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
                    <br/>
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
                <div>
                    {
                        show && <ARCM hide={this.hideModal}/>
                    }
                </div>
            </div>
        );
    }
}

RSForm.propTypes = {

};

const RSF = Form.create({})(RSForm);

export {RSF};
export default RSF;