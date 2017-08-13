import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * xgqfrms
 * 2017.08.10
 * 
 * @class TestModal
 * @extends {Component}
 */

import {Icon, Form, Button, Modal, Input} from 'antd';
const FormItem = Form.Item;

class TestModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            visible: true
        };
    }
    onTest = () => {
        // copy state, do test fetch
        this.testOK(); 
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    console.log('fetch url = \n', values.textarea);
                    // fetch data
                    let url = values.textarea;
                    this.props.checkTestCommands(url);
                    // this.onTest();
                }else{
                    throw new Error(Error.name, Error.message);
                }
            }
        );
    };
    testOK = (e) => {
        // e.preventDefault();
        console.log(`testOK e`, e);
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
            this.props.hideModal();
        }, 1000);
    }
    testCancel = () => {
       this.props.hideModal();
    }
    changeHanlder = (e) => {
        // e.target.value;
        console.log(`e.target.value =`, e.target.value);
        // call parent submit function
    }
    render() {
        const {getFieldsValue, getFieldValue, setFieldsValue, getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        // destructuring assignment
        const {visible, loading} = this.state;
        return (
            <div>
                {/* query object */}
                {/* no footer */}
                <Modal 
                    title="命令行"
                    onOk={this.testOK}
                    onCancel={this.testCancel}
                    visible={visible}
                    footer={[]}
                    >
                    {/* loading={this.state.loading} */}
                    <Form 
                        onSubmit={this.handleSubmit}
                        layout="horizontal">
                        <FormItem
                            label="测试命令行"
                            hasFeedback
                            {...formItemLayout}>
                            {
                                getFieldDecorator('textarea', {
                                    rules: [
                                        {
                                            required: false,
                                            message: ' url 长度必须 30 个字符之间'
                                        }
                                    ],
                                    initialValue: `10.1.5.31:8080/http/report/query?{"SecuCode":"000011","Names":"阳琨","ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","WriteType":"json"}`,
                                    // initialValue = ( input.example || null)
                                })(
                                    <Input
                                        type="textarea"
                                        placeholder="请先点击 “开始测试” 按钮!"
                                        rows="15"
                                        cols="500"
                                        onChange={(e) => this.changeHanlder(e)}
                                    />
                                )
                            }
                        </FormItem>
                        {/* onClick={this.props.checkTestCommands} */}
                        <FormItem style={{textAlign: "center"}}>
                            <Button 
                                onClick={this.onTest}
                                type="primary"
                                htmlType="submit"
                                icon="hourglass"
                                style={{margin: "auto 10px"}}
                                loading={loading}>
                                开始测试
                            </Button>
                            <Button 
                                onClick={this.testCancel}
                                size="large"
                                style={{margin: "auto 10px"}}
                                icon="close">
                                关闭
                            </Button>
                            {/* ref="submit_btn" */}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

TestModal.propTypes = {
    title: PropTypes.string,
    // badHideModal: PropTypes.func.required,
    hideModal: PropTypes.func.isRequired,
    checkTestCommands: PropTypes.func.isRequired
};


const TM = Form.create()(TestModal);

export {TM};
export default TM;













