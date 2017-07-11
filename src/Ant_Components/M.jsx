import React, {Component} from 'react';



import { Modal, Button } from 'antd';

class M extends React.Component {
  state = {
    modal2Visible: false,
  }
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
        <Modal
          title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export {M};
export default M;