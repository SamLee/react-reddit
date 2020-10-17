import React from 'react';
import './Logo.css';
import logo from './logo.gif';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="yeppers" />
    </div>
  );
}

export default Logo;
