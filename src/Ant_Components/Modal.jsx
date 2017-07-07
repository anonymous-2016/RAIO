import React, {Component} from 'react';

import {Modal, Button} from 'antd';

const confirm = Modal.confirm;

const showConfirm = () => {
    confirm({
        title: '真的要删除它吗？',
        content: '单击确定按钮后，此对话框将在1秒后关闭',
        onOk(){
            return new Promise((resolve, reject) => {
                let result = setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                console.log(`result = \n`, result);
                return result;
            })
            .then((result) => {
                if(result > 0.5){
                    alert(`resolve it!`);
                }
            })
            .catch(
                (reject) => {
                    console.log(`reject =\n `, reject);
                    console.log('Oops errors!');
                }
            );
        },
        onCancel(){
            alert(`you have cancled it!`);
        }
    });
};


const ModalApp = (props) => {
    return(
        <div>
            <Button onClick={showConfirm}>
                Confirm
            </Button>
        </div>
    );
};

export {ModalApp};
export default ModalApp;
