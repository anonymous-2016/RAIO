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

class FMDModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    setModalVisible = (value) => {
        this.setState({
            showModal: value
        });
    }
    OK = (value) => {
        this.setState({
            showModal: value
        });
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
                <a
                    onClick={
                        (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return(
                                this.setModalVisible(true)
                            );
                        }
                    }
                    >
                    {this.props.children}
                </a>
                <Modal
                    title={record.pname ? record.pname : '模块定义!A1'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form>
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
                            label={<span className="left-spaces">模块名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('mName', {
                                    rules: [{ required: true, message: '模块名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="模块名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">模块描述</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('mdescribe', {
                                    rules: [{ required: false, message: '模块描述' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="模块描述"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">关联类库</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('alibs', {
                                    rules: [{ required: false, message: '关联类库' }],
                                })
                                (
                                    <Select
                                        placeholder="关联类库"
                                        >
                                        <Option value="alib1">关联类库1</Option>
                                        <Option value="alib2">关联类库2</Option>
                                        <Option value="alib3">关联类库3</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">模块命令</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('mCommand', {
                                    rules: [{ required: false, message: '模块命令' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="模块命令"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">模块参数</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('mParams', {
                                    rules: [{ required: false, message: '模块参数' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="模块参数"
                                        />
                                )
                            }
                        </FormItem>
                        {/* <span>
                            {`${record.rencode} + ${record.lname} + ${record.redit ? record.redit : `Null Value!`}`}
                        </span> */}
                    </Form>
                </Modal>
            </div>
        )
    }
}



FMDModal.propTypes = {

}

const FMDM = Form.create({})(FMDModal);

export {FMDM};
export default FMDM;