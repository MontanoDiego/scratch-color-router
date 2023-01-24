import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <p style={{ color: 'white', fontSize: '20px' }}>click the cat to reset!</p>
      <Link to='/'>
        <img src='https://httpcats.com/404.jpg' style={{ height: '500px', width: '500px' }} />
      </Link>
    </>
  );
}
