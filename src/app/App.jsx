import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.06.22
 * 
 * @class MainRoutes
 * @extends {Component}
 */

// libs
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// import {Button} from 'antd';


// csss & images
import logo from '../img/logo.png';
import './App.css';

// components
import ContentBox from './ContentBox';
// import SideBox from './SideBox.js';
// import TestRouters from './TestRouters.js';
// import SidebarExample from './test.js';



// utils 
import {debug} from './debug';

// routes
import {MainRoutes} from './routes';
const {routes} = {...MainRoutes};

// Component Template

/* 

login router redirection

uid
pwd


/login  => /api/search

基金->F9

    {
        path: '/api/search',
        sidebar: () => <div>IMLM</div>,
        main: () => <div><SearchResult /></div>
    },
    SearchResult > Input/Output/Test (Tabs) , 此报表开发者 disable input (<input refs id="search_developer" type="text" disabled="">)
    Input > Table 字段名 类型 注释
    Output > 编号 类型 注释 (multi tables)
    Test > 必填项 table, 开始测试 btn 查看命令 Modal, 可选项 form (show ? 点此展开“可选项” : 收起“可选项” ), 测试结果 Table

    // pass gradeparent functions to childs
*/


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            styles: props.styles,
            Any: props.any,
            width: props.width,
            routes: routes,
            marginLeft: 50
        };
        // this.handlerMenuClick = this.handlerMenuClick.bind(this);
    }
    /* App-SideBox-init  App-SideBox-New*/
    /* eslint-disable no-console */
    handlerMenuClick = (e) => {
        if (!debug) {
            console.log("clicked === \n", e);
        }
        if(this.state.styles === "App-SideBox-init"){
            this.setState({
                message: "e.key",
                styles: "App-SideBox-New",
                marginLeft: 240
            });
        }
        if(this.state.styles === "App-SideBox-New"){
            this.setState({
                message: "Hello!",
                styles: "App-SideBox-init",
                marginLeft: 50
            });
        }
        if (debug) {
            console.log("this.state.message === ", this.state.message);
            console.log("this.state.styles === ", this.state.styles);
        }
        /* eslint-enable no-console */
    };
    render() {
        return (
            <div className="App">
            {/* 
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={this.props.width}/>
                    <h1>CRM 权限认证管理系统</h1>
                </div> 
            */}
                <div className="App-body">
                {/*             
                    <div>
                        <Button
                            icon="swap"
                            onClick={this.handlerMenuClick}
                            id="btn_style"
                            className="btnStyles"
                            style={{left: (this.state.marginLeft - 30), transition: 'all 0.5s ease 0.1s'}}
                            >
                        </Button>
                    </div> 
                */}
                    <ContentBox
                        routes={routes}
                        ClickHandler={this.handlerMenuClick}
                        // styles={this.state.styles}
                        // marginLeft={this.state.marginLeft}
                        logo={logo}
                        message={'just for test message'}
                    />
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    message: 'Hello!',
    styles: 'App-SideBox-init'
};

App.propTypes = {
    message: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    width: PropTypes.string,
    any: PropTypes.any,
    routes: PropTypes.array
};

export {App}
export default App;
