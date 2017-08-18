import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class OutputTables
 * @extends {Component}
 */

// libs
import {Table} from 'antd';

// css
import './output.css';

class OutputTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        };
    }
    render() {
        return (
            <div 
                style={{
                    minHeight: 900,
                    maxHeight: 900,
                    overflowY: "scroll",
                    boxSizing: "borderBox"
                }}>
                {/* map Tables*/}
                {
                     (this.props.dataSources.length > 0)
                     ?
                     this.props.dataSources.map(
                        (data, index) => {
                            return(
                                <div 
                                    key={`key-${index}`}
                                    style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                                    <p 
                                        style={{textAlign: "center"}}
                                        className="table-title"
                                        >
                                        {`${data.title ? data.title : ""}`}
                                        {/* {`表 ${++index}: ${data.title ? data.title : ""}`} */}
                                    </p>
                                    <Table
                                        dataSource={data.datas ? data.datas : []}
                                        columns={this.props.columns}
                                        key={`key-${index}`}
                                        bordered
                                        pagination={false}
                                    />
                                </div>
                            ); 
                        }
                    )
                    :
                    <Table
                        dataSource={[]}
                        columns={this.props.columns}
                        key={`key-null`}
                        bordered
                        pagination={false}
                    />
                }
            </div>
        );
    }
}

OutputTables.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSources: PropTypes.array.isRequired
};

const OTS = OutputTables;
export {OTS}
export default OTS;