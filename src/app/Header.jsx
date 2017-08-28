import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * 
 */
import logo from '../img/logo.png';

class XHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" style={{}} />
                <span className="crm-title">
                    CRM 权限认证管理系统 - API 查询工具
                </span>
            </div>
        );
    }
}

XHeader.propTypes = {

};

export {XHeader};
export default XHeader;