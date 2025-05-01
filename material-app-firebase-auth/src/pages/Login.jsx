import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert("Firebase 로그인 구현 예정");
  };

  return (
    <div>
      <h2>로그인</h2>
      <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="비밀번호" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}