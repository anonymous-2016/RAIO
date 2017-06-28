import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';

import SideBox from './SideBox.js';

import ContentBox from './ContentBox.js';

// import TestRouters from './TestRouters.js';


/*import SidebarExample from './test.js';*/

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Item1 from './components/Item1.js';
import Item2 from './components/Item2.js';
import Item3 from './components/Item3.js';


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
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            styles: props.styles,
            Any: props.any,
            width: props.width,
            routes: routes
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handleMenuClick(e) {
        console.log("clicked === \n", e);
        if(this.state.styles === "App-SideBox-init"){
            this.setState({
                message: "e.key",
                styles: "App-SideBox-New",
                width: "width: 40px;"
            });
        }
        if(this.state.styles === "App-SideBox-New"){
            this.setState({
                message: "Hello!",
                styles: "App-SideBox-init",
                width: "width: 300px;"
            });
        }
        console.log("this.state.message === ", this.state.message);
        console.log("this.state.styles === ", this.state.styles);
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={this.props.width}/>
                    <h2>React 微盘交易管理系统</h2>
                </div>
                {/*<div className="App-SideBox">
                    <div className={this.state.styles}>
                        <SideBox routes={routes}/>
                        <TestRouters/>
                    </div>
                    <div onClick={this.handleMenuClick} className="App-SideBox-btn">
                        <span>icon</span>
                    </div>
                </div>*/}
                <div className="App-body">
                    <ContentBox routes={routes}/>
                    {/*how to dynamic update route*/}
                    {/*<Router>
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
                    </Router>*/}
                </div>
            </div>
        );
    }
};

App.defaultProps = {
    message: 'Hello!',
    styles: 'App-SideBox-init'
};

App.propTypes = {
    message: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    width: PropTypes.string
};

export default App;
