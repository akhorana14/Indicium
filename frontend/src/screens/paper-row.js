import './paper-row.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PaperRow(props) {

    return (
        <div className="rows" key={props.index} onClick={handleClick}>
        <div id="paper-row-title">
            {props.paper.title}
        </div>
        <div id="paper-row-author">
            Author: {props.paper.official_author}
        </div>
        </div>
    );
}

export default PaperRow;
