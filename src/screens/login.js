// import logo from './logo.svg';
import './login.css';
import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div id="background">
                <div id="login-form">
                    <div id="login-title">
                        Login with email
                    </div>
                    <input type="text" id="input-email" class="input" placeholder="Email" />
                    <input type="text" id="input-password" class="input" placeholder="Password" />
                </div>
            </div>
        )
    }
}

export default Login;
