import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={() => <div>main</div>} />
            <Route exact path='/about' component={() => <div>about</div>} />
        </Switch>
    )
}