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
                <div className="header-left" >
                    <Link className="main-logo"to='/'>
                        <h1>HIPSTER<br/>HABITAT</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="greeting">
                        <GreetingContainer />
                    </div>
                    <img className="dropdown" src={window.dropdownURL} />
                </div>
            </header>
        </div>
        )
    }
};

export default Nav;