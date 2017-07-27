import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import XFooter from './Footer';


import './contentbox.css';

import {Layout, Menu, Icon} from 'antd';
import {Button} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;



const btnStyles = {
    border: "2px solid #ccc",
    borderRight: "2px solid #bbb",
    color: "#0f0",
    fontSize: "18px",
    height: "50px",
    lineHeight: "50px",
    padding: "auto 1px !important"
};

class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            current: '1',
            openKeys: [],
            message: props.message,
            styles: props.styles,
            Any: props.any,
            width: props.width,
            collapsed: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.stateHandleClick = this.stateHandleClick.bind(this);
    }
/*     handleClick(e) {
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        console.log('click ', e);
        this.setState({
            current: e.key,
            collapsed: !this.state.collapsed
        });
    } */
    addClick = (prevState, props) => {
        this.setState({
            // prevState, props
            collapsed: !this.state.collapsed
        });
    }
    stateHandleClick(e) {
        // (prevState, props)
        console.log('click ', e);
        this.setState({
            current: e.key,
            collapsed: !this.state.collapsed
        });
    }
    // 只展开当前父级菜单 
    // 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState(
            (prevState, props) => {
                console.log('Clicked e.key: ', e.key);
                return {
                    current: e.key,
                    collapsed: !this.state.collapsed
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
        // let routes = [this.props.routes];
        return (
            <Router>
                <div style={{display: 'flex'}} >
                    <div 
                        style={{
                            minHeight: '800px',
                            maxHeight: '1000px',
                            overflow: 'hidden',
                            background: '#333'
                        }}
                        className={this.props.styles ? this.props.styles : 'null'}
                        >
                        <Menu
                            theme={this.state.theme}
                            onClick={this.handleClick}
                            style={{ width: 240 }}
                            defaultOpenKeys={['sub0']}
                            selectedKeys={[this.state.current]}
                            onOpenChange={this.onOpenChange}
                            mode="inline"
                            >
                            <SubMenu 
                                    key="sub0"
                                    title={
                                        <span>
                                            <Icon type="area-chart" style={{fontSize: 18, color: '#f0f'}} className=""/>
                                            <span
                                                style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}
                                                className=""
                                                >
                                                just for test
                                            </span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="1">
                                    <Link to="/test">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#fff'}}/>
                                        test
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu 
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="area-chart" style={{fontSize: 18, color: '#0f0'}} className=""/>
                                            <span style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}} className="">用户管理</span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="1">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        用户查询
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        登录统计
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/item1">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        行为分析
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu 
                                    key="sub2" 
                                    title={
                                        <span>
                                            <Icon type="setting" style={{fontSize: 18, color: '#fff'}}/>
                                            <span>权限管理</span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="4">
                                    <Link to="/amrm">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        角色管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        绑定设置</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        限制设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户权限设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户限制
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/item2">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        角色权限设置
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu 
                                key="sub3" 
                                title={
                                    <span>
                                        <Icon type="idcard" style={{fontSize: 18, color: '#0f0'}}/>
                                        <span>信息管理</span>
                                    </span>
                                }
                                >
                                <Menu.Item key="10">
                                    <Link to="/impm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        产品管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Link to="/imnmm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        模块管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Link to="/imlm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        类库管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="13">
                                    <Link to="/imfm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        功能管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <Link to="/imnrm">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        资源管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="15">
                                    <Link to="/immm">
                                    <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                    菜单管理</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <Button
                         icon="swap"
                         style={btnStyles}
                         onClick={this.props.ClickHandler}
                         id="btn_style"
                         >
                    </Button>
                    {/*menu-fold menu-unfold*/}
                    <div style={{flex: 1, padding: '10px', overflow: 'auto'}}>
                        {
                            this.props.routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))
                        }
                        <XFooter />
                    </div>
                </div>
            </Router>
        );
    }
}

ContentBox.propTypes = {
    message: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    width: PropTypes.string,
    any: PropTypes.any,
    routes: PropTypes.array,
    ClickHandler: PropTypes.function
};


export default ContentBox;


