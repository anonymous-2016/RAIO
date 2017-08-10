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


// debug color
const css1 = `
    color: red;
`;
const css2 = `
    color: #f0f;
`;

class TestTableForms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        }
    }
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
    startTest = () => {
        // fetch test data
        console.log(`fetch test data`);
    };
    checkTestCommands = (url) => {
        // fetch test data
        console.log(`fetching url = \n`, url);
    };
    render() {
        let show = this.state.show;
        return (
            <div>
                <div>
                    <h2 className="title-color">必填项</h2>
                    <Table dataSource={this.props.dataSource} columns={this.props.columns} />
                    {/* 
                        coloums = 字段 类型 值 描述
                        input + output
                    */}
                    {/* this.props.data = {this.props.data} */}
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
                    {/* Tabs & Tables */}
                    <Table dataSource={this.props.dataSource} columns={this.props.columns} />
                </div>
            </div>
        );
    }
}

TestTableForms.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

const TTF = TestTableForms;
export {TTF};
export default TTF;