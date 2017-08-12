import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.03
 * 
 * @class CRMS
 * @extends {Component}
 */

import {urls} from '../../app/urls.js';

// Spin
import {Spin} from 'antd';
import {SC} from './SC';
import {SCT} from './SCT';
import {LF} from './Login';
import {SF} from './SF';



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
        fetch(`${urls.init}?{"Admin":"report","Action":"GetSchema","WriteType":"json"}`)
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
                    console.log(`data`, data)
                    return {
                        path: `/api/sc/${data.name}`,
                        exact: true,
                        main: () => (
                            <div>
                                <SCT data={data} urlname={data.name}/>
                            </div>
                        )
                    };
                }
            );
            console.log(`datas = ${JSON.stringify(datas)}`);
            return this.setState(
                (prevState, props) => {
                    return{
                        datas: datas,
                        routes: routes,
                        loading: false
                    };
                }
            );
        });
    }
/*     shouldComponentUpdate(nextProps, nextState) {
        return true;
    } */
    // data, url
    xyzSearch = (url) => {
        this.setState(
            {
                loading: true
            }
        );  
        // fetch data
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then(
            (json) => {
                console.log(`json.Info`, json.Info);
                // Properties
                /* 
                    {
                        "Success" : false,
                        "Info" : "Does't Contain The null Report"
                    }
                */
                let datas = json.Info;
                console.log('datas = ', datas);
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
                // console.log('routes =', routes);
                return this.setState(
                    (prevState, props) => {
                        return{
                            datas: datas,
                            routes: routes,
                            loading: false
                        }
                    }
                );
            }
        );
        // shouldComponentUpdate(true);
    }
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
                {/* <LF /> */}
            </div>
        );
    }
}


CRMS.propTypes = {

};

export {CRMS};
export default CRMS;