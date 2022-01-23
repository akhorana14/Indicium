// import logo from './logo.svg';
import './home.css';
import React from 'react'
import axios from 'axios'

import PaperRow from './paper-row'

import { useEffect, useState } from 'react'

function Home() {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5000/get_all_on_sale_papers`,
        }).then( res => { 
            papers = res.data;
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    });

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
