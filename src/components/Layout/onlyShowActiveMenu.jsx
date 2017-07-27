import React, {Component} from 'react';
import PropTypes from 'prop-types';


import './layout.css';

import {Layout, Menu, Icon, Button} from 'antd';

const {Header, Sider, Content} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


/*

// @import url(https://unpkg.com/antd/dist/antd.css);
// CSS Ok

// import 'https://unpkg.com/antd/dist/antd.css'; 
// JS Error

*/



// only show a menu
class OSAM extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: '1',
            openKeys: [],
            collapsed: false
        };
    }
    toggleCollapsed = () => {
        this.setState(
            (prevState, props) => {
                return {
                    collapsed: !this.state.collapsed
                };
            }
        );
    };
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState(
            (prevState, props) => {
                console.log('Clicked e.key: ', e.key);
                return {
                    current: e.key
                };
            }
        ); 
    };
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({
            openKeys: nextOpenKeys
        });
    };
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2']
        };
        return map[key] || [];
    };
    render() {
        return (
            <div>
                 <Layout>
                     <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        >
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            selectedKeys={[this.state.current]}
                            style={{ width: 240 }}
                            onOpenChange={this.onOpenChange}
                            onClick={this.handleClick}
                            >
                            <SubMenu 
                                key="sub1" 
                                title={
                                    <span>
                                        <Icon type="mail" /><span>Navigation One</span>
                                    </span>
                                }>
                                <MenuItem key="1">Option 1</MenuItem>
                                <MenuItem key="2">Option 2</MenuItem>
                                <MenuItem key="3">Option 3</MenuItem>
                                <MenuItem key="4">Option 4</MenuItem>
                            </SubMenu>
                            <SubMenu 
                                key="sub2" 
                                title={
                                    <span>
                                        <Icon type="appstore" /><span>Navigation Two</span>
                                    </span>
                                }>
                                <MenuItem key="5">Option 5</MenuItem>
                                <MenuItem key="6">Option 6</MenuItem>
                                <SubMenu key="sub3" title="Submenu">
                                    <MenuItem key="7">Option 7</MenuItem>
                                    <MenuItem key="8">Option 8</MenuItem>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu 
                                key="sub4" 
                                title={
                                    <span>
                                        <Icon type="setting" /><span>Navigation Three</span>
                                    </span>
                                }>
                                <MenuItem key="9">Option 9</MenuItem>
                                <MenuItem key="10">Option 10</MenuItem>
                                <MenuItem key="11">Option 11</MenuItem>
                                <MenuItem key="12">Option 12</MenuItem>
                            </SubMenu>
                            <SubMenu 
                                key="sub5" 
                                title={
                                    <span>
                                        <Icon type="appstore" /><span>Navigation Two</span>
                                    </span>
                                }>
                                <MenuItem key="13">Option 13</MenuItem>
                                <MenuItem key="14">Option 14</MenuItem>
                                <SubMenu key="sub6" title="Submenu">
                                    <MenuItem key="15">Option 15</MenuItem>
                                    <MenuItem key="16">Option 16</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Button
                                type="primary"
                                onClick={this.toggleCollapsed}
                                style={{ marginBottom: 16 }}
                                >
                                smg
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                        </Content>
                    </Layout>
                 </Layout>
            </div>
        );
    }
}

OSAM.propTypes = {

};

export {OSAM};
export default OSAM;

