import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {WHLF} from '../../components/utils/WHLF';

class APP extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    }
    submitSearchHandler = (values) => {
        console.log(`search values`, values);
        // alert(`Testing...`);
        // Ajax/fetch query values
        // json server
    };
    render() {
        return (
            <div>
                <WHLF onSearch={this.submitSearchHandler} />
            </div>
        );
    }
}

APP.propTypes = {

};

export default APP;