'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import {Treebeard} from 'react-treebeard';
import {datas} from './datas';

/* const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};
 */
class TreeExample extends React.Component {
    constructor(props){
        super(props);
        // feedback datas
        this.state = {
            datas: (this.props.datas || datas)
        };
        // key = (undefined || 'value');
        // key === 'value'
        // this.onToggle = this.onToggle.bind(this);
    }
    onToggle = (node, toggled) => {
        if(this.state.cursor){
            // this.state.cursor.active = false;
            // [eslint] Do not mutate state directly. 
            // Use setState(). (react/no-direct-mutation-state)
            this.setState({
                cursor: {
                    active: false
                }
            });
        }
        node.active = true;
        if(node.children){
            node.toggled = toggled;
        }
        this.setState({
            cursor: node
        });
    }
    render(){
        // const {datas} = this.props;
        const {datas} = this.state;
        return (
            <Treebeard
                data={datas}
                onToggle={this.onToggle}
            />
        );
    }
}

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values

// auto assignment
TreeExample.defaultProps = {
    datas
};

/*

TreeExample.defaultProps = {
    datas: datas
};

*/

TreeExample.propTypes = {
    datas: PropTypes.object.isRequired,
};
const TE = TreeExample;
export {TE};
export default TE;

/* 
export {TreeExample};
export default TreeExample;
*/

// const content = document.getElementById('content');
// ReactDOM.render(<TreeExample/>, content);