# Ant



```jsx

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';




import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown, Select} from 'antd';

const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;



// .map()

const menu = (
    <Menu>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">1st</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">2nd</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">3rd</a>
        </Menu.Item>
    </Menu>
);


const newdatas = (datas) => {
    datas.map(
        (data) => {
            return(
                <li key={data.key}>
                    {data.text}
                </li>
            );
        }
    );
} 

RolesManagement.defaultProps = {
    data: [{
        "key": 3,
        "rid": 666,
        "rname": "胡彦斌",
        "uid": 2048,
        "uname": "彦斌",
        "ulname": "西湖 湖底公园",
        "edit": ""
    }]
};

RolesManagement.propTypes = {
    data: PropTypes.array.isRequired
};

// Form.create({})(???)

const RoleManagement = Form.create({})(RolesManagement);



```



角色编码:			查询	

角色编码		角色名称		关联用户	
                        
6012			研报权限		添加用户	



```jsx

<Button
    type="primary"
    onClick={() => this.setModalVisible(true)}
    >
    {this.props.children}
</Button>

<Button
    type="primary"
    onClick={
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            return(
                this.setModalVisible(true)
            );
        }
    }
    >
    {this.props.children}
</Button>

<FormItem>
    {/* value={setFieldsValue(record.pname)} */}
    {/* must keep `input type` same  */}
</FormItem>


const MenuItem = Menu.Item;


const menu = (
    <Menu>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">1st</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">2nd</a>
        </Menu.Item>
        <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.xgqfrms.xyz/">3rd</a>
        </Menu.Item>
    </Menu>
);
```

# key

```js

const newdatas = (datas) => {
    datas.map(
        (data, index) => {
            return(
                <li key={data.key ? data.key : index}>
                    {data.roleEncode}
                    {data.roleName}
                </li>
            );
        }
    );
};


// back end key
const datas = [
    {
        "key":1,
        "rid":666,
        "rname":"胡彦斌",
        "uid":2048,
        "uname":"彦斌",
        "ulname":"西湖 湖底公园"
    },
    {
        "key":2,
        "rid":666,
        "rname":"胡彦斌",
        "uid":2048,
        "uname":"彦斌",
        "ulname":"西湖 湖底公园"
    }
];


// front end key
const datas = [
    {
        "rid":333,
        "rname":"胡彦斌",
        "uid":1024,
        "uname":"彦斌",
        "ulname":"西湖 湖底公园"
    },
    {
        "rid":666,
        "rname":"胡彦斌",
        "uid":2048,
        "uname":"彦斌",
        "ulname":"西湖 湖底公园"
    }
];

const newdatas = (datas) => {
    let newdatas = datas.map(
        (data, index) => {
            data.key = `keyID_${index}`;
            return data;
        }
    );
    return newdatas;
};

newdatas(datas);





const newDatas = datas.map(
    (data, index) => {
        console.log(`data`, data);
        console.log(`index`, index);
        data.key = `keyID_${index}`;
        return data;
    }
);

```



```js

/* 

import * as RM from '../RM';

*/

/* export {RoleTable};
export default RoleTable; */

/* 
const newdatas = (datas) => {
    datas.map(
        (data, index) => {
            return(
                <li key={data.key ? data.key : index}>
                    {data.roleEncode}
                    {data.roleName}
                </li>
            );
        }
    );
};

*/


// ANT
import {Table, Form, Icon, Input, Button, Modal, Menu, Dropdown, Select} from 'antd';

const confirm = Modal.confirm;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const Option = Select.Option;




componentDidMount() {
    // To disabled submit button at the beginning.
    const form = this.props.form;
    this.props.form.validateFields();
    setTimeout(() => {
            fetch('https://cdn.xgqfrms.xyz/json/roles.json')
        .then((res) => {
            console.log(`res `, res);
            let json = res.json();
            console.log(`json `, json);
            return json;
        })
        .then((data) => {
            this.setState(
                {
                    data: data
                }
            );
        });
    }, 1000);
}

```





