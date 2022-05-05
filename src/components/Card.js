import React from 'react';
import image1 from '../assets/images/card_image1.png';
import image2 from '../assets/images/card_image2.png';
import image3 from '../assets/images/card_image3.png';
import star from '../assets/images/star.png';

import './Card.css';

export default function Card() {
  return (
    <div className='card'>
      <img src={image1} className='card--image' />
      <div className='card--stats'>
        <img src={star} className='star' />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span>From $316</span> / person
      </p>
      <img src={image2} className='card--image' />
      <div className='card--stats'>
        <img src={star} className='star' />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Learn wedding photography</p>
      <p>
        <span>From $125</span> / person
      </p>
      <img src={image3} className='card--image' />
      <div className='card--stats'>
        <img src={star} className='star' />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Group Mountain Biking</p>
      <p>
        <span>From $50</span> / person
      </p>
    </div>
  );
}
