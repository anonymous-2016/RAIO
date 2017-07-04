import React, {Component} from 'react';

import {Progress} from 'antd';


const ProgressApp = () => {
    return(
        <div>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <div>
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
            </div>
        </div>
    );
};


export {ProgressApp};
export default ProgressApp;


