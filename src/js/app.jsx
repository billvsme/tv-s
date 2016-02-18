import React from 'react'
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './app-routes';


ReactDOM.render(
    <Router>
        {AppRoutes}
    </Router>,
    document.getElementById('main')
)
