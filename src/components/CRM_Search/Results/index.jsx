import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */


import {Table} from 'antd';

class ResultTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        };
    }
    //
    render() {
        return (
            <div>
                {/* template for may Table */}
                <Table dataSource={this.state.datas} columns={this.state.columns} />
            </div>
        );
    }
}

ResultTables.propTypes = {

};

const RTS = ResultTables
export default RTS;