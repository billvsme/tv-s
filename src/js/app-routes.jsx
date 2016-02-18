import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Master from './components/master';
import Home from './components/pages/home';
import Api from './components/pages/api';


const AppRoutes = (
    <Route path='/' component={Master}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='api' component={Api} />
    </Route>
);

export default AppRoutes;
