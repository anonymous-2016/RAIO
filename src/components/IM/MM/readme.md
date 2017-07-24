

# textarea

https://ant.design/components/input-cn/#components-input-demo-autosize-textarea


https://ant.design/components/input-cn/#Input.TextArea

https://ant.design/components/input-cn/#Input.Group


https://ant.design/components/input-cn/#components-input-demo-group


# Select

https://ant.design/components/input-cn/#components-input-demo-group

https://ant.design/components/select-cn/

https://ant.design/components/select-cn/#API


# dropdown

https://ant.design/components/dropdown-cn/

https://ant.design/components/dropdown-cn/#components-dropdown-demo-dropdown-button

https://ant.design/components/dropdown-cn/#components-dropdown-demo-sub-menu



# form


https://ant.design/components/form-cn/#components-form-demo-advanced-search



import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;



 {/* Warning: `defaultValue` is invalid for `getFieldDecorator` will set `value`, please use `option.initialValue` instead. */}


https://ant.design/components/form-cn/#components-form-demo-register

initialValue: ['zhejiang', 'hangzhou', 'xihu'],

https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-参数


```jsx

<FormItem
    {...formItemLayout}
    label="产品名称"
    hasFeedback
    >
    {
        getFieldDecorator('productName', {
            initialValue: "Fans",
            rules: [
                {
                    required: true, 
                    message: 'Please input your 产品名称!'
                }
            ],
            initialValue: "Fans"
        })(
            <Select
                defaultValue="Fans"
                style={{ width: 150 }}
                placeholder="Select a terminal"
                >
                <Option value="金融终端">金融终端</Option>
                <Option value="Fans">Fans</Option>
                {/* <Option value="disabled" disabled>Disabled</Option> */}
            </Select>
        )
    }
</FormItem>

 defaultValue="Fans"

 initialValue: "Fans",

```





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




/* 

产品名称：金融终端/Fans
菜单版本:
类型:	
菜单名称：
显示状态:	是/否
样式:
查询	添加

                                            
    菜单树	名称	产品	功能	版本	类型	操作	移动		
                    关联			修改	上移 下移		
一级										
|  二级										
|   | 三级										
|   |  | 四级										
|   |  |  |	五级									
|   |  |  |										
|   |  |  |										
|   |  |  |										
|   |  | 四级										
|   | 三级										
|  二级										
一级										
|  二级										



Warning: `defaultValue` is invalid for `getFieldDecorator` will set `value`, please use `option.initialValue` instead.


编码 名称 英文名称 图标名称 收藏名称 关联功能 快捷键 类型 提示信息 样式 关联产品 显示
确定


功能编码 功能名称 功能命令 功能参数 
功能说明 关联模块 关联资源 掩码定义 

*/


```js

<Button
    onClick={() => this.showModal(true)}
    type='primary'
    >
    {
        this.props.children ? '修改' : 'opreate'
    }
</Button> 
<a
    href="#"
    onClick={
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            return this.showModal(true);
        }
    }
    type='primary'
    >
    {this.props.children}
</a>


const MMF = Form.create()(MMForm);

```

# form validation

```js

<FormItem
    {...formItemLayout}
    label="功能编码"
    hasFeedback
    >
    {
        getFieldDecorator('featuresEncode', {
            initialValue: 111,
            rules: [
                {
                    required: true, 
                    message: '请输入功能编码!'
                }
            ],
        })(
            <Input type="number" placeholder="功能编码" />
        )
    }
</FormItem>


```

# FormItem & Select `mode="multiple"`


```js

<FormItem
    {...formItemLayout}
    label="关联资源"
    hasFeedback
    >
    {
        getFieldDecorator('associateResources', {
            rules: [
                {
                    required: true, 
                    message: '请输入关联资源!'
                }
            ],
            initialValue: ['关联资源010', '关联资源020', '关联资源030']
        })(
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="Please select a 关联资源"
                onChange={handleChange}
                >
                {childs}
            </Select>
        )
    }
</FormItem>

// options data & fetch / promise

const childs = [];
for (let i = 10; i < 36; i++) {
    childs.push(
        <Option key={`0${i.toString()}`}>
            {`关联资源0${i.toString()}`}
        </Option>
    );
}

```


# babel-plugin-import

https://www.npmjs.com/package/babel-plugin-import

> You are using a whole package of antd, 
please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.





















