import React, { useState } from 'react';

function AddMaterial() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`자재 추가됨: ${name} - ${quantity}개`);
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>자재 추가</h2>
      <input placeholder="자재명" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="수량" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  );
}

export default AddMaterial;
