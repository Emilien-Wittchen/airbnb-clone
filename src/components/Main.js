import React from 'react';
import photoGrid from '../assets/images/photo_grid.png';
import './Main.css';

export default function Main() {
  return (
    <section className='hero'>
      <img alt='photo-grid' src={photoGrid} className='photo--grid' />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
