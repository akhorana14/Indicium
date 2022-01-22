// import logo from './logo.svg';
import './profile.css';
import React from 'react'
import PaperRow from './paper-row'

function Profile() {
    var papers = [
        {
            title: 'The effect of dielectric environment on the neutral and charged dark excitons in WSe2 monolayer',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 1
        }, 
        {
            title: 'Article 2',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 2
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 3
        },
    ];
        return (
                <div id="background">
                    <div id="profile-page">
                        <div id="title">My Profile</div>
                        <div id="account-balance-info">Account Balance: $100.00</div>
                        <div id="papers-title">Papers Owned</div>
                            {papers.map(function(paper, index) {
                                return PaperRow({paper, index});
                            })}
                    </div>

                </div>
        )
}

export default Profile;
