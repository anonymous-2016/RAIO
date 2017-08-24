'use strict';
import React from 'react';
import PropTypes from 'prop-types';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// libs
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from 'react-treebeard';

// components
import {data} from './data';
import styles from './styles';

import './a-link-color.css';

// import * as filters from './filter';

// import {NodeViewer} from './NodeViewer';

let apiname = "";



// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};
/* 

    // const fetch_url = window.location.pathname.substr(8);
    const host = window.location.host;
    // localhost:3000"
    const hostname = window.location.hostname;
    // "localhost"
    const origin = window.location.origin;
    // "http://localhost:3000"
    const href = window.location.host;
    // "http://localhost:3000/api"
    const pathname = window.location.pathname;
    // "/api"
    
    //  #hash no reload/ refresh

    const hash = window.location.hash;
    // "#007"
    const port = window.location.port;
    // "3000"
    const protocol = window.location.protocol;
    // "http:"
    const search = window.location.search;
    // "?q=xgqfrms&id="
    // replace()
    // reload() 
    // http://localhost:3000/api?q=xgqfrms&id=#007
    const fetch_url = window.location.pathname.substr(8);

*/
    // /api
    node.apiname ? window.location.hash = `${node.apiname}` : ``;
    node.apiname ? apiname = node.apiname : "node.apiname";
    return (
        <div style={style.base
            // {background: "#ccc",
            // color: "#fff"  }
      }>
            <div style={style.title} className="a-link-color">
                <Link to={`/api/sc/${node.apiname ? node.apiname : ""}`}>
                    <i className={iconClass} style={iconStyle}/>
                    {/* {node.name} & {`${node.apiname ? "api = "+node.apiname : "☹️"}`} */}
                    {/* {node.name} & {`${node.apiname ? "❤" : "☹️"}`} */}
                    {node.name}
                    {/* 
                        {(node.apiname ? window.location.hash = `${node.apiname}` : ``)}
                    */}
                    {/* {setTimeout(() => {
                        (node.apiname ? window.location.hash = `${node.apiname}` : ``)
                    }, 0)}  */}
                </Link>
                {/* {JSON.stringify(node)} */}
            </div>
        </div>
    );
};

/* 

        <div style={style.base}>
            <div style={style.title}>

*/

// decorators ???

/* 

Header === menus apiname

if(apiname !== undefined){
    // pass apiname
}else{
    // nothing need to do
}

Container

Loading

Toggle

*/

// content ??? get apiname



class DemoTree extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data,
            url : ""
        };
    }
    // this.onToggle = this.onToggle.bind(this);
    onToggle = (node, toggled) => {
        const {cursor} = this.state;
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({cursor: node});
    };
    componentWillMount(){
        this.setState({
            url: apiname
        });
        const that = this;
        setTimeout(function() {
            console.log(`apiname url = `, that.state.url);
        }, 1000);
        // Warning: setState(...): Cannot update during an existing state transition
        // (such as within `render` or another component's constructor). 
        // Render methods should be a pure function of props and state; 
        // constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.
    }
/*     onFilterMouseUp = (e) => {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    } */
    render() {
        const {data: stateData, cursor} = this.state;
        return (
            <StyleRoot>
                {/* <div style={styles.searchBox}>
                    <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-search"/>
                        </span>
                        <input className="form-control"
                               onKeyUp={this.onFilterMouseUp}
                               placeholder="Search the tree..."
                               type="text"/>
                    </div>
                </div> */}
                {/* menus */}
               {/*  <div style={styles.component}>
                    <Treebeard data={stateData}
                               decorators={decorators}
                               onToggle={this.onToggle}/>
                </div> */}
                <div>
                    <Treebeard
                        data={stateData}
                        decorators={decorators}
                        onToggle={this.onToggle}
                    />
                </div>
                {/* content */}
                {/* <div style={styles.component}>
                    <NodeViewer node={cursor}/>
                </div> */}
            </StyleRoot>
        );
    }
}


export {DemoTree};
export default DemoTree;


// const content = document.getElementById('content');
// ReactDOM.render(<DemoTree/>, content);

/* 




const data = {
    "apiname": null,
    "name": "root",
    "toggled": true,
    "children": [
        {
            "apiname": "TestProtocol",
            "name": "测试协议",
            "toggled": false,
            "children": null,
            "active": false,
            "loading": false
        },
        {
            "apiname": "StaticReportImageData",
            "name": "REPORT 中关联的报表图形数据 @IMAGEID 图像数据的ID，一般由报表事先返回",
            "toggled": false,
            "children": null,
            "active": false,
            "loading": false
        }
    ]
};






*/