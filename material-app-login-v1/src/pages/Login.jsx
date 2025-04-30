import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('consumer');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ name, role }));
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>다움 자재관리 시스템 로그인</h2>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="head">헤드 관리자</option>
        <option value="staff">팀원</option>
        <option value="consumer">소비자</option>
      </select><br /><br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
