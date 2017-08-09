import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TestTableForms
 * @extends {Component}
 */

import {Table, Icon, Form} from 'antd';


class TestTableForms extends Component {
    render() {
        return (
            <div>
                 TTF test
                <Table dataSource={this.props.dataSource} columns={this.props.columns} />
                this.props.data = {this.props.data}
                <Form />
            </div>
        );
    }
}

TestTableForms.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

const TTF = TestTableForms;
export {TTF};
export default TTF;