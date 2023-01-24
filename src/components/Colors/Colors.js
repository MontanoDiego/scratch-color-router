import React from 'react';
import { useParams } from 'react-router-dom';

export default function Colors() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className='color' style={{ backgroundColor: color, height: '500px', width: '500px' }}>
      <h2>{color}</h2>
    </div>
  );
}
