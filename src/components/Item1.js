import React, {Component} from 'react';

import {IndexComponents} from './IndexComponents';

import {AL} from '../Ant_Components/FixedSider';

import {WHLF} from './utils/WHLF';
import './utils/WHLF.css';

import {AT} from './utils/AT';

import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;


class Item1 extends Component {
    render() {
        return (
            <div>
                <a href="#用户查询">用户查询</a>
                {/*<IndexComponents />*/}
                {/*<AL />*/}
                <div className="user-search">
                    <WHLF />
                </div>
                <div>
                    <AT />
                </div>
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