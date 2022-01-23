import './buy.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
    const [currentOwner, setCurrentOwner] = useState("");
    const [onSale, setOnSale] = useState(false);

    let navigate = useNavigate()


    useEffect(() => {
        if (id === undefined) return;  
        axios({
            method: 'get',
            url: `http://localhost:5000/paper/id=${id}`,
        }).then( res => { 
            setTitle(res.data.title);
            setAuthor(res.data.official_author);
            setAbstract(res.data.abstract);
            setPrice(res.data.price);
            setCurrentOwner(res.data.current_owner);
            setOnSale(res.data.is_on_sale==="True")
            console.log(res);
        }).catch(error => {
            console.log(error);
            navigate("/404");
        })
        
    }, []);

    function buy() {
        axios({
            method: 'post',
            url: `http://localhost:5000/buy`,
            data: {
                buyer_id: get_id_from_cookie(),
                paper_id: id
            }
        }).then( res => { 
            console.log(res);
            window.location.reload(false);
        }).catch(error => {
            console.log(error);
            navigate("/404");
        })
    }
    
    function sell() {
        console.log(id);
        axios({
        method: 'post',
        url: `http://localhost:5000/sell`,
        data: {
            paper_id: id,
            price: price
        }
    }).then( res => { 
        console.log(res);
        window.location.reload(false);
    }).catch(error => {
        console.log(error);
        navigate("/404");
    })
    }

    function ifOwned() {
        return currentOwner==get_id_from_cookie();
    }


    function get_id_from_cookie() {
        return document.cookie
        .split('; ')
        .map(cookie => cookie.split('='))
        .find(cookie => cookie[0] === 'id')[1];
    }

    function display() {
        if(!ifOwned() && onSale){
            return <button id="buy-button" onClick={buy}>BUY ${Number(price).toFixed(2)}</button>;
        }

        if (ifOwned() && !onSale) {
            return (
                <div>
                    <input type="text" id="input-sell"
                    placeholder="Sell price"
                    onChange = {e => setPrice(e.target.value)}/>
                    <br />
                    <button id="sell-button" onClick={sell}>SELL</button>
                </div>
            )
        }

        return <div></div>
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
                {display()}
        </div>
        </div>
    );
}

export default Buy;
