// import logo from './logo.svg';
import './login-form.css';
import React from 'react'

class LoginForm extends React.Component {
    render() {
        return (
                <div id="login-form">
                    <div id="login-title">
                        Login with email
                    </div>
                    <input type="text" id="input-email" className="input" placeholder="Email" />
                    <input type="password" id="input-password" className="input" placeholder="Password" />
                    <button id="login-submit" onClick={this.goHome}>LOGIN</button>
                    <div id="no-account">Don't have an account?</div>
                    <div id="sign-up" onClick={this.props.toggle}>SIGN UP NOW</div>
                </div>
        )
    }

    goHome() {
        window.location.pathname = '/home';
    }
}

export default LoginForm;
