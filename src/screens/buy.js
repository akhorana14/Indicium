import './buy.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function buy() {
    console.log("Buying paper");
}

function Author(name) {
    return (
        <span>{name}</span>
    );
}

function Buy() {
    const { id } = useParams();
    const [author, setAuthor] = useState("Dr. Arjun Khorana");
    const [title, setTitle] = useState("Title");
    const [abstract, setAbstract] = useState("Loreum Ipsum");

    let navigate = useNavigate()

    useEffect(() => {
        // Make fetch request
        axios({
            method: 'get',
            url: `https://localhost:5000/paper/${id}`,
        }).then( res => { 
            setTitle(res.title);
            setAuthor(res.official_author);
            setAbstract(res.abstract);
        }).catch(error => {
            console.log(error);
            navigate("/404");
        })
    });

    return (
        <div id="buy-background">
            <div id="buy-view"> 
                <div id="buy-title">
                    {title}
                </div>
                <div id="buy-authors">
                    {Author(author)}
                </div>
                <div id="buy-abstract"> 
                    {abstract}
                </div>
                <button id="buy-button" onClick={buy}>BUY</button>
            </div>
        </div>
    );
}

export default Buy;
