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

class AFModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true
        }
    }
     // default  true, 一进来就显示，不用 click 通过 props 传递的子组件，来触发 show modal！
    setModalVisible = (value) => {
        this.setState({
            showModal: value
        });
        this.props.hide();
    };
    OK = (value) => {
        this.setState({
            showModal: value
        });
        // Error
        // this.props.hide;
        this.props.hide();
    };
    handleSubmit = () => {
        // handleSubmit
    };
    render() {
        const record = this.props.data;
        const form = this.props.form;
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
                    title={'Add 修改'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form 
                        onSubmit={() => this.handleSubmit()}
                        label="Form Title"
                        >
                        <FormItem
                            {...formItemLayout}
                            label="编码"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('encode', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 编码!'
                                        }
                                    ],
                                })(
                                    <Input type="number" placeholder="编码" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('name', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 名称!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="名称" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="英文名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('englishName', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 英文名称!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="英文名称" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="图标名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('iconName', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 图标名称!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="图标名称" />
                                )
                            }
                        </FormItem>
                        {/*  */}
                        <FormItem
                            {...formItemLayout}
                            label="收藏名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('collectName', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 收藏名称!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="收藏名称" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="关联功能"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('associateFetures', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 关联功能!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="关联功能" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="快捷键"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('shortcutKey', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 快捷键!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="快捷键" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="类型"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('types', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 类型!'
                                        }
                                    ],
                                    initialValue: "Fans"
                                })(
                                    <Select
                                        style={{ width: '100%'}}
                                        placeholder="Select a terminal"
                                        >
                                        <Option value="金融终端">金融终端</Option>
                                        <Option value="Fans">Fans</Option>
                                        {/* <Option value="disabled" disabled>Disabled</Option> */}
                                    </Select>
                                )
                            }
                        </FormItem>
                        {/*  */}
                        <FormItem
                            {...formItemLayout}
                            label="提示信息"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('tipsInfo', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 提示信息!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="提示信息" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="样式"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('styles', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 样式!'
                                        }
                                    ],
                                    initialValue: "style1"
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: '100%'}}
                                        placeholder="Select a terminal"
                                        >
                                        <Option value="style1">样式 1</Option>
                                        <Option value="style2">样式 2</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="关联产品"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('associateProduct', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 关联产品!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="关联产品" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="版本"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('version', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 版本!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="版本" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="显示"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('display', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your 显示!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="显示" />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

AFModal.propTypes = {

}

const AFM = Form.create({})(AFModal);

export {AFM};
export default AFM;