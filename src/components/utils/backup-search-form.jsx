import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './WHLF.css';

import {
    Select,
    Form,
    Icon,
    Input,
    Button,
    DatePicker,
    TimePicker
} from 'antd';

const {MonthPicker, RangePicker} = DatePicker;


// import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

const hasErrors = (fieldsError) => {
    // 测试数组中的某些元素是否通过由提供的函数实现的测试。
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const today = new Date().toLocaleString();

/* function hasErrors(fieldsError) {
    return(
        Object
        .keys(fieldsError)
        .some(
            (field) => (fieldsError[field])
        )
    );
} */


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
        // e.stopPropagation();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onSearch(values);
            }
            else{
                // pass values to parent component
                // this.props.onSearch(values);
                throw new Error(`Whoops!, Some Error Occurred!`);
                /* 
                    try{
                        // fetch
                    }catch(e){
                        // throw new Error()
                    }
                */
            }
        });
    };
    clickSearchHandler = (e) => {
        e.preventDefault();
        console.log('Received values of form: ', e);
        let event = e;
        // alert(event);
        // this.props.form.validateFields((err, values) => values);
        // this.props.onSearch(values);
    };
    render() {
        // 解构赋值
        // alert(this.props.form);
        const form = this.props.form;
        console.log(`this.props.form`, this.props.form);
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = form;
        // Only show error after a field is touched.
        const loginNameError = isFieldTouched('lname') && getFieldError('lname');
        const userIdError = isFieldTouched('uid') && getFieldError('uid');
        const userTypeError = isFieldTouched('utype') && getFieldError('utype');
        const userNameError = isFieldTouched('uname') && getFieldError('uname');
        const phoneNumberError = isFieldTouched('pnum') && getFieldError('pnum');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const activateStateError = isFieldTouched('activation') && getFieldError('activation');
        const validDateError = isFieldTouched('vdate') && getFieldError('vdate');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={loginNameError ? 'error' : ''}
                    help={loginNameError || ''}
                    label="登录名"
                    hasFeedback
                    >
                    {
                        getFieldDecorator('lname', {
                            rules: [
                                {
                                    required: false,
                                    message: '登录名'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                type="text"
                                placeholder="登录名"
                            />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={userIdError ? 'error' : ''}
                    help={userIdError || ''}
                    label="用户ID"
                    hasFeedback
                    >
                    {
                        getFieldDecorator('uid', {
                            rules: [
                                {
                                    required: false,
                                    message: '用户ID'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="idcard" style={{ fontSize: 13 }} />}
                                type="number"
                                placeholder="用户ID"
                            />
                        )
                    }
                </FormItem>
                <FormItem
                    label="用户类型"
                    validateStatus={userTypeError ? 'error' : ''}
                    help={userTypeError || ''}
                    hasFeedback
                    >
                    {
                        getFieldDecorator('utype', {
                            rules: [
                                {
                                    required: false,
                                    message: '用户类型'
                                },
                            ],
                            initialValue: ""
                        })(
                            <Select 
                                placeholder="用户类型" 
                                style={{minWidth: 200}}
                                onChange={(e) => {
                                    console.log(`用户类型 e`, e);
                                    console.log(`e.value`, e.value);
                                    console.log(`e.innerText`, e.innerText);
                                }}>
                                <Option value="innerUser">内部用户</Option>
                                <Option value="outerUser">外部用户</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                    label="用户姓名"
                    hasFeedback
                    >
                    {
                        getFieldDecorator('uname', {
                            rules: [
                                {
                                    required: false, 
                                    message: '用户姓名'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user-add" style={{ fontSize: 13 }} />}
                                type="text"
                                placeholder="用户姓名"
                            />
                        )
                    }
                </FormItem>
                <br/>
                <FormItem
                    validateStatus={phoneNumberError ? 'error' : ''}
                    help={phoneNumberError || ''}
                    label="手机号"
                    hasFeedback
                    >
                    {
                        getFieldDecorator('pnum', {
                            rules: [
                                {
                                    required: false,
                                    message: '手机号'
                                }
                            ],
                        })(
                            <Input 
                                prefix={<Icon type="phone" 
                                style={{ fontSize: 13 }} />} 
                                type="tel" placeholder="手机号" 
                            />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}
                    label={<span className="left-spaces">邮箱</span>}
                    hasFeedback
                    >
                    {
                        getFieldDecorator('email', {
                            rules: [
                                {
                                    required: false,
                                    message: '邮箱'
                                }
                            ],
                        })(
                            <Input 
                                prefix={<Icon type="mail" style={{ fontSize: 13 }} />} 
                                type="email" 
                                placeholder="邮箱"
                            />
                        )
                    }
                </FormItem>
                <FormItem
                    label="激活状态"
                    validateStatus={activateStateError ? 'error' : ''}
                    help={activateStateError || ''}
                    hasFeedback
                    >
                    {
                        getFieldDecorator('activation', {
                            rules: [
                                {
                                    required: false,
                                    message: '激活状态'
                                },
                            ],
                            initialValue: ""
                        })(
                            <Select 
                                placeholder="激活状态" 
                                style={{width: 163}}
                                onChange={(e) => {
                                    console.log(`激活状态 e`, e);
                                    console.log(`e.value`, e.value);
                                    console.log(`e.innerText`, e.innerText);
                                }}>
                                <Option key="yes" value="yes">是</Option>
                                <Option key="no" value="no">否</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={validDateError ? 'error' : ''}
                    help={validDateError || ''}
                    label="有效日期"
                    hasFeedback
                    >
                    {
                        getFieldDecorator('vdate', {
                            rules: [
                                {
                                    required: false,
                                    message: '有效日期'
                                }
                            ],
                        })(
                            <div>
                                <RangePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    onChange={(e) => this.onStartChange(e)}
                                    className="datePickerStyle"
                                />
                            </div>
                        )
                    }
                </FormItem>
                <br/>
                <span className="search-spaces"/>
                <FormItem>
                    <Button
                        icon="search"
                        type="primary"
                        htmlType="submit"
                        id="user-check-search"
                        >
                        查询
                        {/* onClick={(e) => this.clickSearchHandler(e)} */}
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

HLF.propTypes = {
    // form: PropTypes.array.isRequired
    /* form: PropTypes.object.isRequired */
    onSearch: PropTypes.func.isRequired
};

const WHLF = Form.create({})(HLF);

export {WHLF};
export default WHLF;

