import React, {Component} from 'react';

import { Modal, Button } from 'antd';

class M extends React.Component {
    state = {
        modalVisible: false
    }
    setModalVisible = (value) =>{
        this.setState(
            {
                modalVisible: value
            }
        );
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.setModalVisible(true)}>
                    self modalVisible
                </Button>
                <Modal
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                <hr/>
                <Button type="primary" onClick={() => this.props.onClick(true)}>
                    parent modalVisible
                </Button>
                <Modal
                    title="props modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.props.showSate}
                    onOk={() => this.props.onClick(false)}
                    onCancel={() => this.props.onClick(false)}>
                    <div>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                        props modal dialog <br/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export {M};
export default M;