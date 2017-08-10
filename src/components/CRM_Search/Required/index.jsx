import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class RequiredItems
 * @extends {Component}
 */

class RequiredItems extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

RequiredItems.propTypes = {

};

export default RequiredItems;











/* 


表1:基金经理详细信息(基本资料)
A0	string	性别
A1	string	出生日期
A2	string	学历
A3	number	证券从业年限
A4	integer	历任管理基金数
A5	integer	历任基金经理公司数
A6	string	简历
A7	string	照片
A8	integer	PersonalCode（参数）

表2:基金经理详细信息(历任管理基金)
A0	string	管理公司
A1	string	基金简称
A2	string	投资类型
A3	string	到任日期(传参)
A4	string	离职日期(传参)
A5	number	任职年化回报
A6	integer	基金编码(不显示)

表3:基金经理详细信息(历史回报)
A0	string	历史回报
A1	number	3月
A2	number	6月
A3	number	YTD
A4	number	1年
A5	number	2年
A6	number	3年
A7	number	5年

表4:基金经理详细信息(风险分析)
A0	string	类型
A1	number	ɑ
A2	number	β
A3	number	SharpeRatio
A4	number	收益标准差
A5	string	风险度

表5:基金经理详细信息(折线图基金值)
A0	string	时间
A1	number	基金值
A2	number	同类平均
A3	number	沪深300

表6:基金经理详细信息(折线图同类平均)
A0	string	时间
A1	number	基金值
A2	number	同类平均
A3	number	沪深300








*/