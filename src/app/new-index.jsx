import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {XHeader} from './Header';
import {XFooter} from './Footer';
import {CRMS}  from '../components/CRM_Search';

import './new-index.css';

class AppIndex extends Component {
    render() {
        return (
            <div className="app-index">
                <XHeader />
                <CRMS/>
                {/* <XFooter /> */}
            </div>
        );
    }
}

AppIndex.defaultProps = {
    // 
};

AppIndex.propTypes = {
    // 
};


export {AppIndex}
export default AppIndex;

/* 

alert("no search data fro mow!");

*/