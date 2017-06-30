import React, {Component} from 'react';

import {IndexComponents} from './IndexComponents';

import {AL} from '../Ant_Components/FixedSider';

import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;


class Item1 extends Component {
    render() {
        return (
            <div>
                <h1>用户查询</h1>
                {/*<IndexComponents />*/}
                {/*<AL />*/}
            </div>
        );
    }
}

/* input box*/

/*const InputBox = () => {
    return();

}


登陆名:
用户ID:
用户类型:
内部用户
激活状态:
是
手机号:
邮件:
用户姓名:
有效日期*/

export default Item1;