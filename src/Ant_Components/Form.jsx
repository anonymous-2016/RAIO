import React, {Component} from 'react';

import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

const hasErrors = (fieldsError) => {
    // 测试数组中的某些元素是否通过由提供的函数实现的测试。
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

class HorizontalLoginForm extends React.Component {
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
    }
    render() {
        // 解构赋值
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                    >
                    {
                        getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        }
                        )
                        (
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                    >
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })
                        (
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                        >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WHLF = Form.create({})(HorizontalLoginForm);

export {WHLF};

export default WHLF;

/*
ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 Form 即可。
1.7.0 之后无需设置

object	无


this.props.form



https://react-component.github.io/form/

React High Order Form Component







*/











/*



https://ant.design/components/form-cn/#API


layout	表单布局(2.8 之后支持)	'horizontal'|'vertical'|'inline'

onSubmit	数据验证成功后回调事件	Function(e:Event)	

hideRequiredMark	隐藏所有表单项的必选标记	Boolean	false


form 经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 Form 即可。

https://react-component.github.io/form/


https://github.com/react-component

https://facebook.github.io/react/docs/handling-events.html


*/









