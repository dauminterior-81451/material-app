import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Materials from './Materials';
import AddMaterial from './AddMaterial';

function App() {
  return (
    <div>
      <h1>다움 자재관리 시스템</h1>
      <nav>
        <Link to="/">대시보드</Link> | <Link to="/materials">자재 목록</Link> | <Link to="/add">자재 추가</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/add" element={<AddMaterial />} />
      </Routes>
    </div>
  );
}

export default App;
