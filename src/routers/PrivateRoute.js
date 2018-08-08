import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <div>
        <Header />
        <Route {...rest} component={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        )}>
        </Route>
    </div>
);

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStatetoProps)(PrivateRoute); 