import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Item1 from './components/Item1.js';
import Item2 from './components/Item2.js';
import Item3 from './components/Item3.js';



import './contentbox.css';

import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content, Footer, Sider} = Layout;
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



class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            current: '1',
            message: props.message,
            styles: props.styles,
            Any: props.any,
            width: props.width,
            routes: routes,
            ClickHandler: props.ClickHandler
        };
        this.handleClick = this.handleClick.bind(this);
        this.stateHandleClick = this.stateHandleClick.bind(this);
    }
    handleClick(e) {
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    addClick = (prevState, props) => {
        this.setState({
            // prevState, props
        });
    }
    stateHandleClick(e) {
        // (prevState, props)
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }
    render() {
        // let routes = [this.props.routes];
        return (
            <Router>
                <div style={{display: 'flex'}} >
                    <div style={{
                            minHeight: '800px',
                            maxHeight: '1000px',
                            overflowX: 'hidden',
                            overflowY: 'scroll',
                            background: '#333'
                        }}
                        className="old-sidebar-btn"
                        className={this.props.styles}
                        >
                        <Menu
                                theme={this.state.theme}
                                onClick={this.handleClick}
                                style={{ width: 240 }}
                                defaultOpenKeys={['sub1']}
                                selectedKeys={[this.state.current]}
                                mode="inline"
                            >
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
                                    <Link to="/">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        用户查询
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/item2">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#ff0'}}/>
                                        登录统计
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/item3">
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
                                    <Link to="/item3">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        角色管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/item3">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        绑定设置</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/item3">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        限制设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/item3">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户权限设置
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/item3">
                                        <Icon type="setting" style={{fontSize: 12, color: '#f0f'}}/>
                                        用户限制
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/item3">
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
                                    <Link to="/item3">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        产品管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Link to="/item3">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        模块管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Link to="/item3">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        类库管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="13">
                                    <Link to="/item3">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        功能管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <Link to="/item3">
                                        <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                        资源管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="15">
                                    <Link to="/item3">
                                    <Icon type="idcard" style={{fontSize: 12, color: '#fff'}}/>
                                    菜单管理</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <button 
                        onClick={this.props.ClickHandler}
                        style={{minWidth: "50px", height: "auto", border: "1px solid #0f0", cursor: "pointer"}}
                        >
                        props
                    </button>
                    <div style={{ flex: 1, padding: '10px', overflow: 'auto'}}>
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
            </Router>
        );
    }
};

export default ContentBox;


