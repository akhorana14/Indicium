// import logo from './logo.svg';
import './signup-form.css';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function SignupForm(props) {
    let navigate = useNavigate();
    useEffect(() => {
        console.log(document.cookie)
    }); 

        function handleSignup() {
            axios({
                method: 'post',
                url: `http://localhost:5000/user_signup`,
            }).then( res => { 
                //res = user object
                
                //setTitle(res.data.title);
                //setAuthor(res.data.official_author);
                //setAbstract(res.data.abstract);
                //setPrice(res.data.price);
                console.log(res);
            }).catch(error => {
                console.log(error);
                navigate("/404");
            })
        navigate("/home");
        }
    

    return (
        <div id="signup-form">
            <div id="signup-title">
                Sign up with email
            </div>
            <input type="text" id="input-email" className="input" placeholder="Email" />
            <input type="password" id="input-password" className="input" placeholder="Password" />
            <input type="password" id="input-password-2" className="input" placeholder="Retype password" />
            <button id="signup-submit" onClick={handleSignup}>SIGN UP</button>
            <div id="no-account">Already have an account?</div>
            <div id="log-in-wrapper">
                <div id="log-in" onClick={props.toggle}>LOG IN NOW</div>
            </div>
        </div>
    )
}

export default SignupForm;
