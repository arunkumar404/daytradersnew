import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header_container">
      <p className='company_name'>daytraders</p>
      <div className="tabs_container">
        <div className="tabs">
          <a href='#'>Courses</a>
          <a href='#'>Learning Resources</a>
          <a href='#'>Reviews</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
        </div>
        <button className='enroll_btn'>Enroll</button>
      </div>
    </div>
  )
}

export default Header