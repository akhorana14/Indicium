// import logo from './logo.svg';
import './login-form.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    let navigate = useNavigate();
    function goHome() {
        navigate("/home");
    }

    return (
        <div id="login-form">
            <div id="login-title">
                Log in with email
            </div>
            <input type="text" id="input-email" className="input" placeholder="Email" />
            <input type="password" id="input-password" className="input" placeholder="Password" />
            <button id="login-submit" onClick={goHome}>LOG IN</button>
            <div id="no-account">Don't have an account?</div>
            <div id="sign-up-wrapper">
                <div id="sign-up" onClick={props.toggle}>SIGN UP NOW</div>
            </div>
        </div>
    )
}

export default LoginForm;
