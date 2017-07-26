import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/antd.css';
// @import 'antd/dist/antd.css';
// import '../../node_modules/antd/dist/antd.css';
import QueueAnim from 'rc-queue-anim';

import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;


class FUFM extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false,
            menuwidth: 240,
            transition: 'all 0.5s ease-out',
            marginRight: 8,
            paddingLeft: 24
        };
    }
    toggleCollapsed = () => {
        this.setState(
            (prevState, props) => {
                return {
                    collapsed: !this.state.collapsed,/* 
                    menuwidth: this.state.menuwidth == 240 ? 60 : 240 ,
                    transition: this.state.transition == 'all 0.5s ease-out' ? 'all 0.5s ease-in' : 'all 0.5s ease-out',
                    marginRight: this.state.marginRight == 8 ? 30 : 8,
                    paddingLeft: this.state.paddingLeft == 24 ? 8 : 24 */
                };
            }
        );
    };
    render() {
        /* const paddingLeft = this.state.paddingLeft;
        const marginRight = this.state.marginRight;
        const collapded = this.state.collapsed; */
        const styleObj = {
            paddingLeft: this.state.paddingLeft,
            marginRight: this.state.marginRight,
            collapded: this.state.collapsed
        };
        return (
            <div style={{ width: this.state.menuwidth, transition: this.state.transition }}>
                <QueueAnim delay={200} type='top'>
                    <Button
                        type="primary"
                        onClick={() => this.toggleCollapsed()}
                        style={{ marginBottom: 16 }}
                        >
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        collapsible
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        >
                        {/* style={{marginRight: marginRight, paddingLeft :paddingLeft}} */}
                        <Menu.Item key="1"  style={{paddingLeft: styleObj.paddingLeft}}>
                            <Icon type="pie-chart" style={{...styleObj}}/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" style={{...styleObj}}/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" style={{...styleObj}}/>
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" style={{...styleObj}}/>
                                    <span>Navigation One</span>
                                </span>
                            }>
                            <Menu.Item key="5">
                                <Icon type="mail" style={{...styleObj, paddingLeft: 20}}/>
                                Option 5
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="mail" style={{...styleObj, paddingLeft: 20}}/>
                                Option 6
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="mail" style={{...styleObj, paddingLeft: 20}}/>
                                Option 7
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="mail" style={{...styleObj, paddingLeft: 20}}/>
                                Option 8
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" style={{...styleObj}}/>
                                    <span>Navigation Two</span>
                                </span>
                            }>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                                <SubMenu key="sub4" title="Submenu">
                                    <Menu.Item key="13">Option 13</Menu.Item>
                                    <Menu.Item key="14">Option 14</Menu.Item>
                                    <SubMenu key="sub5" title="Submenu">
                                        <Menu.Item key="15">Option 15</Menu.Item>
                                        <Menu.Item key="16">Option 16</Menu.Item>
                                        <SubMenu key="sub6" title="Submenu">
                                            <Menu.Item key="17">Option 17</Menu.Item>
                                            <Menu.Item key="18">Option 18</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </QueueAnim>
            </div>
        );
    }
}

FUFM.propTypes = {

};

export {FUFM};
export default FUFM;