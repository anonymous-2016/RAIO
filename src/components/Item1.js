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
                <AL />
                al
            </div>
        );
    }
}


export default Item1;