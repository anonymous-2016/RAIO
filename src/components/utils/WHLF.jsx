import React, {Component} from 'react';

import {Select, Form, Icon, Input, Button, DatePicker, TimePicker} from 'antd';


const {MonthPicker, RangePicker} = DatePicker;

// import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

const hasErrors = (fieldsError) => {
    // 测试数组中的某些元素是否通过由提供的函数实现的测试。
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const today = new Date().toLocaleString();

class HLF extends Component {
    constructor(props) {
        super(props);
        // this.onChange = this.onChange.bind(this);
        // this.onStartChange = this.onStartChange.bind(this);
        this.state = {
            startValue: today
        };
    }
    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };
    onStartChange = (value) => {
        console.log('typeof DatePicker value = \n', typeof(value));
        console.log('DatePicker value = \n', value);
        // value = value._d;
        this.onChange('startValue', value);
        console.log('DatePicker new value = \n', value);
    };
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    clickSearchHandler = (e) => {
        e.preventDefault();
        console.log('Received values of form: ', e);
        let event = e;
        // alert(event);
        this.props.onSearch();
    };
    render() {
        // 解构赋值
        // alert(this.props.form);
        console.log(`this.props.form`, this.props.form);
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const loginNameError = isFieldTouched('loginName') && getFieldError('loginName');
        const userIdError = isFieldTouched('userId') && getFieldError('userId');
        // const userTypeError = isFieldTouched('userType') && getFieldError('userType');
        const userNameError = isFieldTouched('userName') && getFieldError('userName');

        const phoneNumberError = isFieldTouched('phoneNumber') && getFieldError('phoneNumber');
        const emailError = isFieldTouched('email') && getFieldError('email');
        // const activateStateError = isFieldTouched('activateState') && getFieldError('activateState');
        const validDateError = isFieldTouched('validDate') && getFieldError('validDate');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={loginNameError ? 'error' : ''}
                    help={loginNameError || ''}
                    label="登录名"
                    >
                    {
                        getFieldDecorator('loginName', {
                            rules: [{ required: false, message: '登录名' }],
                        })
                        (
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text" placeholder="登录名" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={userIdError ? 'error' : ''}
                    help={userIdError || ''}
                    label="用户ID"
                    style={{}}
                    >
                    {
                        getFieldDecorator('userId', {
                            rules: [{ required: false, message: '用户ID' }],
                        })
                        (
                            <Input prefix={<Icon type="idcard" style={{ fontSize: 13 }} />} type="number" placeholder="用户ID" />
                        )
                    }
                </FormItem>
                <FormItem
                    label="用户类型"
                    >
                    {/* validateStatus={userTypeError ? 'error' : ''}
                    help={userTypeError || ''} */}
                    {/*  <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} placeholder="用户类型" /> */}
                    {
                        <Select
                            defaultValue="innerUser"
                            style={{width: 163}}
                            placeholder="用户类型"
                            onChange={(e) => {
                                console.log(`e`, e);
                                {/* console.log(`e.value`, e.value);
                                console.log(`e.innerText`, e.innerText); */}
                            }}>
                            <Option value="innerUser">内部用户</Option>
                            <Option value="outerUser">外部用户</Option>
                        </Select>
                    }
                </FormItem>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                    label="用户姓名"
                    style={{}}
                    >
                    {
                        getFieldDecorator('userName', {
                            rules: [{ required: false, message: '用户姓名' }],
                        })
                        (
                            <Input prefix={<Icon type="user-add" style={{ fontSize: 13 }} />} type="text" placeholder="用户姓名" />
                        )
                    }
                </FormItem>
                <br/>
                <FormItem
                    validateStatus={phoneNumberError ? 'error' : ''}
                    help={phoneNumberError || ''}
                    label="手机号"
                    style={{}}
                    >
                    {
                        getFieldDecorator('phoneNumber', {
                            rules: [{ required: false, message: '手机号' }],
                        })
                        (
                            <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} type="tel" placeholder="手机号" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}
                    label={<span className="left-spaces">邮箱</span>}
                    style={{}}
                    >
                    {
                        getFieldDecorator('email', {
                            rules: [{ required: false, message: '邮箱' }],
                        })
                        (
                            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email" placeholder="邮箱" />
                        )
                    }
                </FormItem>
                <FormItem
                    label="激活状态"
                    >
                    {/* validateStatus={activateStateError ? 'error' : ''}
                    help={activateStateError || ''} */}
                     {
                        <Select
                            defaultValue="yes"
                            style={{width: 163}}
                            placeholder="激活状态"
                            onChange={(e) => {
                                console.log(`e`, e);
                                {/* console.log(`e.value`, e.value);
                                console.log(`e.innerText`, e.innerText); */}
                            }}
                            >
                            <Option key="yes" value="yes">是</Option>
                            <Option key="no" value="no">否</Option>
                        </Select>
                    }
                    {/* <Input prefix={<Icon type="file-text" style={{ fontSize: 13 }} />} type="text" placeholder="激活状态" /> */}
                    {/* <Icon type="file-text" style={{ fontSize: 13 }} /> */}
                </FormItem>
                <FormItem
                    validateStatus={validDateError ? 'error' : ''}
                    help={validDateError || ''}
                    label="有效日期"
                    style={{}}
                    >
                    {
                        getFieldDecorator('validDate', {
                            rules: [{ required: false, message: '有效日期' }],
                        })
                        (
                            <div>
                                <RangePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    onChange={(e) => this.onStartChange(e)}
                                    />
                            </div>
                        )
                    }
                </FormItem>
                <span className="search-spaces"/>
                <FormItem>
                    <Button
                        icon="search"
                        type="primary"
                        htmlType="submit"
                        id="user-check-search"
                        onClick={this.clickSearchHandler}
                        >
                        查询
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WHLF = Form.create({})(HLF);

export {WHLF};

export default WHLF;

