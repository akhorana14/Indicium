// import logo from './logo.svg';
import './signup-form.css';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignupForm(props) {
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
    const [password2, setPassword2] = useState("");

    function handleSignup() {
        if (password2 !== password) {
            alert("Passwards don't match");
        } else {
            axios({
                method: 'post',
                url: `http://localhost:5000/user_signup`,
                data: {
                    username: username,
                    password: password,
                }
            }).then( res => { 
                console.log(res);
                document.cookie = 'id=' + res.data.id + ';';
                navigate("/home")
            }).catch(error => {
                console.log(error);
                navigate("/404");
            })
        }
    }
    

    return (
        <div id="signup-form">
            <div id="signup-title">
                Sign up with username
            </div>
            <input type="text" id="input-email" className="input" placeholder="Username" onChange = {e => setUsername(e.target.value)} />
            <input type="password" id="input-password" className="input" placeholder="Password" onChange = {e => setPassword(e.target.value)} />
            <input type="password" id="input-password-2" className="input" placeholder="Retype password" onChange = {e => setPassword2(e.target.value)} />
            <button id="signup-submit" onClick={handleSignup}>SIGN UP</button>
            <div id="no-account">Already have an account?</div>
            <div id="log-in-wrapper">
                <div id="log-in" onClick={props.toggle}>LOG IN NOW</div>
            </div>
        </div>
    )
}

export default SignupForm;
