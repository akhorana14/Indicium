// import logo from './logo.svg';
import './home.css';
import React from 'react'

import PaperRow from './paper-row'

function Home() {
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
        {
            title: 'The effect of dielectric environment on the neutral and charged dark excitons in WSe2 monolayer',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 4
        }, 
        {
            title: 'Article 2',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 5
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        },
        {
            title: 'Article 3',
            author: 'Dr. Arjun \'Bezos Beta\' Khorana',
            id: 6
        }


    ];
        return (
                <div id="background">
                    <div id="home-page">
                        <div id="title">Indicium</div>
                            {papers.map(function(paper, index) {
                                return PaperRow({paper, index});
                            })}
                    </div>

                </div>
        )
}

export default Home;
