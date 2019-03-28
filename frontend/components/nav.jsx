import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

class Nav extends React.Component {
    render() {
        return(
        <div className="nav">
            <Modal />
            <header className="header">
                <Link className="header-left" to='/'>
                    <h1>HIPSTER<br />HABITAT</h1>
                </Link>
                <div className="header-right">
                    <GreetingContainer />
                </div>
            </header>
        </div>
        )
    }
};

export default Nav;