import React, {Component} from 'react';

import {DatePicker} from 'antd';
const {MonthPicker, RangePicker} = DatePicker;

const onChange = (date, dateString) => {
    console.log(date, dateString);
    console.log(`date = \n`, date);
    // object
    console.log(`date1 = \n`, date[0]);
    console.log(`date2 = \n`, date[1]);
    // string
    console.log(`dateString = \n`, dateString);
    console.log(`dateString1 = \n`, dateString[0]);
    console.log(`dateString2 = \n`, dateString[1]);
};

const onStartChange = (date, dateString) => {
    // setState({});
};

const AppDatePicker = () => {
    return(
        <div>
            {/*<DatePicker onChange={onChange} />
            <br />
            <MonthPicker onChange={onChange} placeholder="Select month" />
            <br />*/}
            <RangePicker onChange={onChange} />
            <RangePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder={["请选择开始日期","请选择结束日期"]}
                onChange={(e) => onStartChange(e)}
                />
        </div>
    );
};



export {AppDatePicker};

export default AppDatePicker;









