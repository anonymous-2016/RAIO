import React, {Component} from 'react';

import {Modal, Button} from 'antd';
const confirm = Modal.confirm;

const showConfirm = () => {
    confirm({
        title: '真的要删除它吗？',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk(){
            return new Promise(
                (resolve, reject) => {
                    let result = setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    console.log(`result = \n`, result);
                    return result;
                }
            ).catch(
                (reject) => {
                    console.log(`reject =\n `, reject);
                    console.log('Oops errors!');
                }
            );
        },
        onCancel(){}
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
