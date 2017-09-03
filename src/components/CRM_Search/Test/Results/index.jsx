import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */


// utils
import {color}from '../../../../app/color';
import {debug} from '../../../../app/debug';

// css
import './index.css';


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
            results: "" 
        };
    }
    //
    render() {
        const tables = this.props.tabs;
        const results = this.props.results;
        const {tabs_cols: cols, tabs_datas: tabs} = {...this.props};
        if (debug) {
            console.log(`%c tabs === test tables = \n`, color.color_css1, JSON.stringify(tables, null, 4));
        }
        /* 
            {
                "type": "string",
                "name": "A0",
                "new_type": "STRING",
                "desc": "交易日期",
                "test_name": "A0",
                "key": "k0000"
            },
        */
        return (
            <div 
                // css3 media query 
                className="results-media-width"
                style={{
                    width: "calc(100% - 300px)",
                    // width: "100%",
                    // minWidth: 850,
                    // maxWidth: 950,
                    // maxWidth: 850,
                    // width: 800,
                    // 暂时防止 multi tables overflow ??? 
                    // margin: 10,
                    // padding: 10,
                    margin: 0,
                    padding: 0,
                    marginLeft: 20,
                    boxSizing: "border-box",
                    // overflowX: "hidden",
                    textAlign: "center",
                    // paddingRight: -50,
                    // overflowX: "scroll",
                }}>
                <Tabs
                    defaultActiveKey="1"
                    style={{
                        width: "calc(100%)",
                        // overflowX: "scroll",
                        // overflowX: "hidden",
                        maxWidth: 1000,
                        boxSizing: "border-box",
                        // overflowX: "scroll"
                    }}>
                    {/* old way */}
                    {
                        cols.map(
                            (col_obj, index) => {
                                console.log(`%c ${index} col_obj.col_name = "${col_obj.col_name}"`, `background-color: #f0f`);
                                let temp_data = [],
                                    temp_col = col_obj.col_datas;
                                for(let i = 0; i < tabs.length; i++){
                                    if(col_obj.col_name === tabs[i].tab_name){
                                        temp_data = tabs[i].tab_datas;
                                        console.log(`${i} ☺️ ☺️ ☺️ col_obj.col_name = "${col_obj.col_name}"`);
                                        console.log(`${i} ☺️ ☺️ ☺️ tabs[i].tab_name = "${tabs[i].tab_name}"`);
                                        continue;
                                    }else{
                                        console.log(`☹️ ${i} tabs[i].tab_name  ☹️ = "${tabs[i].tab_name}"`);
                                        // temp_data = [];
                                    }
                                }
                                return(
                                    <TabPane 
                                        tab={
                                            <span style={{fontSize: 12}}>
                                                <Icon type="apple" />
                                                {`表${++index}:${col_obj.col_name || ""}`}
                                            </span>
                                        }
                                        key={(++index)}
                                        style={{
                                            boxSizing: "border-box",
                                            // maxWidth: 850,
                                            width: "calc(100%)",
                                        }}>
                                        <RT
                                            tabs_datas={temp_data}
                                            tabs_cols={temp_col}
                                            style={{
                                                // maxWidth: 850,
                                                width: "calc(100%)",
                                                // width: 850,
                                                // minWidth: 600
                                                boxSizing: "border-box",
                                            }}
                                        />
                                    </TabPane>
                                );
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
    results: PropTypes.array.isRequired,
};

const RTS = ResultTables;
export {RTS};
export default RTS;