// import logo from './logo.svg';
import './login-form.css';
import React from 'react'

import { useNavigate } from 'react-router-dom'

class SignupForm extends React.Component {
    render() {
        return (
                <div id="login-form">
                    <div id="login-title">
                        Login with email
                    </div>
                    <input type="text" id="input-email" className="input" placeholder="Email" />
                    <input type="password" id="input-password" className="input" placeholder="Password" />
                    <input type="password" id="input-password-2" className="input" placeholder="Password" />
                    <button id="login-submit" onClick={this.goHome}>SIGN UP</button>
                    <div id="no-account">Already have an account?</div>
                    <div id="sign-up" onClick={this.props.toggle}>LOG IN NOW</div>
                </div>
        )
    }

    goHome() {
        //this.navigate("/home", { replace: true });
    }
}

export default SignupForm;
