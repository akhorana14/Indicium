// import logo from './logo.svg';
import './login-form.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    let navigate = useNavigate();
    useEffect(() => {    
        document.cookie = "id=; Max-Age=0"
        /*
        if (document.cookie.includes("id=")) {
            navigate("/home")
        }
        */
    }); 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        
    }

    return (
        <div id="login-form">
            <div id="login-title">
                Log in with username
            </div>
            <input type="text" id="input-email" className="input" placeholder="Username"  onChange = {e => setUsername(e.target.value)}/>
            <input type="password" id="input-password" className="input" placeholder="Password"  onChange = {e => setPassword(e.target.value)}/>
            <button id="login-submit" onClick={handleLogin}>LOG IN</button>
            <div id="no-account">Don't have an account?</div>
            <div id="sign-up-wrapper">
                <div id="sign-up" onClick={props.toggle}>SIGN UP NOW</div>
            </div>
        </div>
    )
}

export default LoginForm;
