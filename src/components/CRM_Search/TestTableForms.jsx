import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TestTableForms
 * @extends {Component}
 */

import {Table, Icon, Form, Button} from 'antd';

import './testtableforms.css';

import {TM}from './TestModal';
import {RI} from './Required';
import {RTS}from './Results';

// debug color
const css1 = `
    color: red;
`;
const css2 = `
    color: #f0f;
`;

let fetch_url = "";

class TestTableForms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            visible: false,
            test_datas: {}
        }
    }
    TestClick = (url) => {
        console.log(`new url obj = `, url);
        fetch_url = url;
        // fetch url
        // console.log(`new url obj = `, fetch_url);
    };
    startTest = () => {
        // fetch test data
        let url = fetch_url;
        console.log(`fetch_url = `, fetch_url);
        console.log(`fetch test data`, url);
        // new test_datas url
    };
    showModal = () => {
        console.log(`clicked showModal!`);
        console.log(`%c showModal = `, css1, this.state.show);
        // e.preventDefault();
        this.setState(
            (prevState, props) => {
                return{
                    // Object.assign()
                    // showModal: !prevState.showModal
                    show: true
                }
            }
        );
        console.log(`clicked showModal, agian!`);
        console.log(`%c showModal agian = `, css2, this.state.show);
    };
    hideModal = () => {
        console.log(`clicked hideModal!`);
        console.log(`%c hideModal = `, css1, this.state.show);
        this.setState(
            (prevState, props) => {
                return{
                    show: false
                }
            }
        );
        console.log(`clicked hideModal, agian!`);
        console.log(`%c hideModal agian = `, css2, this.state.show);
    };
/*     componentWillMount() {
        this.hideModal();
    }
    componentWillUnmount() {
        this.hideModal();
    } */
    checkTestCommands = (url) => {
        // fetch test data
        console.log(`fetching url = \n`, url);
    };
    testOK = (e) => {
        // e.preventDefault();
        console.log(`testOK e`, e);
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: true
            });
            // this.props.hideModal();
        }, 1000);
    }
    testCancel = () => {
        this.setState({
            visible: false
        });
    }
    render() {
        const {show, test_datas} = this.state;
        return (
            <div>
                <div>
                    <h2 className="title-color">必填项</h2>
                    <RI 
                        dataSource={[]}
                        test_datas={test_datas}
                        TestClick={this.TestClick}
                    />
                    {/* 
                        coloums = 字段 类型 值 描述
                        input + output => new table data
                        // required 
                        // new objects

                    */}
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.startTest}>
                        开始测试
                    </Button>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.showModal}>
                        查看命令
                    </Button>
                    {
                        show 
                        ?
                        <TM 
                            hideModal={this.hideModal}
                            visible={this.state.visible}
                            checkTestCommands={this.checkTestCommands}
                        />
                        :
                        ""
                    }
                </div>
                <div>
                    <h2 className="title-color">可选项</h2>
                    <Table dataSource={this.props.dataSource} columns={this.props.columns} />
                    <Form />
                    {
                        (Math.random()*10 > 5) ? <button>展开-可选项</button> : <button>收起-可选项</button>
                    }
                </div>
                <div>
                    <h2 className="title-color">测试结果</h2>
                    {/* {title: "基金经理详细信息(折线图同类平均)", datas: Array(4)} */}
                    {/* Tabs & Tables */}
                     <RTS tabs={this.props.outputs} style={{ overflowX: "scroll"}}/> 
                </div>
            </div>
        );
    }
}

TestTableForms.propTypes = {
    outputs: PropTypes.string.isRequired,
};

const TTF = TestTableForms;
export {TTF};
export default TTF;