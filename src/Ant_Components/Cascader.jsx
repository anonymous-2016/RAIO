import React, {Component} from 'react';


import city from '../../utils/city';

// const city = [{}];

const CM = () => {
    let handleChange = () => {
        // handleChange
    };
    return(
        <div>
            <Cascader
                size="large"
                style={{width: '100%'}}
                options={city}
                placeholder="Please pick an address"
                onChange={handleChange.bind(null, 'address')}
            />
        </div>
    );
}

