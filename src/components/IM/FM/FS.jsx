import React, { Component } from 'react';
import PropTypes from 'prop-types';

// modal
import {NFDM} from './NFDM';


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



class FSForm extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            show: false
        }
    }
    // showModal = () => {
    //     this.setState(
    //         (state, props) => {
    //             return{
    //                 show: true
    //             }
    //         }
    //     ); 
    // }
    hideModal = () => {
        this.setState(
            (state, props) => {
                return {
                    show: false
                }
            }
        ); 
    };
    handleSubmit = () => {
        // handleSubmit
    }
    render() {
        const record = this.props.data;
        const {getFieldDecorator, setFieldsValue} = this.props.form;
        // FormItem flexbox
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 16 }
            }
        };
        const showModal = (value) => {
            this.setState(
                (state, props) => {
                    return{
                        show: value
                    }
                }
            ); 
        };
        let show = this.state.show;
        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit}
                    layout="inline">
                    <FormItem
                        label={<span className="left-spaces">功能编码</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('fEncode', {
                                rules: [
                                    { required: false, message: '功能编码' }
                                ],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="key" style={{}} />} 
                                    type="text" 
                                    placeholder="功能编码" 
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label={<span className="left-spaces">模块编码</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('mEncode', {
                                rules: [
                                    { required: false, message: '模块编码' }
                                ],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="key" style={{}} />} 
                                    type="text" 
                                    placeholder="模块编码" 
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label={<span className="left-spaces">资源编码</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('rEncode', {
                                rules: [
                                    { required: false, message: '资源编码' }
                                ],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="key" style={{}} />} 
                                    type="text" 
                                    placeholder="资源编码" 
                                />
                            )
                        }
                    </FormItem>
                    <br/>
                    <FormItem
                        label={<span className="left-spaces">功能名称</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('fName', {
                                rules: [{ required: false, message: '功能名称' }],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="idcard" style={{}} />} 
                                    type="text" 
                                    placeholder="功能名称" 
                                    />
                            )
                        }
                    </FormItem>
                    <FormItem
                        label={<span className="left-spaces">功能命令</span>}
                        {...formItemLayout}
                        >
                        {
                            getFieldDecorator('fCommand', {
                                rules: [{ required: false, message: '功能命令' }],
                            })
                            (
                                <Input 
                                    prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                                    type="text" 
                                    placeholder="功能命令"
                                    />
                            )
                        }
                    </FormItem>
                    <br/>
                    <FormItem>
                        <Button
                            type="primary"
                            icon="search"
                            style={{marginLeft: 50}}
                            >
                            查询
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            icon="user-add"
                            style={{marginLeft: 50}}
                            onClick={
                                () => {
                                    console.log(`this.state.show`, this.state.show);
                                    showModal(true);
                                    {/* 
                                    console.log(`this.state.show`, this.state.show);
                                    setTimeout(() => {
                                        return showModal(false);
                                    }, 1000);
                                     */}
                                }
                            }
                            >
                            添加
                        </Button>
                    </FormItem>
                </Form>
                {
                    show
                    &&
                    <NFDM
                        title='标题'
                        data={{}}
                        clickOK={() => console.log(`clicked OK!`)}
                        hide={this.hideModal}
                    >
                       {/*  <span>添加</span> */}
                    </NFDM>
                }
            </div>
        );
    }
}

FSForm.propTypes = {

};

const FS = Form.create({})(FSForm);


export {FS};
export default FS;

