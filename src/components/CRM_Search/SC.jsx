import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'whatwg-fetch';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// global Constant
// const debug = true;
// false

import {debug} from '../../app/debug';

import {DM}from './DynamicMenus';

import {Layout, Menu, Icon} from 'antd';

import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const SubItem = Menu.Item;




class SC extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            theme: 'dark'
        };
    }
    handleClick = () => {
        // 
    }
    randomIcons = (title) => {
        let icon = "";
        switch(title){
            case "基金": 
                icon = "pie-chart";
                break;
            case "主板": 
                icon = "line-chart";
                break;
            case "股票": 
                icon = "bar-chart";
                break;
            case "主板F10": 
                icon = "line-chart";
                break;
            case "新三板专题统计": 
                icon = "dot-chart";
                break;
            case "主板F9": 
                icon = "line-chart";
                break;
            case "港股f9": 
                icon = "area-chart";
                break;
            case "指数": 
                icon = "area-chart";
                break;
            case "新三板F9": 
                icon = "dot-chart";
                break;
            default:
                icon = "bar-chart";
        }
        if(debug){
            console.log(`icon = \t`, icon);
        }
        return icon;
        // this.randomIcons(data.name.substr(0, 2))
    }
    // no need any more
    componentDidMount() {
        // 'Access-Control-Allow-Origin' header 
        // set the request's mode to 'no-cors' 
        // const url = `http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetAllLoad","WriteType":"json"}`;
        const url = `http://localhost:7777/info/`;
        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'no-cors'
        };
        const request_url = new Request(url, ...init);
        fetch(request_url)
        .then((response) => response.json())
        .then((json)=> {
            if(debug){
                console.log(`json = ${json}`);
                console.log(`json.length = ${json.length}`);
            }
            // json = json.Info;
            if(!debug){
                console.log(`json.Info = ${json.Info}`);
                console.log(`json.Info.length = ${json.Info.length}`);
            }
            let datas = json.map(
                (data) => {
                    if(debug){
                        console.log(`data`, data);
                    }
                    return data;
                }
            );
            if(debug){
                console.log(`datas = ${JSON.stringify(datas)}`);
            }
            return datas;
        })
        .then((datas)=> {
            if(debug){
                console.log(`datas new = ${JSON.stringify(datas)}`);
            }
            return this.setState({
                datas: datas
            });
        });
    }
    // get data from props
    render() {
        return (
            <div
                style={{
                    border: '1px solid #f0f',
                    minHeight: 500,
                    minWidth: 400,
                    //
                }} >
                <Router>
                    {/* display: 'flex', */}
                    <div style={{display: 'flex', border: '1px solid #000'}} >
                        <div 
                            style={{
                                background: '#333',
                                border: '1px solid red'
                            }}
                            >
                            <Menu
                                theme={this.state.theme}
                                onClick={this.handleClick}
                                style={{ width: 240 }}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                >
                                <SubMenu 
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="area-chart" style={{fontSize: 18, color: '#f0f'}} className=""/>
                                            <span
                                                style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}
                                                className=""
                                                >
                                                just for test
                                            </span>
                                        </span>
                                    }>
                                    {
                                        this.props.datas.map((data, index) => (
                                            <SubItem key={(index)}>
                                                <Link to={`/sc/${data.name}`}>
                                                    <Icon
                                                        type={data.name ? this.randomIcons(data.description.substr(0, 2)) : "bar-chart"}
                                                        style={{fontSize: 12, color: '#fff'}}
                                                    />
                                                    {data.description.substr(0,2)}
                                                </Link>
                                            </SubItem>
                                        ))
                                    }
                                </SubMenu>
                            </Menu>
                        </div>
                        {/* style={{display: 'flex', overflowX: "scroll"}} */}
                        <div >
                            {
                                this.props.routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

SC.propTypes = {
    routes: PropTypes.array.isRequired,
    datas: PropTypes.array.isRequired
};

export {SC};
export default SC;