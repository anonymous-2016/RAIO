import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class RequiredItems
 * @extends {Component}
 */

// utils
import {urls}from '../../../../app/urls.js';
import {color}from '../../../../app/color';
import {debug} from '../../../../app/debug';


// libs
import {Table, Input, Form} from 'antd';
const FormItem = Form.Item;

// let url_obj = {};
// let url = "";
// initial url
// const value = "";



class RequiredItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: this.props.init_datas,
            initialurl: "",
            url: "",
            url_obj: {}
        }
    }
    onSaveInput = () => {
        // input onchange
        // let str_obj = JSON.stringify(url_obj);
        // url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        // this.onInputChange();
        if (debug) {
            console.log(`input test url = `, color.css3, this.state.url);
        }
        // TestClick(url)
        this.props.TestClick(this.state.url);
    };
    autoSave = () => {
        // global url
        setTimeout(() => {
            this.onSaveInput();
        }, 0);
    };
    // before onChange & update after render
    componentDidMount() {
        // input value === init datas
        const initial_datas = this.props.init_datas;
        let temp_url_obj = this.state.url_obj;
        if (debug) {
            console.log(`%c initial_datas = \n`, color.color_css3, initial_datas);
            // (4) [{…}, {…}, {…}, {…}]
            // {key: 0, value: "", name: "ApiName", desc: "报表名称(true)", type: "string"}
            console.log(`%c initial temp_url_obj = \n`, color.color_css3, temp_url_obj);
            // {ApiName: "", SecuCode: "", Names: "", WriteType: "json"}
        }
        // example / ""
        initial_datas.map(
            (data, index) => {
                let key = data.name,
                    value = data.value;
                // "key":"json (json文本格式)"
                if (debug) {
                    console.log(`%c JSON.stringify(data)= ${JSON.stringify(data)} \n`, color.css2);
                    // JSON.stringify(data)= {"key":0,"value":"","name":"ApiName","desc":"报表名称(true)","type":"string"} 
                    console.log(`%c index = ${index} \n`, color.css2);
                    console.log(`%c key = ${key} \n`, color.css2);
                    console.log(`%c value = ${value} \n`, color.css2);
                }
                // fixed
                if(key === "WriteType"){
                    temp_url_obj[key] = "json";
                    this.setState({
                        url_obj: Object.assign(this.state.url_obj, temp_url_obj)
                    });
                    if (debug) {
                        console.log(`%c temp_url_obj = ${temp_url_obj} \n`, color.css3);
                        console.log(`%c temp_url_obj[key] = ${temp_url_obj[key]} \n`, color.css3);
                    }
                }else{
                    temp_url_obj[key] = value;
                    this.setState({
                        url_obj: Object.assign(this.state.url_obj, temp_url_obj)
                    });
                    if (debug) {
                        console.log(`%c temp_url_obj.key = ${temp_url_obj.key} \n`, color.css3);
                        console.log(`%c temp_url_obj[key] = ${temp_url_obj[key]} \n`, color.css3);
                    }
                }
            }
        );
        if (debug) {
            console.log(`%c init temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let str_obj = JSON.stringify(temp_url_obj);
        // get changed table values ?
        // global url ??? update bug (only one input can be update, overwrite)
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
        let init = 0;
        if (debug && (init === 0)) {
            console.log(`%c initial test url = \n`, color.color_css3, this.state.url);
            init += 1;
        }else{
            console.log(`%c update new test url, index:${init} = \n`, color.color_css3, this.state.url);
        }
        // initial url
        this.autoSave();
        // this.onSaveInput();
    }
    // get methods from props
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    if (debug) {
                        console.log('Received values of form: ', values);
                    }
                    this.autoSave();
                }
                else{
                    // when required is empty
                    this.props.disableBTN(true);
                }
            }
        );
    };
    onInputChange = (e) => {
        if (debug) {
            // console.log(`%c e.target = `, color.green_23, e.target);
            // <input type="text" placeholder="☹️ 暂无默认的示例命令值 !" value="111" id="ApiName" data-__meta="[object Object]" class="ant-input ant-input-lg">
            console.log(`%c e.target.id = `, color.green_23, e.target.id);
            console.log(`%c e.target.value = `, color.green_23, e.target.value);
        }
        let temp_url_obj = this.state.url_obj;
        if (debug) {
            console.log(`%c before change temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let key =  e.target.id;
        let value = e.target.value;
        temp_url_obj[key] = value;
        if (debug) {
            console.log(`%c after change temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let str_obj = JSON.stringify(temp_url_obj);
        // get changed table values ?
        // global url ??? update bug (only one input can be update, overwrite)
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
    };
    /* eslint-disable no-console */
    // initialize
    render() {
        const {getFieldDecorator} = this.props.form;
        // form input
        /* 
            console.log(`new url_obj = `, url_obj);
            let str_obj = JSON.stringify(url_obj);
            let url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        */
        const initial_datas = this.props.init_datas;
        const datas_length = initial_datas.length;
        if (!debug) {
            console.log(`%c initial_datas = `, color.color_css3, initial_datas);
            console.log(`%c initial_datas.length = `, color.color_css3, initial_datas.length);
        }
        let i_length = 0;
        // input in table
        const Requiredcolumns = [
            {
                title: "字段",
                dataIndex: "name",
                key: "name",
                width: "15%"
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                width: "10%"
            },
            {
                title: "值",
                dataIndex: "value",
                key: "value",
                render: (text, index) => {
                    if (!debug) {
                        // index === object
                        console.log(`%c required index = `, color.green_16_border, index);
                        // {key: 0, value: "", name: "ApiName", desc: "报表名称(true)", type: "string"}
                        // text === value
                        console.log(`%c text = `, color.green_23, text);
                        // "" / "json" / example_value
                    }
                    if(index.name === "WriteType"){
                        // 1. write global let
                        // 2. use let create new url
                        return(
                            /* disabled no need onChange()*/
                            <Input 
                                onChange={
                                    (e) => {
                                        if (!debug) {
                                            console.log(`e = `, e.target.value);
                                        }
                                    }
                                }
                                defaultValue={text}
                                type="text"
                                disabled
                            />
                        );
                    }else{
                        return(
                            <FormItem>
                                {
                                    getFieldDecorator(index.name, {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入必填字段值, 必填字段值不可为空!'
                                            }
                                        ],
                                        initialValue: text
                                    })(
                                        <Input 
                                            onChange={this.onInputChange}
                                            type="text"
                                            placeholder="☹️ 暂无默认的示例命令值 !"
                                        />
                                    )
                                }
                            </FormItem>
                        );
                    }
                },
                // width: "40%"
            },
            {
                title: "描述",
                dataIndex: "desc",
                key: "desc",
                // width: "30%"
            }
        ];
        return (
            <div 
                onChange={this.autoSave}
                style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                {/* input 必填项 */}
                <Form onSubmit={this.handleSubmit}>
                    <Table
                        dataSource={this.state.datas}
                        columns={Requiredcolumns}
                        bordered
                        pagination={false}
                    />
                </Form>
            </div>
        );
    }
    /* eslint-enable no-console */
}

RequiredItems.propTypes = {
    init_datas: PropTypes.array.isRequired,
    TestClick: PropTypes.func.isRequired,
    disableBTN: PropTypes.func.isRequired,
};

const RI = Form.create()(RequiredItems);
// const RI = RequiredItems;

export {RI};
export default RI;





