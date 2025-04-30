import React, { useState } from 'react';

function Materials() {
  const [materials] = useState([
    { id: 1, name: '시멘트', quantity: 20 },
    { id: 2, name: '철근', quantity: 50 }
  ]);

  return (
    <div>
      <h2>자재 목록</h2>
      <ul>
        {materials.map((m) => (
          <li key={m.id}>
            {m.name}: {m.quantity}개
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
