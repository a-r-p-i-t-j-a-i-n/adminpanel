import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
    
        {/* Define routes */}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/signup' element={<Signup/>}/>
          {/* Add more routes for other pages */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
