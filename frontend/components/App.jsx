import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' className="header-left">
                <h2>HIPSTER<br />HABITAT</h2>
            </Link>
            <div className="header-right">
                <GreetingContainer />
            </div>
        </header>
    </div>
);

export default App; 