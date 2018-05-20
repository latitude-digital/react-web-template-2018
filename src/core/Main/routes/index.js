import React from 'react'

import {
    Switch,
    Route,
} from 'react-router-dom'

import {
    Home,
    Testing,
    NotFound,
} from './lazy_routes'

export default (
    <Switch>

        <Route
            exact
            path="/"
            component={Home}
        />

        <Route
            exact
            path="/testing"
            component={Testing}
        />

        <Route component={NotFound}/>

    </Switch>
);
