import './App.css';
import Login from './screens/login'
import Home from './screens/home'
import Profile from './screens/profile'
import Error from './screens/error'
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
            <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
