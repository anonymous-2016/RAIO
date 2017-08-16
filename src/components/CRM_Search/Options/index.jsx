import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class OptionsItems
 * @extends {Component}
 */

import {Table, Icon} from 'antd';


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
        key: "k-s",
        name: "Sorts",
        type: "array",
        value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
        description: "排序字段，支持排序组合"
    },
    {
        key: "k-p",
        name: "ShKindCode",
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

/* 

Sorts:
    {
        key: "k-s",
        name: "Sorts",
        type: "array",
        value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
        description: "排序字段，支持排序组合"
    }
Page
    {
        key: "k-p",
        name: "ShKindCode",
        type: "object",
        value: "input 1 = 请求的页数：1 ; input 2 = 每页的大小：100",
        description: "分页参数"
    }

OutField:
    {
        key: "k-of",
        name: "OutField",
        type: "array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
    }

IgnoreField:
    {
        key: "k-if",
        name: "IgnoreField",
        type: "array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量大于不输出字段数量时采用"
    }

Group

"Group": `/"AnyManagedFundsRow.A0"/"AnyManagedFundsRow.A1"/"BasicInformationRow.A3"/"BasicInformationRow.A5"`

// 单选 radio
// output multi tables to one





Filters

FastDateFilterType
    {
        key: "k-fdft",
        name: "FastDateFilterType",
        type: "string",
        value: "select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
        description: "日期 快速过滤类型"
    }

// fixed ("LatestTime" / "CurrentYear") 12 select

// input FastDateFilterType





FastQuarterReportType
    {
        key: "k-fqrt",
        name: "FastQuarterReportType",
        type: "array",
        value: "multi checkbox 1 = fixed ((一季报) (中报) (三季报) (年报))",
        description: "季报 快速过滤类型"
    }

// array === checkboxs

// fixed ("Q1th" / "Q2nd") 4 multi checkboxs


 "Compress": "true or false",

: true
: "true"

  "CallBack": "不要",
  "ExtParams": "不要",

input disabled

"WriteType": "json(固定)"

"Filters": [
    {
      "FilterType": "like",
      "Field": "a0(来自于输出字段)",
      "Value": "hello(用户输入)"
    },
    {
      "FilterType": "equal",
      "Field": "a0(来自于输出字段)",
      "Value": "world(用户输入)"
    },
    {
      "FilterType": "between",
      "Field": "a0(来自于输出字段)",
      "MaxValue": "2017-08-04(时间选择控件)",
      "MinValue": "2012-01-01(时间选择控件)"
    },
    {
      "FilterType": "quarter",
      "Field": "a0(来自于输出字段)",
      "Value": [
        "Q1th(枚举值，固定)",
        "Q2nd(枚举值，固定)",
        "Q3rd(枚举值，固定)",
        "Q4th(枚举值，固定)"
      ]
    },
    {
      "FilterType": "in",
      "Field": "a0(来自于输出字段)",
      "Value": "hello world(用户输入)"
    }
],

// select 1 & select 2 (components ???)




// ??? enum multi = array , single = string

date = datepicker(yyyy-MM-dd) / input





*/

const options_columns = [
    {
        title: "字段名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "赋值",
        dataIndex: "value",
        key: "value",
        render: (text, index) => {
            // dynamic type (array, enum, object, date, string, int, flaot, boolean)
            // input 
            // datepicker
            // select options
            // 
            return(
                <input 
                    type="text"
                    placeholder="可选项 赋值"
                />
            );
        }
    },
    {
        title: "描述",
        dataIndex: "description",
        key: "description"
    }
];

class OptionsItems extends Component {
    render() {
        const cols = [{title: "可选项", key: "option", dataIndex: "option"}];
        return (
            <div style={{maxWidth: 850, margin: 10, padding: 10, boxSizing: "borderBox"}}>
                <Table
                    dataSource={(this.props.dataSource ? this.props.dataSource : option_datass)}
                    columns={(this.props.columns ? this.props.columns : options_columns)}
                    bordered
                    pagination={false}
                />
                {/* 
                    dataSource={(this.props.dataSource ? this.props.dataSource : [{key: "1", option: "可选项"}])}
                    columns={(this.props.columns ? this.props.columns : [{title: "可选项", key: "option", dataIndex: "option"}])}
                    columns={cols}
                 */}
            </div>
        );
    }
}

OptionsItems.propTypes = {
    // dataSource: PropTypes.array.isRequired,
};

const OI = OptionsItems;

export {OI};
export default OI;