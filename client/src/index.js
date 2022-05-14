import React from 'react';
import App from './App';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css'

import reducers from './reducers';
const store = createStore(reducers,compose(applyMiddleware(thunk)));


const container = document.getElementById('root');
ReactDom.render(
    <Provider store={store}>
        <App/> 
    </Provider>
    ,container);