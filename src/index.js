import React from 'react';
import ReactDOM from 'react-dom';

import {AppIndex} from './app/new-index.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <AppIndex />, 
    document.getElementById('root')
); 

registerServiceWorker();
