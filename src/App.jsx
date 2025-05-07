import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <h1>다움 자재관리 시스템</h1>
        <nav>
          <ul>
            <li><Link to="/login">Login 페이지</Link></li>
            <li><Link to="/dashboard">Dashboard 페이지</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
