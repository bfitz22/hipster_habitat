import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
// import Root from '/components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    ReactDOM.render(<h1>Welcome to HipsterHabitat</h1>, root);
        // <Root store = { store } />
}) 


