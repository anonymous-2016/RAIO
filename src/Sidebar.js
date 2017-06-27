import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Item1 from './components/Item1.js';
import Item2 from './components/Item2.js';
import Item3 from './components/Item3.js';


import {Menu, Icon} from 'antd';

import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;




const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>item1</div>,
        main: () => <div><Item1 /></div>
    },
    {
        path: '/item2',
        sidebar: () => <div>item2</div>,
        main: () => <div><Item2 /></div>
    },
    {
        path: '/item3',
        sidebar: () => <div>item3</div>,
        main: () => <div><Item3 /></div>
    }
];

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            current: '1'
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    };
    handleMenuClick(e) {
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Router>
                <div>
                    {/*<div style={{ display: 'flex' }}>
                        <div style={{
                            padding: '10px',
                            width: '30%',
                            background: '#f0f0f0'
                        }}>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li><Link to="/">item1</Link></li>
                                <li><Link to="/item2">item2</Link></li>
                                <li><Link to="/item3">item3</Link></li>
                            </ul>
                        </div>
                    </div>*/}
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleMenuClick}
                        style={{ width: 240 }}
                        defaultOpenKeys={['sub1']}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu 
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1">
                                <Link to="/">item1</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/item2">item2</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/item3">item3</Link>
                            </Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div>
                        <div style={{ flex: 1, padding: '10px' }}>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


export default Sidebar;
