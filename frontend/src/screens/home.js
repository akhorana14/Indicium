// import logo from './logo.svg';
import './home.css';
import React from 'react'
import axios from 'axios'

// import PaperRow from './paper-row'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [papers, setPapers] = useState([]);
    const [isBusy, setBusy] = useState(true);

    let navigate = useNavigate();

    function handleClick(id) {
        navigate(`/paper/${id}`);
    }

    useEffect(() => {
        if (isBusy) {
            axios({
                method: 'get',
                url: `http://localhost:5000/get_all_on_sale_papers`,
            }).then(res => { 
                setPapers(res.data.data);
                console.log(res.data.data);
                setBusy(false);
            }).catch(error => {
                console.log(error);
            })
        }
    });
    return !isBusy ? (
        <div id="background">

            <div id="home-page">
                <div id="title">Indicium</div>
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
    ) : (<div> Loading </div>)
}

export default Home;
