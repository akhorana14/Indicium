// import logo from './logo.svg';
import './upload.css';
import React from 'react'

function Upload() {
        return (
            <div id="upload-form">
                <div id="upload-title">
                    Upload research paper
                </div>
                <input type="text" id="input-title" className="input-upload" placeholder="Title" /><br></br>
                <input type="text" id="input-author" className="input-upload" placeholder="Author" /><br></br>
                <input type="text" id="input-count" className="input-upload" placeholder="Copies To Generate" />
                <textarea id="paper-text" placeholder="Enter Paper Text"></textarea>
                <button id="upload-submit">UPLOAD TEXT</button>
            </div>
        )
}

export default Upload;