import './App.css';
import Login from './screens/login'
import Home from './screens/home'
import Profile from './screens/profile'
import Buy from './screens/buy'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/buy/*" element={<Buy />} />
      {/*<Route path="/buy" element={<Buy />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
