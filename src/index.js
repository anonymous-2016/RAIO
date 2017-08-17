import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import {App} from './app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* import {allReducers} from './Reducers/index';

let store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
); */



ReactDOM.render(
    <App />, 
    document.getElementById('root')
); 

registerServiceWorker();
