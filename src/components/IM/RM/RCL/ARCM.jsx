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

class ARCModal extends Component {
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
        this.props.hide();
    };
    OK = (value) => {
        this.setState({
            showModal: value
        });
        this.props.hide();
    };
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
                    title={this.props.title}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onOk={() => this.OK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    onClick={(record) => this.props.clickOK(record)}
                    >
                    <Form >
                        <FormItem
                            label={<span className="left-spaces">分类编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rcEncode', {
                                    rules: [
                                        { required: false, message: '分类编码' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{}} />} 
                                        type="number" 
                                        placeholder="分类编码" 
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">分类名称</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('rcName', {
                                    rules: [{ required: true, message: '分类名称' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="idcard" style={{}} />} 
                                        type="text" 
                                        placeholder="分类名称" 
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label={<span className="left-spaces">父分类编码</span>}
                            {...formItemLayout}
                            >
                            {
                                getFieldDecorator('prcEncode', {
                                    initialValue: `Null Value!`,
                                    rules: [{ required: false, message: '父分类编码' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="notification" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="父分类编码"
                                        />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

ARCModal.propTypes = {

};

const ARCM = Form.create({})(ARCModal);

export {ARCM};
export default ARCM;
