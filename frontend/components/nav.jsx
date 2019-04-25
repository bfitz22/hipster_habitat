import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { openModal } from '../actions/modal_actions';
 
class Nav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     showMenu: false
        // };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return(
        <div className="nav">
            <Modal />
            <header className="header">
                <div className="header-left" >
                    <Link className="main-logo-link"to='/'>
                    <img className="main-logo" src={window.logoURL}/>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="greeting">
                        <GreetingContainer />
                    </div>
                        <button className="dropdown-button" onClick={this.props.dropdown}>
                        <img className="dropdown-icon" src={window.dropdownURL} />
                    </button> 
                </div>
            </header>
        </div>
        )
    }
};

const msp = state => {
    return {
        showMenu: false
    }
}

const mdp = dispatch => {
    return{
        dropdown: () => dispatch(openModal('dropdown'))
    }
}

export default connect(msp, mdp)(Nav);