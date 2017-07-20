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
    Cascader
} from 'antd';


const FormItem = Form.Item;

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
                    title={record.pname ? record.pname : '标题'}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem
                            label={<span className="left-spaces">角色编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleEncode', {
                                    initialValue: record.rencode,
                                    rules: [
                                        { required: false, message: '角色编码' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{}} />} 
                                        type="number" 
                                        placeholder="角色编码" 
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">角色名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleName', {
                                    initialValue: record.rname,
                                    rules: [{ required: true, message: '角色名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="角色名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">关联用户</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('roleEdit', {
                                    initialValue: record.redit ? record.redit : `Null Value!`,
                                    rules: [{ required: false, message: '关联用户' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="关联用户"
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

