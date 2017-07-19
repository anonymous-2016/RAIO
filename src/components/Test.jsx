import React, {Component} from 'react';


/* import {PM} from './IM/PM'; */

import {MM} from './IM/MM';

// index.jsx

// import moduleName from 'module';
// imp + Tab

class TestItem extends Component {
    render() {
        return (
            <div>
                <a href="#">TestItem</a>
                {/* <ModalName /> */}
                {/* <PM /> */}
                <MM />
            </div>
        );
    }
}

export default TestItem;