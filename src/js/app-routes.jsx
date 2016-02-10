import React from 'react';
import {Route} from 'react-router';
import Master from './components/master';
import Home from './components/pages/home';


const AppRoutes = (
    <Route path='/' component={Master}>
        <Route path='home' component={Home} />
    </Route>
);

export default AppRoutes;
