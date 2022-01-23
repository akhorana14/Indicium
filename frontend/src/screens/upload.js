// import logo from './logo.svg';
import './upload.css';

import React, { useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom'

function Upload() {
    let navigate = useNavigate();

    function get_id_from_cookie() {
        return document.cookie
        .split('; ')
        .map(cookie => cookie.split('='))
        .find(cookie => cookie[0] === 'id')[1];
    }

    function handleUpload() {
        axios({
            method: 'post',
            url: `http://localhost:5000/create_paper`,
            data: {
                title: title,
                author_id: get_id_from_cookie(),
                link: text,
                abstract: text.substring(0, text.length/3),
                num_papers: count
            }
        }).then( res => { 
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

        return (
            <div id="upload-form">
            <div id="header">
                <div id="upload-title">
                    Upload Research Paper
                </div>

                <div>
                    <span id="profile"onClick={() => navigate("/home")}>GO HOME</span>
                    <span id="profile"onClick={() => navigate("/profile")}>VIEW PROFILE</span>
                    <span id="profile"onClick={() => navigate("/login")}>SIGN OUT</span>
                </div>
            </div>
                <input type="text" id="input-title" className="input-upload" placeholder="Title"  onChange = {e => setTitle(e.target.value)}/><br></br>
                <input type="text" id="input-count" className="input-upload" placeholder="Copies To Generate"  onChange = {e => setCount(e.target.value)}/>
                <textarea id="paper-text" placeholder="Enter Paper Text" onChange = {e => setText(e.target.value)}></textarea>
                <button id="upload-submit" onClick={handleUpload}>UPLOAD TEXT</button>
            </div>
        )
}

export default Upload;
