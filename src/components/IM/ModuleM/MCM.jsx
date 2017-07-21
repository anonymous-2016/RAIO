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

class MCModal extends Component {
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
                    title={record.pname ? record.pname : '类库定义'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem
                            label={<span className="left-spaces">编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('encode', {
                                    initialValue: record.mencode,
                                    rules: [
                                        { required: false, message: '编码' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{}} />} 
                                        type="text" 
                                        placeholder="编码" 
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('name', {
                                    initialValue: record.mname,
                                    rules: [{ required: true, message: '名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">描述</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('describe', {
                                    initialValue: record.redit ? record.redit : `Null Value!`,
                                    rules: [{ required: false, message: '描述' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="textarea" 
                                        placeholder="描述"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">开发者</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('developer', {
                                    initialValue: record.redit ? record.redit : `Null Value!`,
                                    rules: [{ required: false, message: '开发者' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="开发者"
                                        />
                                )
                            }
                        </FormItem>
                        <span>
                            {`${record.rencode} + ${record.rname} + ${record.redit ? record.redit : `Null Value!`}`}
                        </span>
                    </Form>
                </Modal>
            </div>
        )
    }
}

MCModal.propTypes = {

}

const MCM = Form.create({})(MCModal);

export {MCM};
export default MCM;

