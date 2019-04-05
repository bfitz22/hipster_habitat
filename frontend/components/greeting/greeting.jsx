import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="button-nav">
            <button className="login" onClick={() => openModal('login')}>Log in</button>
            <button className="signup" onClick={() => openModal('signup')}>Sign up</button>
        </nav>
    );
    const endSession = () => (
        <nav className="logout-nav">
            <button className="logout" onClick={logout}>Log out</button>
        </nav>
    );
    return (
        currentUser ? endSession(logout) : sessionLinks()
    );
};

export default Greeting; 