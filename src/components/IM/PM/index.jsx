import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {PMModal} from './Modal';

// imp

class PM extends Component {
    render () {
        return (
            <div>
                {/* PM  */}
                <PMModal />
            </div>
        )
    }
}

export {PM};
export default PM;


