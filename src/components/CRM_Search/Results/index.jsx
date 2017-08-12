import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */

import {RT}from './RT';

import {Icon, Tabs} from 'antd';
const TabPane = Tabs.TabPane;
/* 
const tables = [
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    }
]; */

class ResultTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        };
    }
    //
    render() {
        const tables = this.props.tabs;
        return (
            <div style={{maxWidth: 850}}>
                {/* map */}
                {/* 
                tables === {title: "基金经理详细信息", datas: Array(4)} 
                */}
                <Tabs defaultActiveKey="1">
                    {
                        tables.map(
                            (table, index) => {
                                {/* console.log(`tab key index ${index}`); */}
                                return(
                                    <TabPane 
                                        tab={
                                            <span style={{fontSize: 12}}>
                                                <Icon type="apple" />
                                                {`表${++index}:${table.title}`}
                                            </span>
                                        }
                                        key={`${++index}`}
                                        style={{
                                            
                                        }}>
                                        {/* test data, output data */}
                                        <RT
                                            dataSource={[]}
                                            columns={table.datas}
                                            style={{
                                                maxWidth: 850,
                                                minWidth: 600
                                            }}
                                        />
                                    </TabPane>
                                )
                            }
                        )
                    }
                    {/* no content === disabled */}
                </Tabs>
            </div>
        );
    }
}

ResultTables.propTypes = {
    tabs: PropTypes.array.isRequired,
};

const RTS = ResultTables;
export {RTS};
export default RTS;