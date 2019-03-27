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
            <Link to='/' className="header-link">
                <h1>HIPSTER<br/>HABITAT</h1>
                <GreetingContainer />
            </Link>
        </header>
    </div>
);

export default App; 