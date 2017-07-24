import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {LS} from './LS';
import {LT} from './LT';


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

class LibsManagement extends Component {
    render() {
        return (
            <div>
                <LS />
                <LT />
            </div>
        );
    }
}

LibsManagement.propTypes = {

};

const LM = LibsManagement;

export {LM}
export default LM;