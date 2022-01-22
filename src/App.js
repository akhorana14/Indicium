import logo from './logo.svg';
import './App.css';
import Login from './screens/login'
import Home from './screens/home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
