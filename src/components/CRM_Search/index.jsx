import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Spin
import {Spin} from 'antd';

import {SC} from './SC';

import {SCT} from './SCT';
import {LF} from './Login';
import {SF} from './SF';

/* let x = 1;
let data = "";
const routes = [
    {
        path: '/sc',
        exact: true,
        main: () => <div><SC /></div>
    },
    {
        path: '/sc/test1',
        exact: true,
        main: () => <div><SCT data={{key: 1}}/></div>
    },
    {
        path: '/sc/test2',
        exact: true,
        main: () => <div><SCT data={{key: 2}}/></div>
    },
    {
        path: '/sc/testx',
        exact: true,
        main: () => (
            <div>
                <SCT data={{
                    "name": "fund.topic.performance_evaluation.fund_rating.TianXiang.Filter",
                    "description": "基金 -> 专题统计 -> 业绩评价 -> 基金评级 -> 天相基金评级(筛选条件)",
                    "dependtables": [
                    "MF_TXSECFundRating"
                    ]
                }}/>
            </div>
        )
    }
]; */

class CRMS extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            routes: [],
            loading: false
        };
    }
    componentDidMount() {
         this.setState({
            loading: true
        }); 
        fetch(`http://localhost:7777/info`)
        .then((response) => response.json())
        .then((json)=> {
            console.log(`json = ${json}`);
            console.log(`json.length = ${json.length}`);
            let datas = json.map(
                (data) => {
                    console.log(`data`, data)
                    return {
                        path: `/sc/${data.name}`,
                        exact: true,
                        main: () => (
                            <div>
                                <SCT data={data}/>
                            </div>
                        )
                    };
                }
            );
            this.setState({
                datas: json
            });
            console.log(`datas = ${JSON.stringify(datas)}`);
            return datas;
        })
        .then((datas)=> {
            console.log(`datas new = ${JSON.stringify(datas)}`);
            return this.setState({
                routes: datas,
                loading: false
            });
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    xyzSearch = () => {
        this.setState(
            {
                loading: true
            }
        );  
        setTimeout(() => {
            // fetch data
            let jsons = [ 
                {
                    "name" : "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
                    "description" : "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
                    "dependtables" : [ "SecuMain", "MF_NetValue" ]
                },
                {
                    "name": "JYTopic.StockSecondaryMarket.StockMarketPeform",
                    "description": "主板->专题统计->二级市场->市场表现->个股行情表现",
                    "dependtables": [
                        "LC_DIndicesForValuation","LC_ExgIndustry","QT_Performance","SecuMain","BaseCode","Sector","SectorComponent"
                    ]
                },
                {
                    "name" : "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
                    "description" : "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
                    "dependtables" : [ "SecuMain", "MF_NetValue" ]
                },
                {
                    "name" : "fund.topic.performance_evaluation.fund_rating.TianXiang.Filter",
                    "description" : "基金 -> 专题统计 -> 业绩评价 -> 基金评级 -> 天相基金评级(筛选条件)",
                    "dependtables" : [ "MF_TXSECFundRating" ]
                },
                {
                    "name": "JYTopic.StockSecondaryMarket.StockMarketPeform",
                    "description": "主板->专题统计->二级市场->市场表现->个股行情表现",
                    "dependtables": [
                        "LC_DIndicesForValuation","LC_ExgIndustry","QT_Performance","SecuMain","BaseCode","Sector","SectorComponent"
                    ]
                },
                {
                    "name" : "fund.topic.performance_evaluation.fund_rating.TianXiang.Filter",
                    "description" : "基金 -> 专题统计 -> 业绩评价 -> 基金评级 -> 天相基金评级(筛选条件)",
                    "dependtables" : [ "MF_TXSECFundRating" ]
                },
                {
                    "name": "JYTopic.StockSecondaryMarket.StockMarketPeform",
                    "description": "主板->专题统计->二级市场->市场表现->个股行情表现",
                    "dependtables": [
                        "LC_DIndicesForValuation","LC_ExgIndustry","QT_Performance","SecuMain","BaseCode","Sector","SectorComponent"
                    ]
                },
            ];
            let json = jsons;
            json.length = parseInt(Math.random()*7 + 1);
            // random length of array
            let routes = json.map(
                (route) => {
                    console.log(`data`, route)
                    return {
                        path: `/sc/${route.name}`,
                        exact: true,
                        main: () => (
                            <div>
                                <SCT data={route}/>
                            </div>
                        )
                    };
                }
            );
            console.log('routes =', routes);
            let datas = json;
            console.log('datas = ', datas);
            return this.setState(
                (prevState, props) => {
                    return{
                        datas: datas,
                        routes: routes,
                        loading: false
                    }
                }
            ); 
        }, 1000); 
        // shouldComponentUpdate(true);
    }
    render() {
        return (
            <div>
                <SF xyzSearch={this.xyzSearch}/>
                {
                    <Spin tip="Loading..." size="large" spinning={this.state.loading}>
                        <SC routes={this.state.routes}  datas={this.state.datas}/>
                    </Spin>
                }
                {/* <LF /> */}
            </div>
        );
    }
}

CRMS.propTypes = {

};

export {CRMS};
export default CRMS;