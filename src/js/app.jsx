import React from 'react'
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRoutes from './app-routes';

injectTapEventPlugin();

ReactDOM.render(
    <Router>
        {AppRoutes}
    </Router>,
    document.getElementById('main')
)
