import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class OptionsItems
 * @extends {Component}
 */
// utils
import {debug} from '../../../../app/debug';
import {color} from '../../../../app/color';

// libs
import {Table, Input, Icon, Form, Select, Checkbox, Radio} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

// global count i
let page_i = 1;

class OptionsItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            radio_value: "",
            select_value: "",
            selects_value: "",
            select_date: "",
            Page: {
                PageNo: 1,
                PageSize: 100
            },
            Sorts: [
                /* 
                    {
                        Field: "TableName.A0",
                        Sort: "desc"
                    }, 
                */
            ],
            FastQuarterReportType: [],// ["Q1th", "Q2nd", "Q3rd", "Q4th"]
            OutField: [], // ["TableName.A0", "BasicInformationRow.A3"]
            IgnoreField: [], // ["TableName.A0", "BasicInformationRow.A5"]
            defaultInput: {
                // 
            }
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // handleSubmit
    }
    onRadioChange = (e) => {
        // onChange
        console.log('radio checked', e.target.value);
        this.setState({
            radio_value: e.target.value,
        });
    };
    onSelectChange = (e) => {
        // onChange
        if (debug) {
            console.log('%c pagination target', color.color_css3, e.target);
            console.log('pagination target.id', e.target.id);
            console.log('pagination target.value', e.target.value);
        }
        if (e.target.id === "pages") {
            this.setState({
                input_value: Object.assign(
                    this.state.input_value,
                    {
                        pages: e.target.value
                    }
                )
            });
        }
        if (e.target.id === "size") {
            this.setState({
                input_value: Object.assign(
                    this.state.input_value,
                    {
                        size: e.target.value
                    }
                )
            });
        }
    };
    onSelectsChange = (e) => {
        // onChange
        console.log('selects checked', e.target.value);
        this.setState({
            select_value: e.target.value,
        });
    };
    onSelectDateChange = (e) => {
        if (debug) {
            console.log('select Date checked', e.target.value);
        }
        this.setState({
            select_date: e.target.value,
        });
    }
    onCheckboxGroupChange = (checkedValues) => {
        if (debug) {
            console.log('Checkbox Group checked = ', checkedValues);
        }
        // array []
        // "checked = " ["Q1th", "Q2nd", "Q3rd", "Q4th"]
    };
    onDefaultInputChange = (e) => {
        if (debug) {
            console.log('Default Input e checked = ', e.target.value);
        }
        let obj = {};
        obj[e.target.id] = e.target.value;
        this.setState({
            defaultInput: Object.assign(this.state.defaultInput, obj)
        });
    };
    onPageInputChange = (e) => {
        if (!debug) {
            console.log('page value', e.target.value);
            console.log('page id', e.target.id);
        }
        if (debug & (page_i = 1)) {
            console.log('initial this.state.Page ', this.state.Page);
            page_i += 1;
        }
        let obj = {};
        if(e.target.id === "pages"){
            obj["PageNo"] = e.target.value;
        }
        if(e.target.id === "size"){
            obj["PageSize"] = e.target.value;
        }
        this.setState({
            Page: Object.assign(this.state.Page, obj)
        });
        // page_pages page_size
        if (!debug) {
            console.log('changed this.state.Page ', this.state.Page);
        }
    };
    render() {
        // mock/fake data
        // needs value
        // value === output name & desc
        const option_datass = [
            {
                key: "k1",
                name: "EndDate",
                type: "string",
                value: "2016-09-30",
                description: "报告期"
            },
            {
                key: "k2",
                name: "InnerCode",
                type: "integer",
                value: "报表[267:财务公司,1517:保险,1360:券商,9971:信托,1565:券商集合理财,36721:企业年金,35793:社保基金]",
                description: "证券内码"
            },
            {
                key: "k3",
                name: "Mark",
                type: "integer",
                value: "仅SHKindCode=3时有效，默认0:券商,1:信托",
                description: "SHKindCode=3时有效，通用标示用于对以下{默认0:券商,1:信托}特殊处理"
            },
            {
                key: "k4",
                name: "ShKindCode",
                type: "integer",
                value: "json (json文本格式)",
                description: "机构类型代码{15:财务公司,4:保险,3:券商/信托,37:券商集合理财,35:企业年金,30:社保基金}"
            },
            {
                key: "k-f",
                name: "Filters",
                type: "array",
                value: "数据过滤，支持In、Between、Like、==、quarter(季报) 过滤器，参见具体过滤器的使用",
                description: "数据过滤，支持In、Between、Like、==、quarter(季报) 过滤器，参见具体过滤器的使用"
            },
            {
                key: "k-s",
                name: "Sorts",
                type: "array",
                value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
                description: "排序字段，支持排序组合"
            },
            {
                key: "k-p",
                name: "Page",
                type: "object",
                value: "input 1 = 请求的页数：1 ; input 2 = 每页的大小：100",
                description: "分页参数"
            },
            {
                key: "k-of",
                name: "OutField",
                type: "array",
                value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
                description: "数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
            },
            {
                key: "k-if",
                name: "IgnoreField",
                type: "array",
                value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
                description: "数据输出的字段，用于输出字段过滤，当输出字段数量大于不输出字段数量时采用"
            },
            {
                key: "k-fdft",
                name: "FastDateFilterType",
                type: "array",
                value: "select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
                description: "日期 快速过滤类型"
            },
            {
                key: "k-fqrt",
                name: "FastQuarterReportType",
                type: "array",
                value: "multi checkbox 1 = fixed ((一季报) (中报) (三季报) (年报))",
                description: "季报 快速过滤类型"
            }
        ];
        // fixed columns 
        const options_columns = [
            {
                title: "字段名",
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
                title: "赋值",
                dataIndex: "value",
                key: "value",
                render: (text, index) => {
                    /* 
                        dynamic type (array, enum, object, date, string, int, flaot, boolean)
                        input 
                        datepicker
                        select options
                    */
                    /* 
                        <input 
                            type="text"
                            placeholder="可选项 赋值"
                            style={{minWidth: 100}}
                            size="40"
                        />
                    */
                    if (debug) {
                        console.log(`%c index = ${index}`, color.css1);
                        // index = [object Object] === row datas
                        console.log(`%c JSON.stringify(index) = ${JSON.stringify(index)}`, color.color_css3);
                        /* 
                            {
                                "key":"k-fdft",
                                "name":"FastDateFilterType",
                                "type":"array",
                                "value":"select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
                                "description":"日期 快速过滤类型"
                            }
                        */
                        console.log(`%c text = ${text}`, color.css2);
                    }
                    // switch
                    let valueType;
                    const FDFT = [
                        {"LatestTime":"最新日期"},
                        {"CurrentYear":"今年以来"},
                        {"Latest1Month":"近一月"},
                        {"Latest3Month":"近三月"},
                        {"Latest6Month":"近六月"},
                        {"Latest1Year":"近一年"},
                        {"Latest2Year":"近二年"},
                        {"Latest3Year":"近三年"},
                        {"Latest5Year":"近五年"},
                        {"AllYear":"全部"},
                        {"ListedBefore":"上市以前"},
                        {"ListedAfter":"上市以后"},
                        {"Customer":"自定义"}
                    ];
                    // datepicker 自定义
                    const index_values = [
                        {
                            "key": "k1",
                            "name": "A0",
                            "type" : "string",
                            "description" : "A份额交易代码"
                        },
                        {
                            "key": "k2",
                            "name": "A1",
                            "type" : "string",
                            "description" : "净值日期"
                        },
                        {
                            "key": "k3",
                            "name": "A2",
                            "type" : "string",
                            "description" : "A份额交易代码"
                        },
                        {
                            "key": "k4",
                            "name": "A3",
                            "type" : "number",
                            "description" : "单位净值（元）"
                        }
                    ];
                    const QR = [
                        {"label": "一季报", "value": "Q1th"},
                        {"label": "中报", "value": "Q2nd"},
                        {"label": "三季报", "value": "Q3rd"},
                        {"label": "年报", "value": "Q4th"}
                    ];
                    // switch cases
                    switch (index.name) {
                        case "Sorts":
                            valueType = (
                                <div>
                                    {/* 
                                        1. input options === table columns
                                        2. multi tables to one array === input options table columns value
                                        3. map values = [{A0: desciption}, ..., {B0: desciption}]
                                        4. update obj url
                                    */}
                                    请先选择排序字段:
                                    {/* mode="multiple" */}
                                    <Select
                                        allowClear
                                        placeholder="排序字段，支持排序组合"
                                        >
                                        {/* index.value.map */}
                                        {
                                            index_values.map(
                                                (value, index) => {
                                                    return(
                                                        <Option
                                                            key={index}
                                                            value={value.name}>
                                                            {value.description}
                                                        </Option>
                                                    )
                                                }
                                            )
                                        }
                                    </Select>
                                    排序方式: 
                                    <Select
                                        allowClear
                                        placeholder="排序方式: (升序) 或 (降序) 或 (无序)"
                                        > 
                                        <Option value="desc">升序</Option>
                                        <Option value="asc">降序</Option>
                                        <Option value="no">无序</Option>
                                    </Select>
                                </div>
                            )
                            break;
                        case "FastDateFilterType":
                            valueType = (
                                <Select
                                    allowClear
                                    placeholder="数据快速过滤类型"
                                    onChange={this.onSelectDateChange}
                                    > 
                                    {
                                        FDFT.map(
                                            (value, index) => {
                                                if (debug) {
                                                    console.log(`value = `, value);
                                                }
                                                for(let key in value){
                                                    if (debug) {
                                                        console.log(`value[key] = `, value[key]);
                                                        console.log(`key = `, key);
                                                    }
                                                    return(
                                                        <Option
                                                            key={index}
                                                            value={key}>
                                                            {
                                                                value[key]
                                                            }
                                                        </Option>
                                                    );
                                                }
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "FastQuarterReportType":
                            valueType = (
                                <CheckboxGroup
                                    options={QR}
                                    defaultValue={[]}
                                    onChange={this.onCheckboxGroupChange}
                                />
                            )
                            break;
                        case "OutField":
                            valueType = (
                                <Select
                                    mode="multiple"
                                    allowClear
                                    placeholder="数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
                                    >
                                    {
                                        index_values.map(
                                            (value, index) => {
                                                return(
                                                    <Option
                                                        key={index}
                                                        value={value.name}>
                                                        {value.description}
                                                    </Option>
                                                )
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "IgnoreField":
                            valueType = (
                                <Select
                                    mode="multiple"
                                    allowClear
                                    placeholder="数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
                                    >
                                    {
                                        index_values.map(
                                            (value, index) => {
                                                return(
                                                    <Option
                                                        key={index}
                                                        value={value.name}>
                                                        {value.description}
                                                    </Option>
                                                )
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "Page":
                            valueType = (
                                <div>
                                    <lable>请求的页数: </lable>
                                    <Input 
                                        placeholder="请求的页数"
                                        value={this.state.Page.PageNo}
                                        type="text"
                                        onChange={this.onPageInputChange}
                                        id="pages"
                                    />
                                    <lable>每页的大小: </lable>
                                    <Input 
                                        placeholder="每页的大小"
                                        value={this.state.Page.PageSize}
                                        type="text"
                                        onChange={this.onPageInputChange}
                                        id="size"
                                    />
                                </div>
                            )
                            break; 
                        case "Compress": 
                            valueType = (
                                <RadioGroup
                                    onChange={this.onChange}
                                    value={this.state.value}>
                                    <Radio value="true">
                                        是
                                    </Radio>
                                    <Radio value="false">
                                        否
                                    </Radio>
                                </RadioGroup>
                            )
                            break;
                        case "Group": 
                            valueType = (
                                <Select
                                    allowClear
                                    placeholder="分组字段，当选择分组时，pageInfo 同样针对组分页"
                                    > 
                                    {
                                        index_values.map(
                                            (value, index) => {
                                                return (
                                                   <Option
                                                        key={index}
                                                        value={value.name}>
                                                        {value.description}
                                                    </Option>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "Filters": 
                            valueType = (
                                <Input 
                                    placeholder="可选项 Filters 赋值"
                                    value=""
                                    type="text"
                                    disabled
                                />
                            )
                            break;
                        default:
                            valueType = (
                                <Input 
                                    placeholder="可选项 赋值"
                                    value={this.state.defaultInput[index.name] ? this.state.defaultInput[index.name] : "index.name"}
                                    type="text"
                                    id={index.name}
                                    onChange={this.onDefaultInputChange}
                                />
                            )
                            break;
                    }
                    return valueType;
                },
                // width: "55%"
            },
            {
                title: "描述",
                dataIndex: "description",
                key: "description",
                width: "40%"
            }
        ];
        return (
            <div
                style={{
                    maxWidth: "100%",
                    maxHeight: 600,
                    margin: 0,
                    padding: 0,
                    boxSizing: "borderBox",
                    overflowY: "scroll"
                }}>
                    <Form
                        onSubmit={this.handleSubmit}
                        >
                        <Table
                            dataSource={(this.props.dataSource ? this.props.dataSource : option_datass)}
                            columns={options_columns}
                            bordered
                            pagination={false}
                        />
                    </Form>
            </div>
        );
    }
}

OptionsItems.propTypes = {
    // init_options_datas: PropTypes.array.isRequired,
};

const OI = OptionsItems;

export {OI};
export default OI;