import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      navigate('/login');
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {user && (
        <>
          <h2>{user.name}님 환영합니다 👋</h2>
          <p>당신의 역할: <strong>{user.role}</strong></p>
          <p>이 페이지는 Dashboard입니다.</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
