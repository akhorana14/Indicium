// import logo from './logo.svg';
import './home.css';
import React from 'react'

import PaperRow from './paper-row'

import {useState} from 'react'

function Home() {
        const [papers, setPapers] = useState([]);
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
