import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./containers/HomePage";

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={() => <div>about</div>} />
        </Switch>
    )
}