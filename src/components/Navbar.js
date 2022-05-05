import React from 'react';
import logo from '../assets/images/airbnb_1.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <img alt='logo' src={logo} className='nav--logo' />
    </nav>
  );
}
