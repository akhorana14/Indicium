// import logo from './logo.svg';
import './home.css';
import React from 'react'

class Home extends React.Component {
    render() {
        var names = ['Article 1', 'Article 2', 'Article 3'];
        return (
                <div id="background">
                    <div id="home-page">
                        <div id="title">Indicium</div>
                        <table>
                            {names.map(function(name, index) {
                                return <tr key={index}>{name}</tr>
                            })}
                        </table>
                    </div>

                </div>
        )
    }
}

export default Home;
