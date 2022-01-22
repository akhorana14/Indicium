// import logo from './logo.svg';
import './signup-form.css';
import React from 'react'

import { useNavigate } from 'react-router-dom'

class SignupForm extends React.Component {
    render() {
        return (
                <div id="signup-form">
                    <div id="signup-title">
                        Sign up with email
                    </div>
                    <input type="text" id="input-email" className="input" placeholder="Email" />
                    <input type="password" id="input-password" className="input" placeholder="Password" />
                    <input type="password" id="input-password-2" className="input" placeholder="Retype password" />
                    <button id="signup-submit" onClick={this.goHome}>SIGN UP</button>
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
