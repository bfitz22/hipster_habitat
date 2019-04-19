import React from 'react';


class Dropdown extends React.Component  {
    handleClickLogout() {
        this.props.logout().then(this.props.closeModal())
    }

    handleClickHost() {
        let path = "/listing_create/";
        this.state.history.push(path);
    }
    
    render() {
        const loggedIn = () => (
            <div className="dropdown-menu">
                <div className="menu">
                    <button>Manage Account</button>
                    <button onClick={this.handleClickHost.bind(this)}>Host</button>
                    <button onClick={this.handleClickLogout.bind(this)} >Log Out</button>
                </div> 
            </div>
        );
        const loggedOut = () => (
            <div className="dropdown-menu">
                <div className="menu">
                    <button onClick={() => this.props.openModal('login')}>Start Hosting</button>
                    <button>Community</button>
                    <button>Help</button>
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