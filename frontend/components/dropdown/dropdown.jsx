import React from 'react';
import { Link } from 'react-router-dom';


class Dropdown extends React.Component  {
    handleClick() {
        this.props.logout().then(this.props.closeModal())
    }
    
    render() {
        const loggedIn = () => (
            <div className="dropdown-menu">
                <div className="menu">
                    <Link className="dropdown-links" to="/" onClick={() => this.props.closeModal()}> Manage Account</Link>
                    <Link className="dropdown-links" to="/listing_create/" onClick={() => this.props.closeModal()}>Host</Link>
                    <Link className="dropdown-links" to="/" onClick={this.handleClick.bind(this)}>Log Out</Link>
                </div> 
            </div>
        );
        const loggedOut = () => (
            <div className="dropdown-menu">
                <div className="menu">
                    <Link className="dropdown-links" to="/" onClick={() => this.props.openModal('login-host')}>Start Hosting</Link>
                    <Link className="dropdown-links" to="/"onClick={() => this.props.closeModal()}> Community</Link>
                    <Link className="dropdown-links" to="/"onClick={() => this.props.closeModal()}> Help</Link>
                </div> 
            </div>
        );
    let result = this.props.currentUser ? loggedIn() : loggedOut(this.props.logout)
    return (
        <>
        {result}
        </>
    );
    }
};

export default Dropdown; 