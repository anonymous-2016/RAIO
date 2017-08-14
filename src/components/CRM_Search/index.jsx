import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.03
 * 
 * @class CRMS
 * @extends {Component}
 */

// utils
import {urls, ljs_urls} from '../../app/urls';
import {color} from '../../app/color';
import {debug} from '../../app/debug';

// libs
import {Spin} from 'antd';

// all components in one
import {IC} from './index-components';
// {...IC} / IC.SCT

const {
    SC,
    SCT,
    LF,
    SF
} = {...IC};

class CRMS extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            routes: [],
            loading: false
        };
    }
/*
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
*/
    /* eslint-disable no-console, no-unused-vars */
    componentDidMount() {
         this.setState({
            loading: true
        });
        let fetch_url = "";
        if(debug){
            fetch_url = `${ljs_urls.ljs_info}`;
        }else{
            fetch_url = `${urls.init}?{"Admin":"report","Action":"GetSchema","WriteType":"json"}`;
        }
        if(debug){
            // fetch_url
            console.log(`%c initial menus(routes) url = \n`, color.color_css1, fetch_url);
        }
        fetch(fetch_url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then((json)=> {
            let datas = json.Info;
            let routes = datas.map(
                (data) => {
                    if(debug){
                        console.log(`%c initial menus(routes) data = \n`, color.color_css1, data);
                    }
                    return {
                        path: `/api/sc/${data.name}`,
                        exact: true,
                        main: () => {
                            if(debug){
                                console.log(`%c initial SCT data = \n`, color.color_css2, data);
                            } 
                            return(
                                <div>
                                    <SCT data={data} urlname={data.name}/>
                                </div>
                            );
                        }
                    };
                }
            );
            if(debug){
                console.log(`%c all datas, JSON.stringify(datas) = ${JSON.stringify(datas)}`, color.css1);
            }
            return this.setState(
                (prevState, props) => {
                    if(debug){
                        // prevState
                    }
                    return{
                        datas: datas,
                        routes: routes,
                        loading: false
                    };
                }
            );
        });
    }
    xyzSearch = (url) => {
        this.setState({
            loading: true
        });
        if(debug){
            // search url
            console.log(`%c search url = \n`, color.color_css1, url);
        }
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({
                    loading: true
                }); 
                return json;
            }
        )
        .then(
            (json) => {
                if(debug){
                    console.log(`%c Search json.Info = `, color.color_css3, json.Info);
                }
                // Properties
                /* 
                    {
                        "Success" : false,
                        "Info" : "Does't Contain The null Report"
                    }
                */
                let datas = json.Info;
                if(debug){
                    console.log('%C Search datas = ', color.color_css1, datas);
                }
                if(!Array.isArray(datas)){
                    datas = [];
                }
                let routes = datas.map(
                    (route) => {
                        return {
                            path: `/api/sc/${route.name}`,
                            exact: true,
                            main: () => (
                                <div>
                                    <SCT data={route} urlname={route.name}/>
                                </div>
                            )
                        };
                    }
                );
                if(debug){
                    console.log('%c routes =', color.css1, routes);
                }
                return this.setState(
                    (prevState, props) => {
                        // prevState
                        return{
                            datas: datas,
                            routes: routes,
                            loading: false
                        }
                    }
                );
            }
        );
    };
    /* eslint-enable no-console */
    render() {
        return (
            <div>
                <SF xyzSearch={this.xyzSearch}/>
                {
                    <Spin
                        tip="Loading..."
                        size="large"
                        spinning={this.state.loading}>
                        {/* SCT in routes*/}
                        <SC 
                            routes={this.state.routes}
                            datas={this.state.datas}
                        />
                    </Spin>
                }
                {/* 
                    // Login Form
                    <LF /> 
                */}
            </div>
        );
    }
}


CRMS.propTypes = {
    // urls: PropTypes.object.isRequired,
};

export {CRMS};
export default CRMS;