import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <h1>다움 자재관리 시스템</h1>
      <Login />
      <Dashboard />
    </div>
  );
};

export default App;