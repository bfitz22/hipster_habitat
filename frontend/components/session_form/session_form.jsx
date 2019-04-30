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
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        location.href = this.props.host
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        if (this.props.host === "/#/listing_create/") {
            this.props.processForm(user).then(this.props.closeModal)
            .then(this.redirect); 
        } else {
        this.props.processForm(user).then(this.props.closeModal);
        }
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
                        {this.renderErrors()}
                        <div className="form-title">
                            <h1>Welcome Back</h1>
                            <br />
                            <p>It's about time for another camping trip</p>
                            </div>
                        <br/>
                        <br />
                        <div className="email">
                            <input type="email" 
                            value={this.state.email_address} 
                            placeholder="Email address" 
                            onChange={this.update("email_address")}/>
                        </div>
                        <br/>
                        <div className="password">
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password" 
                            onChange={this.update("password")}/>
                        </div>
                        <br/>
                        <button className="button" onClick={this.props.demo}>Demo</button>
                        <br/>
                        <input className="button" type="submit" value="Log In"/>
                        <br/>
                        <div className="form-bottom">
                            <p>Don't have a HipsterHabitat account?</p> 
                            {this.props.otherForm}
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        {this.renderErrors()}
                        <div className="form-title">
                            <h1>Join HipsterHabitat</h1>
                            <br /> 
                            <p>Discover the best camping near me</p>
                        </div>
                        <br />
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
                        <div className="email">
                            <input type="email" 
                            value={this.state.email_address} 
                            placeholder="Email address..." 
                            onChange={this.update("email_address")}/>
                        </div>
                        <br/>
                        <div className="password">
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password..." 
                            onChange={this.update("password")}/>
                        </div>
                        <br/>
                        <button className="button" onClick={(e) => {e.preventDefault(); this.props.demo()}}>Demo</button>
                        <br />
                        <input className="button" type="submit" value="Join HipsterHabitat"/>
                        <br />
                        <div className="form-bottom">
                            <p>Already a Hipster?</p>
                            {this.props.otherForm}
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(SessionForm);
