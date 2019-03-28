import React from 'react';


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