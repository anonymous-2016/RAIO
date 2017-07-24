import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Modal
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


class FunctionModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: false,
            key: 'id_001'
        }
    }
    showModal = (value) => {
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        this.setState({
            visible: value
        });
    };
    handleSubmit = () => {
        // 
    };
    render () {
        const {getFieldDecorator} = this.props.form;
        // cosnt productNum = ;
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
        // child options
        const childs = [];
        for (let i = 10; i < 36; i++) {
            childs.push(
                <Option key={`0${i.toString()}`}>
                    {`关联资源0${i.toString()}`}
                </Option>
            );
        }
        const handleChange = () => {
            // 
        }
        const url = window.location.href;
        return (
            <div>
                <span>
                    <a
                        href={window.location.href}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return this.showModal(true);
                        }}>
                        关联
                        {/* {this.props.data.name} */}
                    </a>
                </span>
                <Modal
                    title='关联'
                    key={this.state.key}
                    visible={this.state.visible}
                    onCancel={() => this.showModal(false)}
                    onOk={() => this.showModal(false)}
                    >
                    <Form 
                        onSubmit={() => this.handleSubmit()}
                        >
                        <FormItem
                            {...formItemLayout}
                            label="功能编码"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('featuresEncode', {
                                    initialValue: 111,
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入功能编码!'
                                        }
                                    ],
                                })(
                                    <Input type="number" placeholder="功能编码" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="功能名称"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('featuresName', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入功能名称!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="功能名称" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="功能命令"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('featuresCommand', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入功能命令!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="功能命令" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="功能参数"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('featuresParams', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入功能参数!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="功能参数" />
                                )
                            }
                        </FormItem>
                        {/*  */}
                        <FormItem
                            {...formItemLayout}
                            label="功能说明"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('featuresDescription', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入功能说明!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="功能说明" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="关联模块"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('associateModules', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入关联模块!'
                                        }
                                    ],
                                })(
                                    <Input type="text" placeholder="关联模块" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="关联资源"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('associateResources', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入关联资源!'
                                        }
                                    ],
                                    initialValue: ['关联资源010', '关联资源020', '关联资源030']
                                })(
                                    <Select
                                        mode="multiple"
                                        style={{width: '100%'}}
                                        placeholder="Please select a 关联资源"
                                        onChange={handleChange}
                                        >
                                        {childs}
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="掩码定义"
                            hasFeedback
                            >
                            {
                                getFieldDecorator('maskDefinition', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: '请输入掩码定义!'
                                        }
                                    ]
                                })(
                                    <Input type="text" placeholder="掩码定义" />
                                )
                            }
                        </FormItem>
                    </Form>
                    <Button
                        style={{marginLeft: "45%"}}
                        onClick={() => alert(`Saving...!`)}>
                        Save
                    </Button>
                </Modal>
            </div>
        );
    }
}

FunctionModal.propTypes = {
    /*  */
};

const FM = Form.create()(FunctionModal);

export {FM};
export default FM;

