// import logo from './logo.svg';
import './profile.css';
import React from 'react'
import axios from 'axios'

// import PaperRow from './paper-row'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [papers, setPapers] = useState([]);
    const [isBusy, setBusy] = useState(true);
    const [balance, setBalance]  = useState("--.--");

    let navigate = useNavigate();

    function handleClick(id) {
        navigate(`/paper/${id}`);
    }


    function get_id_from_cookie() {
        return document.cookie
        .split('; ')
        .map(cookie => cookie.split('='))
        .find(cookie => cookie[0] === 'id')[1];
    }

    useEffect(() => {
        if (isBusy) {
            axios({
                method: 'get',
                url: `http://localhost:5000/get_profile_papers/id=${get_id_from_cookie()}`,
            }).then(res => { 
                console.log(res.data.data);
                setPapers(res.data.data);
                setBusy(false);
            }).catch(error => {
                console.log(error);
            })

            axios({
                method: 'get',
                url: `http://localhost:5000/user/id=${get_id_from_cookie()}`,
            }).then(res => { 
                setBalance(res.data.wallet);
                setBusy(false);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [setBusy, setPapers]);

        return (
                <div id="background">
                    <div id="profile-page">
                        <div id="title">My Profile</div>

                        <div>
                            <span id="profile"onClick={() => navigate("/home")}>GO HOME</span>
                            <span id="profile"onClick={() => navigate("/upload")}>UPLOAD PAPER</span>
                            <span id="profile"onClick={() => navigate("/login")}>SIGN OUT</span>
                        </div>

                        <div id="account-balance-info">Account Balance: ${balance}</div>
                        <div id="papers-title">Papers Owned</div>
                        {
                        papers.map(function(paper, index) {
                            // return PaperRow({paper, index});
        return (<div className="rows" key={index} onClick={() => {handleClick(paper.id)}}>
        <div id="paper-row-title">
            {paper.title}
        </div>
        <div id="paper-row-author">
            Author: {paper.official_author}
        </div>
        </div>)
                        })
                    }
                    </div>

                </div>
        )
}

export default Profile;
