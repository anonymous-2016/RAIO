import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.08.06
 * 
 * @class SCT
 * @extends {Component}
 */
import {TCB} from './TabsBox';

class SCT extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: this.props.data,
            new_data: {}
        };
    }
    componentDidMount() {
        let new_data = this.state.data;
        console.log(`new_data`, new_data);
        this.setState(
            {
                new_data: Object.assign({}, new_data)
            }
        )
    }
    render() {
        return (
            <div>
                {/* this.state.data = {JSON.stringify(this.state.data)} */}
                {/* {this.state.new_data.key}<br />  */}
                <hr/>
                <div style={{color: 'green'}}>
                    <TCB developer={"xgqfrms"}/>
                </div>
                {/* <hr/>
                <div style={{color: 'red'}}>
                    {this.state.new_data.name}<br />
                    {this.state.new_data.description}<br />
                    {this.state.new_data.dependtables}<br />
                </div> */}
            </div>
        );
    }
}

SCT.propTypes = {
    test: PropTypes.string,
    data: PropTypes.object.isRequired
};

export {SCT};
export default SCT;