import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {RCT}from './RCT';
import {RSF} from './RSF';


let datas = [
    {
        encode: `资源分类!A1`,
        pEncode: `资源分类!A1`,
        name: `名称`,
        key: '1'
    },
    {
        encode: `资源分类!A1`,
        pEncode: `资源分类!A1`,
        name: `名称`,
        key: '2'
    }
];

// global key
let key = 3;

class RCL extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: datas
        };
    }
    onSearch = () => {
        console.log(`datas`, datas);
          let newData = datas.push(
            {
                encode: `资源分类!A1`,
                pEncode: `资源分类!A1`,
                name: `名称${key++}`,
                key: key++
            }
        );
        console.log(`newData`, newData);  
        // return 3
        /* let obj = Object.assign(
            datas,
            {
                encode: `资源分类!A1`,
                pEncode: `资源分类!A1`,
                name: `名称3`,
                key: key++
            }
        );
        console.log(`obj`, obj);
        console.log(`obj.datas`, obj.datas); */
        // objects 
        // object => array ???
        this.setState(
            () => {
                return {
                    data: datas
                }
            }
        );
    }
    render() {
        return (
            <div>
                <RSF onSearch={this.onSearch}/>
                <RCT datas={this.state.data}/>
            </div>
        );
    }
}

RCL.propTypes = {

};

export {RCL};
export default RCL;