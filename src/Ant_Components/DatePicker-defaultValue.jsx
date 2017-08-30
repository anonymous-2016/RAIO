import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.30
 * 
 * shit-antd-api 
 * 
 */


import { DatePicker } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;


class DatePickerDefaultVlaue extends Component {
    render() {
        const dateFormat = 'YYYY-MM-DD';
        return (
            <div>
                <DatePicker
                    defaultValue={
                        moment('2015-06-06', dateFormat)
                    }
                    // disabled 
                />
                <br />
                <MonthPicker
                    defaultValue={
                        moment('2015-06', 'YYYY-MM')
                    }
                    // disabled
                />
                <br />
                <RangePicker
                    defaultValue={
                        [
                            moment('2015-06-06', dateFormat),
                            moment('2015-06-06', dateFormat)
                        ]
                    }
                    // disabled
                />
            </div>
        );
    }
}

DatePickerDefaultVlaue.propTypes = {
    // monment: PropTypes.func.isRequired,
};

const DPDV = DatePickerDefaultVlaue;

export {DPDV};
export default DPDV;




// defaultValue={moment('2015-06-06', dateFormat)} 

// defaultValue={moment('2015-06', 'YYYY-MM')}

// defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
