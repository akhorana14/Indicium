import './buy.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function buy() {
    console.log("Buying paper");
}

function sell() {
    console.log("Selling paper");
}

function Author(name) {
    return (
        <span>{name}</span>
    );
}


function Buy() {
    const { id } = useParams();
    const [author, setAuthor] = useState("Loading...");
    const [title, setTitle] = useState("Loading...");
    const [abstract, setAbstract] = useState("Loading...");
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

    function ifOwned() {
        return false;
    }

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
                {
                    ifOwned() ? 
                    (<button id="buy-button" onClick={buy}>BUY ${Number(price).toFixed(2)}</button>) : 
                    (
                        <div>
                       <input type="text" id="input-sell"
                        placeholder="Sell price"
                        onChange = {e => setPrice(e.target.value)}/>
                        <br />
                        <button id="sell-button" onClick={sell}>SELL </button>
                        </div>
                    )
                }
        </div>
        </div>
    );
}

export default Buy;
