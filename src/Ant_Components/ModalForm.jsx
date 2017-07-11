import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    InputNumber,
    Radio,
    Button,
    Modal,
    Cascader
} from 'antd';


const FormItem = Form.Item;


class ModalForm extends React.Component {
    render() {
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => this.props.setModalVisible(true)}
                    >
                    垂直居中 模态对话框
                </Button>
                <Modal
                    title="垂直居中的模态对话框"
                    wrapClassName="vertical-center-modal"
                    visible={this.props.showSate}
                    onOk={() => this.props.onOk(false)}
                    onCancel={() => this.props.setModalVisible(false)}
                    >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <div>
                        {/*{this.props}*/}
                        {this.props.children}
                    </div>
                </Modal>
            </div>
        );
    }
}

// const MF = ModalForm;

export {ModalForm};
export default ModalForm;



/* use css to set position of modal */

/*

.vertical-center-modal {
    text-align: center;
    white-space: nowrap;
}

.vertical-center-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
}

.vertical-center-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0;
    text-align: left;
}



*/