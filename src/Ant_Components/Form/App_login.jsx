import React, { Component } from 'react';
import PropTypes from 'prop-types';

class APP extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    }
    submitSearchHandler = (values) => {
        console.log(`search values`, values);
        alert(`Testing...`);
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