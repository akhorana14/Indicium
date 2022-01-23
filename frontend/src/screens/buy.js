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
    const [price, setPrice] = useState(0.00);

    let navigate = useNavigate()

    useEffect(() => {
        
        axios({
            method: 'get',
            url: `http://localhost:5000/paper/id=${id}`,
        }).then( res => { 
            setTitle(res.data.title);
            setAuthor(res.data.official_author);
            setAbstract(res.data.abstract);
            setPrice(res.data.price);
            console.log(res);
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
                <button id="buy-button" onClick={buy}>BUY ${Number(price).toFixed(2)}</button>
            </div>
        </div>
    );
}

export default Buy;
