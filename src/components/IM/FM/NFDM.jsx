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
    Cascader,
    Menu,
    Select
} from 'antd';

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;

class NFDModal extends Component {
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
        // this.props.hide;
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
                    title={'功能定义'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form>
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
                            label={<span className="left-spaces">功能名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('fName', {
                                    rules: [{ required: true, message: '功能名称' }],
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
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="功能命令"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">功能参数</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('fParams', {
                                    rules: [{ required: false, message: '功能参数' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="功能参数"
                                        />
                                )
                            }
                        </FormItem>
                        {/* br */}
                        <FormItem
                            label={<span className="left-spaces">功能说明</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('fDescribe', {
                                    rules: [{ required: false, message: '功能说明' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="功能说明"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">关联模块</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('aModule', {
                                    rules: [{ required: false, message: '关联模块' }]
                                    ,
                                    initialValue: "module1"
                                })(
                                    <Select
                                        style={{ width: '100%' }}
                                        >
                                        <Option value="module1">关联模块1</Option>
                                        <Option value="module2">关联模块2</Option>
                                        <Option value="module3">关联模块3</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">关联资源</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('aResource', {
                                    rules: [{ required: false, message: '关联资源' }]
                                    ,
                                    initialValue: "resources1"
                                })(
                                    <Select
                                        style={{ width: '100%' }}
                                        >
                                        <Option value="resources1">关联资源1</Option>
                                        <Option value="resources2">关联资源2</Option>
                                        <Option value="resources3">关联资源3</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">掩码定义</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('fDefine', {
                                    rules: [{ required: false, message: '掩码定义' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="掩码定义"
                                        />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}



NFDModal.propTypes = {

}

const NFDM = Form.create({})(NFDModal);

export {NFDM};
export default NFDM;