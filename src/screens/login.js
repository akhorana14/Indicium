// import logo from './logo.svg';
import './login.css';
import React from 'react'

import LoginForm from './registration/login-form'
import SignupForm from './registration/signup-form';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            show_login: true
        };
    }

    toggle() {
        this.setState({
            show_login: !this.state.show_login
        });
    }

    render() {
        if (this.state.show_login) {
            return (
                <div id="background">
                    <LoginForm toggle={this.toggle}></LoginForm>
                </div>
            )
        } else {
            return (
                <div id="background">
                    <SignupForm toggle={this.toggle}></SignupForm>
                </div>
            )
        }
    }
}

export default Login;
