import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Checkbox
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


/**
 * 2017.08.09
 * xgqfrms
 * 
 * @class SearchForm
 * @extends {Component}
 */

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                try {
                    if (!err) {
                        const debug = true;
                        if(debug ? debug : true){
                            console.log('Received values of form: ', values);
                        }
                        // Object {prefix: "keywords", searchkey: "xxxx yyyyy xxxxx"}
                        // Object {prefix: "reportname", searchkey: "xxxx yyyyy xxxxx"}
                        // object => JSON
                        // fetch data
                        let obj = values,
                            url = "";
                        let key = obj.prefix,
                            value = obj.searchkey;
                        if(value !== undefined){
                            if(debug ? debug : true){
                                console.log(`value = `, value.toString());
                            }
                        }else{
                            value = "undefined";
                            if(debug ? debug : true){
                                console.log(`new value = `, value.toString());
                                console.log(`new value.length = `, value.length);
                            }
                        }
                        if(debug ? debug : true){
                            console.log(`key = `, key);
                            console.log(`value = `, value);
                        }
                        if((value !== "undefined" && value.length > 0)){
                            url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","${key}":"${value}"}`;
                        }else{
                            url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
                        }
                        if(debug ? debug : true){
                            console.log(`fetch url = `, url);
                        }
                        // fetch data & routes = data;
                        let data = [ 
                            {
                                "name" : "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
                                "description" : "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
                                "dependtables" : [ "SecuMain", "MF_NetValue" ]
                            }
                        ];
                        console.log(`this.props.xyzSearch = `, this.props.xyzSearch);
                        // this.props.xyzSearch(data);
                        this.props.xyzSearch();
                    }
                } catch (error) {
                    throw new Error(error.message, error.name, error.fileName, error.lineNumber, error.columnNumber);
                    // new Error([message[, fileName[, lineNumber]]])
                }
            /*
                try {
                    throw new Error('Whoops!');
                } catch (e) {
                    const debug = true;
                    // debug module
                    if(debug){
                        console.log(`error.message : `, e.message);
                        console.log(`error.name : `, e.name);
                        console.log(`error.fileName : `, e.fileName);
                        console.log(`error.lineNumber : `, e.lineNumber);
                        console.log(`error.columnNumber : `, e.columnNumber);
                    }
                }
            */
            }
        );
    }
    /* 
    <input 
        type="text" 
        id="textfiled" 
        value="多个关键字之间用 空格 分割" 
        onfocus="javascript:if(this.value=='多个关键字之间用 空格 分割')this.value=''" 
        onblur="if(this.value =='') this.value = '多个关键字之间用 空格 分割'" ;="">
     */
    render() {
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator(
            'prefix', 
            {
                initialValue: "KeyWord",
                message: "多个关键字之间用 空格 分割"
            }
        )(
            <Select style={{ width: 130 }}>
                <Option value="KeyWord">关键字 查询</Option>
                <Option value="ReportName">ReportName 查询</Option>
            </Select>
        );
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                {/* 
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email', 
                                        message: 'The input is not valid E-mail!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your E-mail!',
                                    }
                                ]
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                */}
                    <FormItem
                        {...formItemLayout}
                        label="查询"
                        >
                        {
                            getFieldDecorator('searchkey', {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Please input your 查询关键字!'
                                    }
                                ]
                        })(
                            <Input
                                addonBefore={prefixSelector}
                                style={{ width: '100%' }}
                            />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button
                            type="primary"
                            htmlType="submit">
                            查询
                        </Button>
                    </FormItem>
                {/* 
                    <FormItem
                        {...tailFormItemLayout}
                        style={{ marginBottom: 8 }}>
                        {
                            getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                                initialValue: false
                            })(
                                <Checkbox>
                                    I have read the <a href="#">agreement</a>
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>
                                Remember me
                            </Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem> 
                */}
                </Form>
            </div>
        );
    }
}

SearchForm.propTypes = {
    xyzSearch: PropTypes.func.isRequired
};

const SF = Form.create()(SearchForm);

export {SF};
export default SF;


/* 

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}


*/




