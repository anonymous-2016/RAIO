import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TestTableForms
 * @extends {Component}
 */

import {color} from '../../app/color';

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

// let fetch_url = "";

class TestTableForms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            visible: false,
            test_datas: {},
            fetch_url: ""
        }
    }
    TestClick = (url) => {
        console.log(`%c new url obj = `,color.color_css1, url);
        // fetch_url = url;
        this.setState({
            fetch_url: url
        });
        // fetch url
        // console.log(`new url obj = `, fetch_url);
    };
    startTest = () => {
        const that = this;
        // fetch test data
        let url = this.state.fetch_url;
        console.log(`%c fetch test data`, css2, url);
        // new test_datas url
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then(
            (fecth_data) => {
                // fecth_data === [{}, {}];
                let objs = {};
                fecth_data.map(
                    // name.AnyManagedFundsRow
                    (data) => {
                        // 
                    }
                );
                // need shape
                /*
                {
                    "AnyManagedFundsRow":
                    [
                        {
                            A0: "华夏基金管理有限公司",
                            A1: "华夏大中华企业精选灵活配置混合(QDII)",
                            A2: "其他型基金",
                            A3: "2016-01-20",
                            A4: "其他型基金",
                            A5: "21.877086009428236",
                            A5: "65135"
                        },
                                            {
                            A0: "华夏基金管理有限公司",
                            A1: "华夏大中华企业精选灵活配置混合(QDII)",
                            A2: "其他型基金",
                            A3: "2016-01-20",
                            A4: "其他型基金",
                            A5: "21.877086009428236",
                            A5: "65135"
                        }
                    ]
                }
                */
                // result table A0 = key
                console.log(`%c fecth data = \n`, css2, fecth_data);
                that.setState({
                    test_datas: {fecth_data}
                })
            }
        );
/*         this.setState({
            test_datas: fecth_data
        }); */
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
    checkTestCommands = (url) => {
        // fetch test data
        console.log(`%c fetching url = \n`, css1, url);
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
            <div >
                <div >
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
                <div >
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
                     <RTS
                        tabs={this.props.outputs}
                        style={{maxWidth: 850}}
                        results={test_datas}
                    />
                    {/* // tab.name === "AnyManagedFundsRow":[]  */}
                </div>
            </div>
        );
    }
}

TestTableForms.propTypes = {
    outputs: PropTypes.array.isRequired,
};

const TTF = TestTableForms;
export {TTF};
export default TTF;