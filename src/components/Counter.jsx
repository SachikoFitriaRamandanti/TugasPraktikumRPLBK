// Counter.jsx
import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      // Tambahkan logika atau aksi ketika counter mencapai 10 di sini
      console.log('Counter mencapai angka 10!');
    }
  }, [count]);

  return (
    <div className="counter-container">
      <h1 className="counter">TUGAS MODUL 3 KELOMPOK 13 || Counter: {count}</h1>
      {count === 10 && <p className="message">Counter dah nyampe angka 10 gais!</p>}
      {count === 13 && <p className="message">Counter dah nyampe angka 13 gais! Kelompok 13 niee bozz</p>}
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );

}

export default Counter;
