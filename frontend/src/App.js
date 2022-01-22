import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Login from './screens/login'
import Home from './screens/home'
import Profile from './screens/profile'
import Error from './screens/error'
import Buy from './screens/buy'
import Upload from './screens/upload'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/buy/:id" element={<Buy />} />
            <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;