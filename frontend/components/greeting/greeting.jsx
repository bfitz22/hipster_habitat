import React from 'react';
import { Link } from 'react-router-dom';

// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         if (this.props.currentUser) {
//             return (
//                 <>
//                     <h3>Welcome {this.props.currentUser.first_name}</h3>
//                     <button onClick={this.props.logout}>Logout</button>
//                 </>
//             )
//         } else {
//             return (
//                 <> 
//                     <Link to='/signup'>Signup</Link>
//                     <br/>
//                     <Link to='/login'>Login</Link>
//                 </>
//             )
//         }
//     }
// }

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Log in</button>
            <button onClick={() => openModal('signup')}>Sign up</button>
        </nav>
    );
    const endSession = () => (
        <nav className="logout">
            <button onClick={logout}>Log out</button>
        </nav>
    );
    return (
        currentUser ? endSession(logout) : sessionLinks()
    );
};

export default Greeting; 