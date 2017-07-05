import React, {Component} from 'react';

import {Form, Icon, Input, Button} from 'antd';
import {DatePicker, TimePicker} from 'antd';
const {MonthPicker, RangePicker} = DatePicker;

// import moment from 'moment';

const FormItem = Form.Item;

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
    }
    state = {
        startValue: today
    };
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
        alert(event);
    };
    render() {
        // 解构赋值
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const textError = isFieldTouched('text') && getFieldError('text');
        const userTypeError = isFieldTouched('text') && getFieldError('text');
        //
        const phoneTypeError = isFieldTouched('text') && getFieldError('text');
        const emailTypeError = isFieldTouched('email') && getFieldError('email');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                    label="登录名"
                    >
                    {
                        getFieldDecorator('userName', {
                            rules: [{ required: false, message: '登录名' }],
                        })
                        (
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="登录名" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={textError ? 'error' : ''}
                    help={textError || ''}
                    label="用户ID"
                    style={{}}
                    >
                    {
                        getFieldDecorator('text', {
                            rules: [{ required: false, message: '用户ID' }],
                        })
                        (
                            <Input prefix={<Icon type="idcard" style={{ fontSize: 13 }} />} type="text" placeholder="用户ID" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={userTypeError ? 'error' : ''}
                    help={userTypeError || ''}
                    label="用户类型"
                    >
                    {
                        getFieldDecorator('text', {
                            rules: [{ required: false, message: '用户类型!' }],
                        })
                        (
                        <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} placeholder="用户类型" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={textError ? 'error' : ''}
                    help={textError || ''}
                    label="用户姓名"
                    style={{}}
                    >
                    {
                        getFieldDecorator('text', {
                            rules: [{ required: false, message: '用户姓名' }],
                        })
                        (
                            <Input prefix={<Icon type="user-add" style={{ fontSize: 13 }} />} type="text" placeholder="用户姓名" />
                        )
                    }
                </FormItem>
                <br/>
                <FormItem
                    validateStatus={phoneTypeError ? 'error' : ''}
                    help={phoneTypeError || ''}
                    label="手机号"
                    style={{}}
                    >
                    {
                        getFieldDecorator('number', {
                            rules: [{ required: false, message: '手机号' }],
                        })
                        (
                            <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} type="number" placeholder="手机号" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={emailTypeError ? 'error' : ''}
                    help={emailTypeError || ''}
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
                    validateStatus={textError ? 'error' : ''}
                    help={textError || ''}
                    label="激活状态"
                    style={{}}
                    >
                    {
                        getFieldDecorator('text', {
                            rules: [{ required: false, message: '激活状态' }],
                        })
                        (
                            <Input prefix={<Icon type="file-text" style={{ fontSize: 13 }} />} type="text" placeholder="激活状态" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={textError ? 'error' : ''}
                    help={textError || ''}
                    label="有效日期"
                    style={{}}
                    >
                    {
                        getFieldDecorator('text', {
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

/*

用户ID
用户姓名
登录名
手机号
邮箱
激活状态
有效日期	
用户类型:	内部用户

*/