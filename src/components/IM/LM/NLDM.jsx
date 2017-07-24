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

class NLDModal extends Component {
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
    }
    OK = (value) => {
        this.setState({
            showModal: value
        });
        // Error
        // this.props.hide;
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
                                getFieldDecorator('lencode', {
                                    initialValue: record.lencode,
                                    rules: [
                                        { required: false, message: '编码' }
                                    ],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="key" style={{}} />} 
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
                                getFieldDecorator('libName', {
                                    initialValue: record.lname,
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
                                    rules: [{ required: false, message: '描述' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="file" style={{ fontSize: 13 }} />} 
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
                                getFieldDecorator('developers', {
                                    rules: [{ required: false, message: '开发者' }],
                                })
                                (
                                    <Input 
                                        prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                                        type="text" 
                                        placeholder="开发者"
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



NLDModal.propTypes = {

}

const NLDM = Form.create({})(NLDModal);

export {NLDM};
export default NLDM;