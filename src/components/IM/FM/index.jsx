import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {FS} from './FS';
import {FT} from './FT';


import {
    Form,
    Icon,
    Input,
    InputNumber,
    Radio,
    Button,
    Modal,
    Cascader,
    Select
} from 'antd';



const Option = Select.Option;
const FormItem = Form.Item;

class FeaturesManagement extends Component {
    render() {
        return (
            <div>
                <FS />
                <FT />
            </div>
        );
    }
}

FeaturesManagement.propTypes = {

};


const FM = FeaturesManagement;

export {FM};
export default FM;