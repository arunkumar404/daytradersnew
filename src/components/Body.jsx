import React from 'react'
import './Body.css';
import Landing from './Landing';
import Intro from './Intro';

const Body = () => {
  return (
    <div className='body_container'>
      <Landing/>
      <Intro/>
    </div>
  )
}

export default Body