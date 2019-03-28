import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_address: "",
            password: "",
            first_name: "",
            last_name: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

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
                        <h2>Welcome Back</h2>
                        It's about time for another camping trip
                        <br/>
                        <input type="text" 
                        value={this.state.email_address} 
                        placeholder="Email address" 
                        onChange={this.update("email_address")}/>
                        <br/>
                        <input type="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={this.update("password")}/>
                        <br/>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <h2>Join HipsterHabitat</h2>
                        Discover the best camping near me
                        <br />
                        <input type="text" 
                        value={this.state.first_name} 
                        placeholder="First name..." 
                        onChange={this.update("first_name")}/>
                        <input type="text" 
                        value={this.state.last_name} 
                        placeholder="Last name..." 
                        onChange={this.update("last_name")}/>
                        <br/>
                        <input type="text" 
                        value={this.state.email_address} 
                        placeholder="Email address..." 
                        onChange={this.update("email_address")}/>
                        <br/>
                        <input type="password" 
                        value={this.state.password} 
                        placeholder="Password..." 
                        onChange={this.update("password")}/>
                        <br/>
                        <input type="submit" value="Join HipsterHabitat"/>
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(SessionForm);
