import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../img/logo.png';
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

import Item1 from '../components/Item1.js';
import Item2 from '../components/Item2.js';
import Item3 from '../components/Item3.js';

import TestItem from '../components/Test.jsx';

// IM
// import ProductManagement from '../components/IM/ProductManagement.js';
import {PM} from '../components/IM/PM/index.jsx';
// impm
import {MM} from '../components/IM/MM/index.jsx';
// immm

// AM

import {RM} from '../components/AM/RM/index.jsx';
// amrm

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>TestItem</div>,
        main: () => <div><TestItem /></div>
    },
    {
        path: '/test',
        sidebar: () => <div>TestItem</div>,
        main: () => <div><TestItem /></div>
    },
    {
        path: '/item1',
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
        path: '/amrm',
        sidebar: () => <div>AMRM</div>,
        main: () => <div><RM /></div>
    },
    {
        path: '/item3',
        sidebar: () => <div>item3</div>,
        main: () => <div><Item3 /></div>
    },
    {
        path: '/impm',
        sidebar: () => <div>IMPM</div>,
        main: () => <div><PM /></div>
    },
    {
        path: '/immm',
        sidebar: () => <div>IMPM</div>,
        main: () => <div><MM /></div>
    }
];

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
        // this.handlerMenuClick = this.handlerMenuClick.bind(this);
    }
    handlerMenuClick = (e) => {
        console.log("clicked === \n", e);
        if(this.state.styles === "App-SideBox-init"){
            this.setState({
                message: "e.key",
                styles: "App-SideBox-New"
            });
        }
        if(this.state.styles === "App-SideBox-New"){
            this.setState({
                message: "Hello!",
                styles: "App-SideBox-init"
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
                    <h1>CRM 权限认证管理系统</h1>
                </div>
                <div className="App-body">
                    <ContentBox
                        routes={routes}
                        ClickHandler={(e) => this.handlerMenuClick(e)}
                        styles={this.state.styles}
                    />
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
