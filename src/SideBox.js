import React, {Component} from 'react';
import PropTypes from 'prop-types';


import Sidebar from './Sidebar.js';


import Item1 from './components/Item1.js';
import Item2 from './components/Item2.js';
import Item3 from './components/Item3.js';


class SideBox extends Component {
    render(){
        return(
            <div className="SideBox-body">
                <Sidebar routes={this.props.routes}/>
            </div>
        );
    }
}

export default SideBox;