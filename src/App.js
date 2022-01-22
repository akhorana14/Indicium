import './App.css';
import Login from './screens/login'
import Home from './screens/home'
import Profile from './screens/profile'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
