import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
    axios({
      method: 'get',
      url: 'https://127.0.0.1:5000/paper/id=${id}',
  }).then( res => {
      //setTitle(res.title);
      //setAuthor(res.official_author);
      //setAbstract(res.abstract);
      console.log(res);
  }).catch(error => {
      console.log(error);
      //navigate("/404");
  })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;