import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

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
    this.loginDemo = this.loginDemo.bind(this);
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

    loginDemo(e) {
        e.preventDefault(e);
        const user = {
            email_address: "yogibear@picnicbasket.com",
            password: "123456",
            first_name: "Yogi",
            last_name: "Bear" };
        dispatch(login(user)).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        if (this.props.formType === 'login') {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="close-x" onClick={this.props.closeModal}>X</div>
                        {this.renderErrors()}
                        <h2>Welcome Back</h2>
                        It's about time for another camping trip
                        <br/>
                        <div className="login-email">
                            <input type="text" 
                            value={this.state.email_address} 
                            placeholder="Email address" 
                            onChange={this.update("email_address")}/>
                        </div>
                        <br/>
                        <div className="login-password">
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password" 
                            onChange={this.update("password")}/>
                        </div>
                        <br/>
                        <button className="button" onClick={this.loginDemo}>Demo</button>
                        <br/>
                        <input className="button" type="submit" value="Log In"/>
                        <br/>
                        Don't have a HipsterHabitat account? 
                        {this.props.otherForm}
                    </form>
                </div>
            )
        } else {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <div className="close-x" onClick={this.props.closeModal}>X</div>
                        {this.renderErrors()}
                        <h2>Join HipsterHabitat</h2>
                        Discover the best camping near me
                        <br />
                        <div className="names">
                            <input type="text" 
                            value={this.state.first_name} 
                            placeholder="First name..." 
                            onChange={this.update("first_name")}/>
                            <input type="text" 
                            value={this.state.last_name} 
                            placeholder="Last name..." 
                            onChange={this.update("last_name")}/>
                        </div>
                        <br/>
                        <div className="signup-email">
                            <input type="text" 
                            value={this.state.email_address} 
                            placeholder="Email address..." 
                            onChange={this.update("email_address")}/>
                        </div>
                        <br/>
                        <div className="signup-password">
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password..." 
                            onChange={this.update("password")}/>
                        </div>
                        <br/>
                        <button className="button" onClick={this.loginDemo}>Demo</button>
                        <br />
                        <input className="button" type="submit" value="Join HipsterHabitat"/>
                        <br />
                        Already a Hipster?
                        {this.props.otherForm}
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(SessionForm);
