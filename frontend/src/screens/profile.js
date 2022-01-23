// import logo from './logo.svg';
import './profile.css';
import React from 'react'
import PaperRow from './paper-row'

import {useState, useEffect} from 'react'

function Profile() {

    const [papers, setPapers] = useState([]);
    const [balance, setBalance] = useState(0); 

    useEffect(() => {

    }) 

        return (
                <div id="background">
                    <div id="profile-page">
                        <div id="title">My Profile</div>
                        <div id="account-balance-info">Account Balance: ${balance}</div>
                        <div id="papers-title">Papers Owned</div>
                            {papers.map(function(paper, index) {
                                return PaperRow({paper, index});
                            })}
                    </div>

                </div>
        )
}

export default Profile;
