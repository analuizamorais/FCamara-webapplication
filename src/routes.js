import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './view/Home';
import Schedule from './Scheduling';

export default function Routes() {
    console.log("ROUTES")
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/schedule' exact component={Schedule} />
            </Switch>
        </BrowserRouter>
    )
}