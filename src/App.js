import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import FilmsPage from "./containers/FilmsPage/FilmsPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

export default function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <FilmsPage/>
                    </Route>

                    <Route
                        path="/not-found"
                        render={routeProps => (
                            <NotFoundPage {...routeProps}/>
                        )}
                    />

                    <Redirect
                        from="*"
                        to={{
                            pathname: '/not-found'
                        }}
                    />
                </Switch>
        </Router>
    );
}
