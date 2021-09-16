import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './view/Home';
import Schedule from './view/Schedule/Scheduling';
import Confirmation from './view/Schedule/Confirmation';
import Office from './view/Schedule/setOffice'

export default function Routes() {
    console.log("ROUTES")
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/office' exact component={Office} />
                <Route path='/schedule' exact component={Schedule} />
                <Route path='/confirmation' exact component={Confirmation} />
            </Switch>
        </BrowserRouter>
    )
}