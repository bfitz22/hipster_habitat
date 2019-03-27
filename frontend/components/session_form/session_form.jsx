import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_address: "",
            password: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }

    render() {
        if (this.props.formType === 'login') {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome Back
                        <br/>
                        <input type="text" value="Email address"/>
                        <br/>
                        <input type="password" value="Password"/>
                        <br/>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        Join HipsterHabitat
                        <br />
                        <input type="text" value="First name..."/>
                        <input type="text" value="Last name..."/>
                        <br/>
                        <input type="text" value="Email address..."/>
                        <br/>
                        <input type="password" value="Password"/>
                        <br/>
                        <input type="submit" value="Join HipsterHabitat"/>
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(SessionForm);