

import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="calmmind-header">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      <Routes>
        <Route path="/" element={
          <div className="calmmind-container">
            <h1>CalmMind</h1>
            <h2>Your Personal Wellness Buddy</h2>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App
