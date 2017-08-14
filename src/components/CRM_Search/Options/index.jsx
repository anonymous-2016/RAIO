import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class OptionsItems
 * @extends {Component}
 */

import {Table, Icon} from 'antd';

class OptionsItems extends Component {
    render() {
        const cols = [{title: "可选项", key: "option", dataIndex: "option"}];
        return (
            <div style={{maxWidth: 850, margin: 10, padding: 10, boxSizing: "borderBox"}}>
                <h3 style={{textAlign: "center"}}>input 可选项</h3>
                <Table
                    dataSource={(this.props.dataSource ? this.props.dataSource : [])}
                    columns={(this.props.columns ? this.props.columns : [{title: "可选项", key: "option", dataIndex: "option"}])}
                    bordered
                    pagination={false}
                />
                {/* 
                    dataSource={(this.props.dataSource ? this.props.dataSource : [{key: "1", option: "可选项"}])}
                    columns={(this.props.columns ? this.props.columns : [{title: "可选项", key: "option", dataIndex: "option"}])}
                    columns={cols}
                 */}
            </div>
        );
    }
}

OptionsItems.propTypes = {
    // dataSource: PropTypes.array.isRequired,
};

const OI = OptionsItems;

export {OI};
export default OI;