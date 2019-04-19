import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const Auth = ({ currentUser, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            currentUser ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
)

export const AuthRoute = withRouter(connect(msp)(Auth));