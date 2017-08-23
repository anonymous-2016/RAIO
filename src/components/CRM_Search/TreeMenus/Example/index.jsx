'use strict';
import React from 'react';
import PropTypes from 'prop-types';

// libs
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from 'react-treebeard';

// components
import {data} from './data';
import styles from './styles';
import * as filters from './filter';

import {SCT} from './SCT';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};
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
    /* 
        #hash no reload/ refresh
    */
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
    /* 
        http://localhost:3000/api
        http://localhost:3000/api?q=xgqfrms&id=#007
    */
    const fetch_url = window.location.pathname.substr(8);
    // /api
    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle}/>
                {/* {node.name} & {`${node.apiname ? "api = "+node.apiname : "☹️"}`} */}
                {node.name} & {`${node.apiname ? "❤" : "☹️"}`}
                {(node.apiname ? window.location.hash = `${node.apiname}` : window.location.hash)}
                {/* {JSON.stringify(node)} */}
            </div>
        </div>
    );
};

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
class NodeViewer extends React.Component {
    render() {
        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);
        // ??? 4 === indent ???
        if (!json) {
            json = HELP_MSG;
        }
        console.log(`json = `, json);
        let url = json.apiname;
        console.log(`url = `, url);
        /* 
            return(
                <div style={style.base}>
                    {json}
                </div>
            );
        */
        return(
            <div style={style.base}>
                <SCT url={url}/>
            </div>
        );
    }
}
NodeViewer.propTypes = {
    node: PropTypes.object
};

class DemoTree extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor} = this.state;
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({cursor: node});
    }
    onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }
    render() {
        const {data: stateData, cursor} = this.state;
        return (
            <StyleRoot>
                <div style={styles.searchBox}>
                    <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-search"/>
                        </span>
                        <input className="form-control"
                               onKeyUp={this.onFilterMouseUp.bind(this)}
                               placeholder="Search the tree..."
                               type="text"/>
                    </div>
                </div>
                {/* menus */}
                <div style={styles.component}>
                    <Treebeard data={stateData}
                               decorators={decorators}
                               onToggle={this.onToggle}/>
                </div>
                {/* content */}
                <div style={styles.component}>
                    <NodeViewer node={cursor}/>
                </div>
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