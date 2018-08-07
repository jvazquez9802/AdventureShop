import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allData from './Data/index';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(allData);

ReactDOM.render(
    <Provider>
        <Router>
            <AppRoutes/>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
