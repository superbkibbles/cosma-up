import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={() => <div>main</div>} />
        </Switch>
    )
}