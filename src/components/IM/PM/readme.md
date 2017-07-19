# Form & Modal



## Form 


https://ant.design/components/form-cn/#校验规则

https://github.com/yiminghe/async-validator#type


### Type

Indicates the type of validator to use. Recognised type values are:

```js

string: Must be of type string. This is the default type.
number: Must be of type number.
boolean: Must be of type boolean.
method: Must be of type function.
regexp: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
integer: Must be of type number and an integer.
float: Must be of type number and a floating point number.
array: Must be an array as determined by Array.isArray.
object: Must be of type object and not Array.isArray.
enum: Value must exist in the enum.
date: Value must be valid as determined by Date
url: Must be of type url.
hex: Must be of type hex.
email: Must be of type email.

```


```jsx

const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
const roleCodeError = isFieldTouched('roleCode') && getFieldError('roleCode');
const userCodeError = isFieldTouched('userCode') && getFieldError('userCode');
const loginNameError = isFieldTouched('loginName') && getFieldError('loginName');
const userNameError = isFieldTouched('userName') && getFieldError('userName');

<FormItem
    validateStatus={roleCodeError ? 'error' : ''}
    help={roleCodeError || ''}
    label="角色编码"
    >
    {
        getFieldDecorator('roleCode', {
            rules: [
                {
                    required: false,
                    message: '角色编码'
                }
            ],
        })
        (
            <Input 
                type="number" 
                min="1000" 
                prefix={<Icon type="key" style={{ fontSize: 13 }} />}
                placeholder="角色编码"
            />
        )
    }
</FormItem>


```

### duplication & redundancy

> `rules: [{type: 'number'}]` & `<Input type="number"/>`

```jsx

<FormItem
    {...formItemLayout}
    label="产品编号"
    hasFeedback
    >
    {
        getFieldDecorator('productNum', {
            rules: [
                {
                    type: 'number', 
                    message: 'The input is not valid 产品编号!',
                }, 
                {
                    required: true, 
                    message: 'Please input your 产品编号!',
                }
            ],
        })(
            <Input type="number"/>
        )
    }
</FormItem>

```

# jira

https://www.atlassian.com/software/jira

https://github.com/yiminghe/async-validator/issues/57

https://www.atlassian.com/software/jira/pricing?tab=self-hosted

https://www.atlassian.com/software/jira/download

# npx

https://github.com/zkat/npx

https://github.com/zkat/npx/blob/latest/Makefile





# Flex & Grid

https://ant.design/components/grid-cn/#components-grid-demo-reponsive



span pull push offset order 属性可以通过内嵌到 xs sm md lg xl 属性中来使用。

其中 xs={6} 相当于 xs={{ span: 6 }}。




确定

产品编号 产品名称 产品简称 产品介绍



```jsx
const IconStyles = {
    css1: {
        fontSize: 15,
        color: '#0f0',
        background: '#000'
    },
    css2: {
        fontSize: 13,
        color: '#000',
        background: '#f0f'
    }
};

```


```js

const style1 = `
    color: red;
    font-size: 16px;
`;
const style2 = `
    color: #f0f;
    font-size: 16px;
`;
const clickOK = (record) => {
    return record.pid = "new pid";
}


const styles = {
    css1: `
        color: red;
        font-size: 16px;
    `,
    css2: `
        color: #0f0;
        font-size: 32px;
    `,
    css3: `
        color: rgba(255, 0, 255, 0.7);
        font-size: 16px;
    `
};

console.log(`%c color demo`, styles.css1, this.location.href);
console.log(`%c color demo`, styles.css2, this.location.href);
console.log(`%c color demo`, styles.css3, this.location.href);


console.log(`%c color demo`, styles.css3, `%c ${this.location.href}`);
console.log(`%c color demo`, styles.css3, `%c ${this.location.href}`, styles.css2);
// %c %c 一一对应的占位符！
console.log(`%c color demo %c ${this.location.href}`, styles.css3, styles.css2);
```



```js

const handleSearch = (value) => {
    console.log(`selected ${value}`);
};
const handleAdd = (value) => {
    console.log(`selected ${value}`);
};

```