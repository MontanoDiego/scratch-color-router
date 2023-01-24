import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Colors.css';

export default function Colors() {
  const { r, g, b } = useParams();
  const history = useHistory();
  
  const rCheck = Number(r);
  const gCheck = Number(g);
  const bCheck = Number(b);
  
  const color = `rgb(${rCheck}, ${gCheck}, ${bCheck})`;

  if (isNaN(rCheck) || isNaN(gCheck) || isNaN(bCheck)) {
    history.push('/404');
  } else {
    return (
      <div className='color' style={{ 
        backgroundColor: color, 
        height: '500px', 
        width: '500px'
      }}>
  
        <h2 className='color'>{color}</h2>
      </div>
    );
  }
}