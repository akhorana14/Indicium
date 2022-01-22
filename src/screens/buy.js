import './buy.css'
import { useParams } from 'react-router-dom'

function buy() {
    console.log("Buying paper");
}

function Author(name) {
    return (
        <span>{name}</span>
    );
}

function Buy() {
    const { id } = useParams();
    return (
        <div id="buy-background">
            <div id="buy-view"> 
                <div id="buy-title">
                    ApproxDet: Content and Contention-Aware Approximate Object Detection for Mobiles
                </div>
                <div id="buy-authors">
                    {Author("Dr. Arjun Khorana")}, {Author("Dr. Abhinav Dusi")}, {Author("Dr. Jacob Zietek")}
                    {id}
                </div>
                <div id="buy-abstract"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                </div>
                <button id="buy-button" onClick={buy}>BUY</button>
            </div>
        </div>
    );
}

export default Buy;
