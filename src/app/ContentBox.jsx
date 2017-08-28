import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.06.22
 * 
 * @class ContentBox
 * @extends {Component}
 */

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// utils
import {debug} from './debug.jsx';

// components
import XFooter from './Footer';

// css
import './contentbox.css';

// libs
import {Menu, Icon} from 'antd';
import {Button} from 'antd';
import 'antd/dist/antd.css';
// import {Layout} from 'antd';
// const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


// style (css in js)
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
        /* 
            this.handleClick = this.handleClick.bind(this);
            this.stateHandleClick = this.stateHandleClick.bind(this); 
        */
    }
/*
    handleClick = (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        console.log('click ', e);
        this.setState({
            current: e.key,
            collapsed: !this.state.collapsed
        });
    };
*/
    addClick = (prevState, props) => {
        this.setState({
            // prevState, props
            collapsed: !this.state.collapsed
        });
    };
    stateHandleClick = (e) => {
        // (prevState, props)
        if (debug) {
            console.log('click e = ', e.target.value);
        }
        this.setState({
            current: e.key,
            collapsed: !this.state.collapsed
        });
    };
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
            sub3: ['sub2'],
            sub5: ['sub6','sub7']
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
                            background: '#333',
                            display: "none",
                            width: 0
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
                                                CRM API工具
                                            </span>
                                        </span>
                                    }
                                >
                                <Menu.Item key="1">
                                    <Link to="/api">
                                        <Icon type="area-chart" style={{fontSize: 12, color: '#fff'}}/>
                                        API 查询工具
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            {/* cb backup */}
                        </Menu>
                    </div>
                    {/*menu-fold menu-unfold*/}
                    <div style={{
                        flex: 1,
                        padding: '10px',
                        overflow: 'hidden',
                        // overflow: 'auto',
                        // marginLeft: this.props.marginLeft,
                        transition: 'all 0.5s ease 0.1s'
                        }}
                        className="App-Container"
                        >
                        <div className="App-header">
                            <div>
                                <img src={this.props.logo} className="App-logo" alt="logo" style={this.props.width}/>
                            </div>
                            {/* <h3 className="CRM-title">CRM 权限认证管理系统</h3> */}
                            <h3 className="CRM-title">CRM 权限认证管理系统 - API 查询工具</h3>
                        </div>
                        <Button
                            icon="swap"
                            onClick={this.props.ClickHandler}
                            id="btn_style"
                            className="btnStyles"
                            style={{
                                left: 10,
                                transition: 'all 0.5s ease 0.1s',
                                display: "none"
                            }}>
                        </Button>
                        {/* left: (this.props.marginLeft - 20) */}
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
    ClickHandler: PropTypes.func,
    marginLeft: PropTypes.number,
    logo: PropTypes.string
};


export default ContentBox;


